import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-contentful-secret') ?? request.nextUrl.searchParams.get('secret')
  const expectedSecret = process.env.CONTENTFUL_WEBHOOK_SECRET

  if (!expectedSecret || secret !== expectedSecret) {
    return new NextResponse('Invalid revalidation secret', { status: 401 })
  }

  try {
    const body = await request.json().catch(() => null)
    const slug = body?.slug as string | undefined
    const type = body?.type as string | undefined

    if (type === 'eddSection' && slug) {
      revalidatePath(`/ecole-devoirs/${slug}`)
    }

    if (type === 'titresServiceModule' && slug) {
      revalidatePath(`/titres-service/${slug}`)
    }

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (_error) {
    return new NextResponse('Error revalidating', { status: 500 })
  }
}

