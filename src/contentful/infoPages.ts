import { TypeInfoPages } from "@/@types/contetnful";
import { InfoPages } from "@/@types";
import { Entry } from "contentful";
import contentfulClient from "./contentfulClient";
import { parseOneContentfulContentImage } from "./contentImage";

type InfoPagesEntry = Entry<TypeInfoPages, undefined, string>;

export function parseContentfulInfoPages(
  productEntry?: InfoPagesEntry
): InfoPages | null {
  if (!productEntry) {
    return null;
  }
  return {
    title: productEntry.fields.title,
    slug: productEntry.fields.slug,
    pageTitleName: productEntry.fields.pageTitleName || null,
    pageTitleDescription: productEntry.fields.pageTitleDescription || null,
    pageImage:
      parseOneContentfulContentImage(productEntry.fields.pageImage) || null,
    pageContent: productEntry.fields.pageContent,
    activeSidebar: productEntry.fields.activeSidebar,
  };
}

// Function for All Products.
interface FetchAllPagesOptions {
  preview: boolean;
}
export async function fetchAllInfoPages({
  preview,
}: FetchAllPagesOptions): Promise<InfoPages[]> {
  const contentful = contentfulClient({ preview });
  const pageResult = await contentful.getEntries<TypeInfoPages>({
    content_type: "infoPages",
  });
  return pageResult.items.map(
    (productEntry) => parseContentfulInfoPages(productEntry) as InfoPages
  );
}

interface fetchPageOptions {
  slug: string;
  preview: boolean;
}
export async function fetchInfoPage({
  slug,
  preview,
}: fetchPageOptions): Promise<InfoPages | null> {
  const contentful = contentfulClient({ preview });
  const pageResult = await contentful.getEntries<TypeInfoPages>({
    content_type: "infoPages",
    "fields.slug": slug,
  });
  return parseContentfulInfoPages(pageResult.items[0]);
}
