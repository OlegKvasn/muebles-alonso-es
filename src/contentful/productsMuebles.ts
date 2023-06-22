import { TypeProductMuebles } from "@/@types/contetnful";
import { ProductMuebles } from "@/@types";
import { Entry } from "contentful";
import contentfulClient from "./contentfulClient";
import { parseContentfulContentImage } from "./contentImage";

type ProductMueblesEntry = Entry<TypeProductMuebles, undefined, string>;

export function parseContentfulProductMuebles(
  productEntry?: ProductMueblesEntry
): ProductMuebles | null {
  if (!productEntry) {
    return null;
  }
  return {
    title: productEntry.fields.title,
    titleSlug: productEntry.fields.titleSlug,
    category: productEntry.fields.category,
    isOferta: productEntry.fields.isOferta,
    price: productEntry.fields.price || null,
    priceBefore: productEntry.fields.priceBefore || null,
    materials: productEntry.fields.materials || null,
    description: productEntry.fields.description || null,
    images: parseContentfulContentImage(productEntry.fields.images),
  };
}

// Function for All Products.
interface FetchAllProductsOptions {
  preview: boolean;
}
export async function fetchAllProducts({
  preview,
}: FetchAllProductsOptions): Promise<ProductMuebles[]> {
  const contentful = contentfulClient({ preview });
  const productResult = await contentful.getEntries<TypeProductMuebles>({
    content_type: "productMuebles",
  });
  return productResult.items.map(
    (productEntry) =>
      parseContentfulProductMuebles(productEntry) as ProductMuebles
  );
}

// export async function fetchAllProducts({ preview }: FetchAllProductsOptions) {
// 	const contentful = contentfulClient({ preview })
// 	const productResult = await contentful.getEntries<TypeProductMuebles>({
// 		content_type: 'productMuebles',
// 	})
// 	return productResult.items
// }

// Function for 1 Product.
interface fetchProductOptions {
  slug: string;
  preview: boolean;
}
export async function fetchProduct({
  slug,
  preview,
}: fetchProductOptions): Promise<ProductMuebles | null> {
  const contentful = contentfulClient({ preview });
  const productResult = await contentful.getEntries<TypeProductMuebles>({
    content_type: "productMuebles",
    "fields.titleSlug": slug,
  });
  return parseContentfulProductMuebles(productResult.items[0]);
}
