import styles from "./product.module.css";
import { Metadata, ResolvingMetadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { fetchProduct, fetchAllProducts } from "@/contentful/productsMuebles";
import RichText from "@/contentful/RichText";
import Gallery from "@/components/images/gallery";
import CardCarousel from "@/components/product/cardCarousel";
import Link from "next/link";

interface ProductPageParams {
  product: string;
}
interface ProductPageProps {
  params: ProductPageParams;
}

// products can be statically generated at build time with Next.js.
export async function generateStaticParams(): Promise<ProductPageParams[]> {
  const products = await fetchAllProducts({ preview: false });
  return products.map((product) => ({ product: product.titleSlug }));
}

export async function generateMetadata(
  { params }: ProductPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product = await fetchProduct({
    slug: params.product,
    preview: draftMode().isEnabled,
  });
  if (!product) {
    return notFound();
  }
  return {
    title: product.title,
  };
}

const ProductDetails = async ({ params }: ProductPageProps) => {
  const product = await fetchProduct({
    slug: params.product,
    preview: draftMode().isEnabled,
  });
  if (!product) {
    return notFound();
  }

  const products = await fetchAllProducts({ preview: draftMode().isEnabled });
  const filteredProducts = products.filter((e) => {
    return e.category === product.category && e.titleSlug !== product.titleSlug;
  });

  return (
    <>
      <div className={styles.links}>
        <Link href={`/muebles/`}>
          <h4>Muebles ⤍</h4>
        </Link>
        <Link href={`/muebles/${product.category}`}>
          <h4>{product.category == "sofas" ? "sofás" : product.category} ⤍</h4>
        </Link>
        <h4 className={styles.actualPage}>{product.title}</h4>
      </div>
      <div className={styles.container}>
        {product.images && <Gallery images={product.images} />}
        <h2>{product.title}</h2>
        <div className={styles.priceContainer}>
          {product.priceBefore && (
            <p className={styles.priceBefore}>{`${product.priceBefore} €`}</p>
          )}
          {product.price && (
            <p className={styles.price}>{`${product.price} €`}</p>
          )}
        </div>
        <div className={styles.description}>
          {/* {product.description && <h3>Details:</h3>} */}
          <RichText document={product.description} />
        </div>
      </div>
      <hr className={styles.separator} />
      <h3 className={styles.title2}>Tambien te puede gustar :</h3>
      <CardCarousel products={filteredProducts} />
    </>
  );
};

export default ProductDetails;
