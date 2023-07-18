import styles from "./product.module.css";
import { Metadata, ResolvingMetadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { fetchAllProducts } from "@/contentful/productsMuebles";
import RichText from "@/contentful/RichText";
import CardCarousel from "@/components/product/cardCarousel";
import Link from "next/link";
import { fetchAllInfoPages, fetchInfoPage } from "@/contentful/infoPages";
import PageTitle from "@/components/pageTitle";
import Image from "next/image";
import Sidebar from "@/components/sidebar";

interface InfoPageParams {
  page: string;
}
interface InfoPageProps {
  params: InfoPageParams;
}

// products can be statically generated at build time with Next.js.
export async function generateStaticParams(): Promise<InfoPageParams[]> {
  const pages = await fetchAllInfoPages({ preview: false });
  return pages.map((page) => ({ page: page.slug }));
}

export async function generateMetadata(
  { params }: InfoPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const page = await fetchInfoPage({
    slug: params.page,
    preview: draftMode().isEnabled,
  });
  if (!page) {
    return notFound();
  }
  return {
    title: page.title + " - Muebles Alonso",
  };
}

async function InfoPage({ params }: InfoPageProps) {
  const page = await fetchInfoPage({
    slug: params.page,
    preview: draftMode().isEnabled,
  });
  if (!page) {
    return notFound();
  }

  const products = await fetchAllProducts({ preview: draftMode().isEnabled });
  const filteredProducts = products.filter((e) => {
    return e.isOferta === "oferta";
  });

  const threeProducts = filteredProducts.slice(0, 3);

  return (
    <>
      {page.pageTitleName ? (
        <PageTitle>
          <h2>{page.pageTitleName ? page.pageTitleName : null}</h2>
          <p>{page.pageTitleDescription ? page.pageTitleDescription : null}</p>
        </PageTitle>
      ) : null}
      <main className={styles.container}>
        <article className={styles.pageContent}>
          {page.pageImage ? (
            <div
              style={{
                position: "relative",
                aspectRatio: page.pageImage.width / page.pageImage.height,
                maxWidth: page.pageImage.width,
              }}
            >
              <Image
                src={`https:${page.pageImage.src}`}
                alt={page.pageImage.alt}
                fill
                priority
                sizes="(max-width:1023px) 640px,800px"
              />
            </div>
          ) : null}
          <RichText document={page.pageContent} />
        </article>
        {page.activeSidebar ? (
          <section className={styles.bottomContainer}>
            <hr className={styles.separator} />
            <Link href={"/ofertas"}>
              <h3>Ofertas Recientes</h3>
            </Link>
          </section>
        ) : null}
        {page.activeSidebar ? (
          <div className={styles.cardCarousel}>
            <CardCarousel products={filteredProducts} />
          </div>
        ) : null}
        {page.activeSidebar ? (
          <Sidebar products={threeProducts} className={styles.sideBar} />
        ) : null}
      </main>
    </>
  );
}

export default InfoPage;
