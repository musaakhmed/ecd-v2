'use client'

import React, { useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  courseOptionList,
  evaluationCategoryHref,
  flattenQuestionIds,
  isAnswerFilled,
  MAX_COURSE_TITLE_LENGTH,
  requiresCourseTitle,
  type EvaluationAnswers,
  type EvaluationForm,
  type EvaluationQuestion,
} from '@/lib/evaluations'

type Props = {
  form: EvaluationForm
}

function asList(value: string | string[] | undefined): string[] {
  if (!value) return []
  return Array.isArray(value) ? value : [value]
}

function questionAnchor(id: string) {
  return `question-${id.replaceAll(':', '-')}`
}

export function EvaluationFormClient({ form }: Props) {
  const courseOptions = useMemo(() => courseOptionList(form), [form])
  const asksCourseTitle = requiresCourseTitle(form)
  const usesCourseSelect = courseOptions.length > 0
  const questionIds = useMemo(() => flattenQuestionIds(form), [form])
  const formRef = useRef<HTMLFormElement>(null)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [courseTitle, setCourseTitle] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [answers, setAnswers] = useState<EvaluationAnswers>({})
  const [fieldError, setFieldError] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  function setAnswer(id: string, value: string | string[]) {
    setAnswers((prev) => ({ ...prev, [id]: value }))
    setFieldError(null)
  }

  function toggleCheckbox(id: string, option: string) {
    const current = asList(answers[id])
    const next = current.includes(option) ? current.filter((v) => v !== option) : [...current, option]
    setAnswer(id, next)
  }

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  function validate(): boolean {
    if (!firstName.trim() || !lastName.trim()) {
      setFieldError('Veuillez indiquer votre prénom et votre nom.')
      scrollTo('eval-identity')
      return false
    }
    if (asksCourseTitle && !courseTitle.trim()) {
      setFieldError(
        usesCourseSelect
          ? 'Veuillez indiquer le module de formation suivi.'
          : 'Veuillez indiquer la formation suivie.',
      )
      scrollTo('eval-identity')
      return false
    }
    if (courseTitle.trim().length > MAX_COURSE_TITLE_LENGTH) {
      setFieldError('L’intitulé de la formation est trop long.')
      scrollTo('eval-identity')
      return false
    }
    const missing = questionIds.find((id) => !isAnswerFilled(answers[id]))
    if (missing) {
      setFieldError('Veuillez répondre à toutes les questions.')
      scrollTo(questionAnchor(missing))
      return false
    }
    return true
  }

  async function submit() {
    if (!validate()) return
    setIsSubmitting(true)
    setSubmitError(null)
    try {
      const res = await fetch('/api/evaluations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formId: form.slug,
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          courseTitle: courseTitle.trim() || undefined,
          answers,
          website: honeypot,
        }),
      })
      const data = (await res.json().catch(() => null)) as { error?: string } | null
      if (!res.ok) {
        throw new Error(data?.error || 'L’envoi a échoué. Merci de réessayer ou de prévenir le formateur.')
      }
      setIsSuccess(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'L’envoi a échoué.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="rounded-2xl border border-azure-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-azure-600">Merci</p>
        <h2 className="mt-2 text-2xl font-bold text-text">Vos réponses ont bien été envoyées</h2>
        <p className="mt-3 text-muted">
          Un document PDF a été transmis à Espace Forma. Vous pouvez fermer cette page.
        </p>
        <Link
          href={evaluationCategoryHref(form.kind)}
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl bg-azure-600 px-5 py-3 font-semibold text-white transition hover:bg-azure-700 active:scale-[0.97]"
        >
          {form.kind === 'quiz' ? 'Retour aux quizz' : 'Retour aux évaluations'}
        </Link>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={(e) => {
        e.preventDefault()
        void submit()
      }}
      className="rounded-2xl border border-azure-200 bg-white p-5 shadow-sm md:p-8"
    >
      <p className="mb-6 text-sm text-muted">
        Vos réponses sont envoyées à Espace Forma pour le suivi pédagogique. Aucun compte n’est créé.
      </p>

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="eval-website">Site web</label>
        <input
          id="eval-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div id="eval-identity" className="mb-8 scroll-mt-24">
        <h2 className="mb-4 text-lg font-semibold text-text">Qui êtes-vous ?</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="eval-firstname" className="mb-1.5 block text-sm font-semibold text-text">
              Prénom <span className="text-azure-700">*</span>
            </label>
            <input
              id="eval-firstname"
              name="firstName"
              autoComplete="given-name"
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
                setFieldError(null)
              }}
              className="min-h-12 w-full rounded-xl border border-border bg-white px-4 text-base text-text outline-none ring-azure-500 focus:ring-2"
            />
          </div>
          <div>
            <label htmlFor="eval-lastname" className="mb-1.5 block text-sm font-semibold text-text">
              Nom <span className="text-azure-700">*</span>
            </label>
            <input
              id="eval-lastname"
              name="lastName"
              autoComplete="family-name"
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
                setFieldError(null)
              }}
              className="min-h-12 w-full rounded-xl border border-border bg-white px-4 text-base text-text outline-none ring-azure-500 focus:ring-2"
            />
          </div>
        </div>
        {usesCourseSelect ? (
          <div className="mt-4">
            <label htmlFor="eval-course" className="mb-1.5 block text-sm font-semibold text-text">
              Module suivi <span className="text-azure-700">*</span>
            </label>
            <select
              id="eval-course"
              name="courseTitle"
              required
              value={courseTitle}
              aria-describedby={fieldError && !courseTitle ? 'eval-identity-error' : undefined}
              onChange={(e) => {
                setCourseTitle(e.target.value)
                setFieldError(null)
              }}
              className="min-h-12 w-full rounded-xl border border-border bg-white px-4 text-base text-text outline-none ring-azure-500 focus:ring-2"
            >
              <option value="">Choisir un module Titres Services</option>
              {form.courseGroups?.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        ) : asksCourseTitle ? (
          <div className="mt-4">
            <label htmlFor="eval-course" className="mb-1.5 block text-sm font-semibold text-text">
              Formation suivie <span className="text-azure-700">*</span>
            </label>
            <input
              id="eval-course"
              name="courseTitle"
              type="text"
              required
              maxLength={MAX_COURSE_TITLE_LENGTH}
              value={courseTitle}
              aria-describedby={fieldError && !courseTitle.trim() ? 'eval-identity-error' : undefined}
              onChange={(e) => {
                setCourseTitle(e.target.value)
                setFieldError(null)
              }}
              className="min-h-12 w-full rounded-xl border border-border bg-white px-4 text-base text-text outline-none ring-azure-500 focus:ring-2"
            />
          </div>
        ) : null}
      </div>

      <div className="space-y-8">
        {form.questions.map((question, index) => (
          <QuestionBlock
            key={question.id}
            index={index}
            question={question}
            answers={answers}
            setAnswer={setAnswer}
            toggleCheckbox={toggleCheckbox}
          />
        ))}
      </div>

      {fieldError ? (
        <p id="eval-identity-error" className="mt-6 text-sm font-medium text-red-700" role="alert">
          {fieldError}
        </p>
      ) : null}
      {submitError ? (
        <p className="mt-6 text-sm font-medium text-red-700" role="alert">
          {submitError}
        </p>
      ) : null}

      <div className="mt-8 border-t border-border pt-5">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-azure-600 px-6 font-semibold text-white transition hover:bg-azure-700 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-44"
        >
          {isSubmitting ? 'Envoi en cours…' : 'Envoyer'}
        </button>
      </div>
    </form>
  )
}

function QuestionBlock({
  index,
  question,
  answers,
  setAnswer,
  toggleCheckbox,
}: {
  index: number
  question: EvaluationQuestion
  answers: EvaluationAnswers
  setAnswer: (id: string, value: string | string[]) => void
  toggleCheckbox: (id: string, option: string) => void
}) {
  if (question.type === 'likert-group') {
    return (
      <fieldset className="space-y-4">
        <legend className="text-lg font-semibold text-text">{question.prompt}</legend>
        {question.items.map((item) => {
          const id = `${question.id}:${item.id}`
          const value = answers[id]
          return (
            <div
              key={item.id}
              id={questionAnchor(id)}
              className="scroll-mt-24 rounded-xl border border-border bg-surface p-4"
            >
              <p className="mb-3 font-medium text-text">{item.prompt}</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {question.scale.map((option) => {
                  const selected = value === option
                  return (
                    <label
                      key={option}
                      className={`flex min-h-12 cursor-pointer items-center justify-center rounded-xl border px-3 py-2 text-center text-sm font-semibold transition ${
                        selected
                          ? 'border-azure-600 bg-azure-600 text-white'
                          : 'border-border bg-white text-text hover:border-azure-400'
                      }`}
                    >
                      <input
                        type="radio"
                        className="sr-only"
                        name={id}
                        value={option}
                        checked={selected}
                        onChange={() => setAnswer(id, option)}
                      />
                      {option}
                    </label>
                  )
                })}
              </div>
            </div>
          )
        })}
      </fieldset>
    )
  }

  if (question.type === 'textarea') {
    const value = typeof answers[question.id] === 'string' ? answers[question.id] : ''
    return (
      <div id={questionAnchor(question.id)} className="scroll-mt-24">
        <label htmlFor={`eval-${question.id}`} className="mb-2 block text-lg font-semibold text-text">
          {question.prompt}
          {question.optional ? (
            <span className="ml-2 text-sm font-normal text-muted">(facultatif)</span>
          ) : null}
        </label>
        <textarea
          id={`eval-${question.id}`}
          name={question.id}
          rows={5}
          value={value}
          onChange={(e) => setAnswer(question.id, e.target.value)}
          className="min-h-28 w-full rounded-xl border border-border bg-white px-4 py-3 text-base text-text outline-none ring-azure-500 focus:ring-2"
        />
      </div>
    )
  }

  const selectedList = asList(answers[question.id])
  return (
    <fieldset id={questionAnchor(question.id)} className="scroll-mt-24">
      <legend className="mb-4 text-lg font-semibold text-text">
        <span className="mr-2 text-azure-700">{index + 1}.</span>
        {question.prompt}
      </legend>
      {question.imageSrc ? (
        <div className="relative mb-4 overflow-hidden rounded-xl border border-border bg-primary-50">
          <Image
            src={question.imageSrc}
            alt={question.imageAlt || ''}
            width={900}
            height={480}
            className="mx-auto h-auto max-h-56 w-auto object-contain"
          />
        </div>
      ) : null}
      <div className="space-y-2">
        {question.options.map((option) => {
          const selected = selectedList.includes(option)
          return (
            <label
              key={option}
              onClick={() => {
                if (question.type !== 'checkboxes') setAnswer(question.id, option)
              }}
              className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-base transition ${
                selected
                  ? 'border-azure-600 bg-azure-50 text-text'
                  : 'border-border bg-white hover:border-azure-400'
              }`}
            >
              <input
                type={question.type === 'checkboxes' ? 'checkbox' : 'radio'}
                className="h-5 w-5 shrink-0 accent-azure-600"
                name={question.id}
                value={option}
                checked={selected}
                onChange={() =>
                  question.type === 'checkboxes'
                    ? toggleCheckbox(question.id, option)
                    : setAnswer(question.id, option)
                }
              />
              <span>{option}</span>
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
