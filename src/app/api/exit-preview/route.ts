import { draftMode } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const draft = await draftMode()
  draft.disable()

  const { searchParams } = new URL(request.url)
  const redirectPath = searchParams.get('redirect') || '/'

  return NextResponse.redirect(new URL(redirectPath, request.url))
}


