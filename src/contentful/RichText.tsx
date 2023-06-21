import { Document } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

type RichTextProps = {
	document: Document | null | undefined
}

function RichText({ document }: RichTextProps) {
	if (!document) {
		return null
	}

	return <>
          {documentToReactComponents(document)}
        </>
}

export default RichText