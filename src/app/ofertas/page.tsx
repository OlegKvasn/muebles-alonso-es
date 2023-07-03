import styles from "./ofertas.module.css";
import Sidebar from "@/components/sidebar";
import ProductCard from "@/components/product/productCard";

// import { createClient } from 'contentful';

import { draftMode } from "next/headers";
import { fetchAllProducts } from "@/contentful/productsMuebles";
import Grid from "@/components/grid";

// async function getData() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
//   })
//   const res = await client.getEntries({ content_type: 'productMuebles'})

//   return res.items
// }

const Ofertas = async () => {
  // const products = await getData()
  const products = await fetchAllProducts({ preview: draftMode().isEnabled });
  const filteredProducts = products.filter((e) => {
    return e.isOferta === "oferta";
  });

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Ofertas</h2>
        <p>
          Os mostramos algunas de las ofertas disponibles en Muebles Alonso.
        </p>
      </div>
      <div className={styles.block}>
        <Grid>
          <ProductCard products={filteredProducts} />
        </Grid>
        {/* <Sidebar /> */}
      </div>
    </div>
  );
};

export default Ofertas;
