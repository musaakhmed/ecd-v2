import { Document, Page, Text, View, StyleSheet, renderToBuffer } from '@react-pdf/renderer'
import {
  isChoiceCorrect,
  scoreQuiz,
  type EvaluationAnswers,
  type EvaluationForm,
} from '@/lib/evaluations'

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 48,
    paddingHorizontal: 42,
    fontSize: 11,
    fontFamily: 'Helvetica',
    color: '#1f2533',
  },
  brand: {
    fontSize: 10,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    color: '#0086ab',
    marginBottom: 6,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 8,
  },
  meta: {
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#d5ddea',
  },
  metaLine: {
    marginBottom: 3,
  },
  score: {
    marginTop: 8,
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    color: '#006580',
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    marginTop: 14,
    marginBottom: 6,
    color: '#0B6F93',
  },
  block: {
    marginBottom: 10,
    padding: 8,
    backgroundColor: '#f4f7fb',
  },
  prompt: {
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },
  answer: {
    marginBottom: 2,
  },
  ok: { color: '#0B6F93' },
  ko: { color: '#b42318' },
  footer: {
    position: 'absolute',
    bottom: 24,
    left: 42,
    right: 42,
    fontSize: 9,
    color: '#5f6980',
  },
})

function formatValue(value: string | string[] | undefined): string {
  if (!value) return '—'
  return Array.isArray(value) ? value.join(', ') : value
}

function EvaluationPdfDocument({
  form,
  firstName,
  lastName,
  courseTitle,
  answers,
  submittedAt,
}: {
  form: EvaluationForm
  firstName: string
  lastName: string
  courseTitle?: string
  answers: EvaluationAnswers
  submittedAt: string
}) {
  const quizScore = form.kind === 'quiz' ? scoreQuiz(form, answers) : null

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <Text style={styles.brand}>Espace Forma (EF) asbl</Text>
        <Text style={styles.title}>{form.title}</Text>
        <View style={styles.meta}>
          <Text style={styles.metaLine}>Participant : {firstName} {lastName}</Text>
          {courseTitle ? <Text style={styles.metaLine}>Module : {courseTitle}</Text> : null}
          <Text style={styles.metaLine}>Date : {submittedAt}</Text>
          {quizScore ? (
            <Text style={styles.score}>
              Score : {quizScore.correct} / {quizScore.total}
            </Text>
          ) : null}
        </View>

        {form.questions.map((question, index) => {
          if (question.type === 'likert-group') {
            return (
              <View key={question.id}>
                <Text style={styles.sectionTitle}>{question.prompt}</Text>
                {question.items.map((item) => (
                  <View key={item.id} style={styles.block}>
                    <Text style={styles.prompt}>{item.prompt}</Text>
                    <Text style={styles.answer}>
                      {formatValue(answers[`${question.id}:${item.id}`])}
                    </Text>
                  </View>
                ))}
              </View>
            )
          }

          if (question.type === 'textarea') {
            const remarks = formatValue(answers[question.id])
            if (question.optional && remarks === '—') return null
            return (
              <View key={question.id} style={styles.block}>
                <Text style={styles.prompt}>{question.prompt}</Text>
                <Text style={styles.answer}>{remarks}</Text>
              </View>
            )
          }

          const correct = question.correct?.length ? isChoiceCorrect(question, answers[question.id]) : null
          return (
            <View key={question.id} style={styles.block} wrap={false}>
              <Text style={styles.prompt}>
                {index + 1}. {question.prompt}
              </Text>
              <Text style={styles.answer}>Réponse : {formatValue(answers[question.id])}</Text>
              {correct === true ? (
                <Text style={styles.ok}>Résultat : correct</Text>
              ) : correct === false ? (
                <Text style={styles.ko}>Résultat : incorrect — attendu : {question.correct?.join(', ')}</Text>
              ) : null}
            </View>
          )
        })}

        <Text style={styles.footer} fixed>
          Document généré automatiquement — ne pas répondre à cet e-mail.
        </Text>
      </Page>
    </Document>
  )
}

export async function renderEvaluationPdf(input: {
  form: EvaluationForm
  firstName: string
  lastName: string
  courseTitle?: string
  answers: EvaluationAnswers
  submittedAt: string
}): Promise<Buffer> {
  const buffer = await renderToBuffer(
    <EvaluationPdfDocument
      form={input.form}
      firstName={input.firstName}
      lastName={input.lastName}
      courseTitle={input.courseTitle}
      answers={input.answers}
      submittedAt={input.submittedAt}
    />,
  )
  return Buffer.from(buffer)
}
