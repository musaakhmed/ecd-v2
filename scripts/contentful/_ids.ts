import crypto from 'node:crypto'

export function safeContentfulId(prefix: string, value: string) {
  const hash = crypto.createHash('sha1').update(value).digest('hex').slice(0, 20)
  return `${prefix}_${hash}`
}

