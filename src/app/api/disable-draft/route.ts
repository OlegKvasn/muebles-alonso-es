import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

// GET /api/disable-draft?redirect=<pathname>
export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)

	draftMode().disable()

	redirect(searchParams.get('redirect') || '/')
}