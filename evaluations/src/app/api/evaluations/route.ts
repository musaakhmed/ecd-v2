import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import {
  flattenQuestionIds,
  getEvaluationForm,
  isAnswerFilled,
  scoreQuiz,
  type EvaluationAnswers,
} from '@/lib/evaluations'
import { renderEvaluationPdf } from '@/lib/evaluations/pdf'

export const runtime = 'nodejs'

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 8
const hits = new Map<string, number[]>()

function getClientIp(request: NextRequest): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown'
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > RATE_LIMIT_MAX
}

function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function parseAnswers(value: unknown): EvaluationAnswers | null {
  if (!isRecord(value)) return null
  const answers: EvaluationAnswers = {}
  for (const [key, raw] of Object.entries(value)) {
    if (typeof raw === 'string') answers[key] = raw
    else if (Array.isArray(raw) && raw.every((item) => typeof item === 'string')) answers[key] = raw
    else return null
  }
  return answers
}

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })
  }

  if (!isRecord(body)) {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })
  }

  if (typeof body.website === 'string' && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true })
  }

  const formId = typeof body.formId === 'string' ? body.formId : ''
  const firstName = typeof body.firstName === 'string' ? body.firstName.trim() : ''
  const lastName = typeof body.lastName === 'string' ? body.lastName.trim() : ''
  const answers = parseAnswers(body.answers)
  const form = getEvaluationForm(formId)

  if (!form || !firstName || !lastName || !answers) {
    return NextResponse.json(
      { error: 'Veuillez indiquer votre nom et répondre à toutes les questions.' },
      { status: 400 },
    )
  }

  const missing = flattenQuestionIds(form).some((id) => !isAnswerFilled(answers[id]))
  if (missing) {
    return NextResponse.json({ error: 'Veuillez répondre à toutes les questions.' }, { status: 400 })
  }

  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      { error: 'Trop de tentatives. Merci de patienter quelques minutes.' },
      { status: 429 },
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.EVALUATIONS_TO_EMAIL || 'ecdasbl@outlook.be'
  const fromEmail = process.env.EVALUATIONS_FROM_EMAIL
  if (!apiKey || !fromEmail) {
    return NextResponse.json(
      {
        error:
          'L’envoi par e-mail n’est pas encore configuré. Merci de prévenir le formateur (clé Resend manquante).',
      },
      { status: 503 },
    )
  }

  const submittedAt = new Date().toLocaleString('fr-BE', {
    dateStyle: 'long',
    timeStyle: 'short',
  })
  const pdf = await renderEvaluationPdf({ form, firstName, lastName, answers, submittedAt })
  const filename = `${slugify(firstName)}-${slugify(lastName)}-${form.slug}-${new Date().toISOString().slice(0, 10)}.pdf`
  const score = form.kind === 'quiz' ? scoreQuiz(form, answers) : null
  const subject = score
    ? `Évaluation — ${form.shortTitle} — ${firstName} ${lastName} (${score.correct}/${score.total})`
    : `Évaluation — ${form.shortTitle} — ${firstName} ${lastName}`

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    subject,
    html: `
      <p>Une nouvelle évaluation a été soumise.</p>
      <ul>
        <li><strong>Formulaire :</strong> ${form.title}</li>
        <li><strong>Participant :</strong> ${firstName} ${lastName}</li>
        <li><strong>Date :</strong> ${submittedAt}</li>
        ${score ? `<li><strong>Score :</strong> ${score.correct} / ${score.total}</li>` : ''}
      </ul>
      <p>Le PDF est joint à cet e-mail.</p>
    `,
    attachments: [
      {
        filename,
        content: pdf,
      },
    ],
  })

  if (error) {
    console.error('Resend evaluation email failed', error)
    return NextResponse.json(
      { error: 'L’envoi a échoué. Merci de réessayer ou de prévenir le formateur.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
