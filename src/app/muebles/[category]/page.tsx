import styles from "./category.module.css";
import ProductCard from "@/components/product/productCard";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { fetchAllProducts } from "@/contentful/productsMuebles";
import Grid from "@/components/grid";
import ResponsiveImage from "@/components/images/responsiveImage";
import { fetchCategory } from "@/contentful/category";
import PageTitle from "@/components/pageTitle";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const category = await fetchCategory({
    slug: params.category,
    preview: draftMode().isEnabled,
  });
  if (!category) {
    return notFound();
  }
  return {
    title: category.category + " - Muebles Alonso",
  };
}

async function categoryPage({ params }: { params: { category: string } }) {
  const products = await fetchAllProducts({ preview: draftMode().isEnabled });
  const filteredProducts = products.filter((e) => {
    return e.category === `${params.category}`;
  });

  if (!products) {
    return notFound();
  }

  const category = await fetchCategory({
    slug: params.category,
    preview: draftMode().isEnabled,
  });

  return (
    <main className={styles.container}>
      {category?.images ? (
        <ResponsiveImage
          src={`https:${category.images[1].src}`}
          alt={category.images[1].alt}
          fill
          priority
          isInteractive={false}
          className={styles.imageContainer}
        />
      ) : null}
      <PageTitle>
        <h2>{params.category == "sofas" ? "sofás" : params.category}</h2>
        {category?.description ? (
          <p>{category.description}</p>
        ) : (
          <p>
            En esta sección de <b>Muebles Alonso</b>, podrás encontrar una
            muestra de nuestro amplio catálogo de{" "}
            {params.category == "sofas"
              ? "sofás"
              : params.category == "auxiliar"
              ? "muebles auxiliares"
              : params.category == "comedor"
              ? "muebles de comedor"
              : params.category == "juvenil"
              ? "muebles juveniles"
              : params.category}
            .
          </p>
        )}
      </PageTitle>
      <Grid>
        <ProductCard products={filteredProducts} />
      </Grid>
    </main>
  );
}

export default categoryPage;
