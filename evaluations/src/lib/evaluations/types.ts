export type EvaluationKind = 'quiz' | 'course-eval'

export type ChoiceQuestion = {
  id: string
  type: 'radio' | 'checkboxes'
  prompt: string
  imageSrc?: string
  imageAlt?: string
  options: string[]
  /** Omit or leave empty for unscored questions (e.g. difficulty). */
  correct?: string[]
}

export type LikertGroupQuestion = {
  id: string
  type: 'likert-group'
  prompt: string
  scale: string[]
  items: { id: string; prompt: string }[]
}

export type TextQuestion = {
  id: string
  type: 'textarea'
  prompt: string
  optional?: boolean
}

export type EvaluationQuestion = ChoiceQuestion | LikertGroupQuestion | TextQuestion

export type EvaluationForm = {
  slug: string
  title: string
  shortTitle: string
  description: string
  kind: EvaluationKind
  badgeLabel: string
  heroImage: string
  heroImageAlt: string
  questions: EvaluationQuestion[]
  /** When set, the respondent must pick a Titres Services module before submitting. */
  courseGroups?: { label: string; options: string[] }[]
}

export type EvaluationAnswers = Record<string, string | string[]>
