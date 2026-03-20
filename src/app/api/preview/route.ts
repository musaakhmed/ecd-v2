import { draftMode } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug') || '/'

  const expectedSecret = process.env.CONTENTFUL_PREVIEW_SECRET

  if (!expectedSecret || secret !== expectedSecret) {
    return new NextResponse('Invalid preview secret', { status: 401 })
  }

  const draft = await draftMode()
  await draft.enable()

  return NextResponse.redirect(new URL(slug, request.url))
}

