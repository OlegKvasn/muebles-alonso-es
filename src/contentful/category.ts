import { TypeCategory } from "@/@types/contetnful";
import { Category } from "@/@types";
import { Entry } from "contentful";
import contentfulClient from "./contentfulClient";
import { parseContentfulContentImage } from "./contentImage";

type CategoryEntry = Entry<TypeCategory, undefined, string>;

export function parseContentfulCategory(
  productEntry?: CategoryEntry
): Category | null {
  if (!productEntry) {
    return null;
  }
  return {
    category: productEntry.fields.category,
    slug: productEntry.fields.slug,
    description: productEntry.fields.description || null,
    images: parseContentfulContentImage(productEntry.fields.images),
  };
}

// Function for All Products.
interface FetchAllProductsOptions {
  preview: boolean;
}
export async function fetchAllCategorys({
  preview,
}: FetchAllProductsOptions): Promise<Category[]> {
  const contentful = contentfulClient({ preview });
  const productResult = await contentful.getEntries<TypeCategory>({
    content_type: "category",
  });
  return productResult.items.map(
    (productEntry) => parseContentfulCategory(productEntry) as Category
  );
}

// Function for 1 Product.
interface fetchProductOptions {
  slug: string;
  preview: boolean;
}
export async function fetchCategory({
  slug,
  preview,
}: fetchProductOptions): Promise<Category | null> {
  const contentful = contentfulClient({ preview });
  const productResult = await contentful.getEntries<TypeCategory>({
    content_type: "category",
    "fields.slug": slug,
  });
  return parseContentfulCategory(productResult.items[0]);
}
