import ProductCard from "@/components/product/productCard";
import PageTitle from "@/components/pageTitle";
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

export const metadata = {
  title: "Ofertas - Muebles Alonso",
};

const Ofertas = async () => {
  // const products = await getData()
  const products = await fetchAllProducts({ preview: draftMode().isEnabled });
  const filteredProducts = products.filter((e) => {
    return e.isOferta === "oferta";
  });

  return (
    <main>
      <PageTitle>
        <h2>Ofertas</h2>
        <p>
          Os mostramos algunas de las ofertas disponibles en Muebles Alonso.
        </p>
      </PageTitle>
      <Grid>
        <ProductCard products={filteredProducts} />
      </Grid>
    </main>
  );
};

export default Ofertas;
