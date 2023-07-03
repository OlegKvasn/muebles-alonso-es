import { Suspense } from "react";
import PhotoSlider from "@/components/photoslider";
import styles from "./home.module.css";
import Grid from "@/components/grid";
import { fetchAllCategorys } from "@/contentful/category";
import { draftMode } from "next/headers";
import CategoryCard from "@/components/product/categoryCard";

export default async function Home() {
  const slides = [
    { url: "/image-1.jpg", title: "Sofa" },
    { url: "/image-2.jpg", title: "Sofa-2" },
    { url: "/image-3.jpg", title: "Silla-1" },
    { url: "/image-4.jpg", title: "Silla-2" },
  ];
  const cards = await fetchAllCategorys({ preview: draftMode().isEnabled });
  return (
    <Suspense>
      <PhotoSlider slides={slides} parentWidth={1000} parentHeight={450} />
      <Grid className={styles.categorysGrid}>
        <CategoryCard cards={cards} />
      </Grid>
    </Suspense>
  );
}
