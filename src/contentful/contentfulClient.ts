import { createClient } from 'contentful'

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_KEY, CONTENTFUL_PREVIEW_ACCESS_TOKEN } = process.env

const client = createClient({
	space: CONTENTFUL_SPACE_ID!,
	accessToken: CONTENTFUL_ACCESS_KEY!,
})

const previewClient = createClient({
	space: CONTENTFUL_SPACE_ID!,
	accessToken: CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
	host: 'preview.contentful.com',
})

export default function contentfulClient({ preview = false }: {preview?: boolean | undefined}) {
	if (preview) {
		return previewClient
	}
	return client
}