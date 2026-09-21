import type { EvaluationAnswers, EvaluationForm, EvaluationQuestion } from './types'
import { quiz1a } from './quiz1a'
import { quiz1b } from './quiz1b'
import { quiz2 } from './quiz2'
import { titresServicesEval } from './titresServices'

export const evaluationForms: EvaluationForm[] = [quiz1a, quiz1b, quiz2, titresServicesEval]

export const quizForms = evaluationForms.filter((form) => form.kind === 'quiz')
export const courseEvalForms = evaluationForms.filter((form) => form.kind === 'course-eval')

export function evaluationCategoryHref(kind: EvaluationForm['kind']): string {
  return kind === 'quiz' ? '/quizz-informatiques' : '/evaluation-de-formation'
}

export function getEvaluationForm(slug: string): EvaluationForm | undefined {
  return evaluationForms.find((form) => form.slug === slug)
}

export function getEvaluationSlugs(): string[] {
  return evaluationForms.map((form) => form.slug)
}

export function flattenQuestionIds(form: EvaluationForm): string[] {
  const ids: string[] = []
  for (const question of form.questions) {
    if (question.type === 'likert-group') {
      for (const item of question.items) ids.push(`${question.id}:${item.id}`)
    } else {
      ids.push(question.id)
    }
  }
  return ids
}

export function isAnswerFilled(value: string | string[] | undefined): boolean {
  if (value == null) return false
  if (Array.isArray(value)) return value.length > 0
  return value.trim().length > 0
}

function normalizeList(values: string[]): string[] {
  return [...values].map((v) => v.trim()).sort()
}

export function isChoiceCorrect(question: EvaluationQuestion, answer: string | string[] | undefined): boolean {
  if (question.type === 'likert-group') return false
  if (!question.correct?.length) return false
  const given = Array.isArray(answer) ? answer : answer ? [answer] : []
  const expected = question.correct
  const a = normalizeList(given)
  const b = normalizeList(expected)
  return a.length === b.length && a.every((item, i) => item === b[i])
}

export function scoreQuiz(form: EvaluationForm, answers: EvaluationAnswers): { correct: number; total: number } {
  const scored = form.questions.filter(
    (q): q is Extract<EvaluationQuestion, { type: 'radio' | 'checkboxes' }> =>
      (q.type === 'radio' || q.type === 'checkboxes') && Boolean(q.correct?.length),
  )
  let correct = 0
  for (const question of scored) {
    if (isChoiceCorrect(question, answers[question.id])) correct += 1
  }
  return { correct, total: scored.length }
}

export { quiz1a, quiz1b, quiz2, titresServicesEval }
export type { EvaluationAnswers, EvaluationForm, EvaluationKind, EvaluationQuestion } from './types'
