import { Suspense } from "react";
import PhotoSlider from "@/components/ui/photoslider";
import styles from "./home.module.css";
import Grid from "@/components/grid";
import { fetchAllCategorys } from "@/contentful/category";
import { draftMode } from "next/headers";
import CategoryCard from "@/components/product/categoryCard";
import ReactResponsiveCarousel from "@/components/ui/ReactResponsiveCarousel";
import CardCarousel from "@/components/product/cardCarousel";
import { fetchAllProducts } from "@/contentful/productsMuebles";
import Link from "next/link";

export default async function Home() {
  const slides = [
    { src: "/image-1.jpg", title: "Sofa" },
    { src: "/image-2.jpg", title: "Sofa-2" },
    { src: "/image-3.jpg", title: "Silla-1" },
    { src: "/image-4.jpg", title: "Silla-2" },
  ];
  const cards = await fetchAllCategorys({ preview: draftMode().isEnabled });
  const sortedCards = cards.sort(function (a, b) {
    if (a.category < b.category) {
      return -1;
    }
    if (a.category > b.category) {
      return 1;
    }
    return 0;
  });

  const products = await fetchAllProducts({ preview: draftMode().isEnabled });
  const filteredProducts = products.filter((e) => {
    return e.isOferta === "oferta";
  });
  return (
    <div className={styles.container}>
      <ReactResponsiveCarousel images={slides} />
      <div className={styles.title}>
        <h3>Muebles Alonso, tu tienda de muebles de confianza</h3>
        <p>Consúltanos y te asesoraremos en la compra de tus muebles</p>
      </div>
      <Grid className={styles.categorysGrid}>
        <CategoryCard cards={sortedCards} />
      </Grid>
      <div className={styles.bottomContainer}>
        <Link href={"/ofertas"}>
          <h2>Muebles en oferta</h2>
        </Link>
        <CardCarousel products={filteredProducts} />
      </div>
    </div>
  );
}
