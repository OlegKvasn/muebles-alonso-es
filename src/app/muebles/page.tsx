import Grid from "@/components/grid";
import styles from "./muebles.module.css";
import CategoryCard from "@/components/product/categoryCard";
import { fetchAllCategorys } from "@/contentful/category";
import { draftMode } from "next/headers";
import PageTitle from "@/components/pageTitle";

const Muebles = async () => {
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
  return (
    <div className={styles.container}>
      <PageTitle>
        <h2>Muebles en Bizkaia</h2>
        <p>
          En nuestra sección de muebles podrá encontrar una pequeña muestra
          entre todos nuestros muebles.
        </p>
      </PageTitle>
      <Grid>
        <CategoryCard cards={sortedCards} />
      </Grid>
      {/* <Sidebar /> */}
    </div>
  );
};

export default Muebles;
