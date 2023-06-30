/* eslint-disable @next/next/no-img-element */
import styles from "./category.module.css";
import Sidebar from "@/components/sidebar";
import ProductCard from "@/components/productCard";

import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { fetchAllProducts } from "@/contentful/productsMuebles";
import Grid from "@/components/grid";

async function categoryPage({ params }: { params: { category: string } }) {
  const products = await fetchAllProducts({ preview: draftMode().isEnabled });
  const filteredProducts = products.filter((e) => {
    return e.category === `${params.category}`;
  });

  if (!products) {
    return notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>{params.category}</h2>
        <p>
          Os mostramos algunas de las ofertas disponibles en Muebles Alonso.
        </p>
      </div>
      <div className={styles.block}>
        <Grid>
          <ProductCard products={filteredProducts} />
        </Grid>
        <Sidebar />
      </div>
    </div>
  );
}

export default categoryPage;
