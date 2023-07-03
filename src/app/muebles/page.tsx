import Grid from "@/components/grid";
import styles from "./muebles.module.css";
import CategoryCard from "@/components/product/categoryCard";
import { fetchAllCategorys } from "@/contentful/category";
import { draftMode } from "next/headers";

const Muebles = async () => {
  const cards = await fetchAllCategorys({ preview: draftMode().isEnabled });
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Muebles en Bizkaia</h2>
        <p>
          En nuestra sección de muebles podrá encontrar una pequeña muestra
          entre todos nuestros muebles.
        </p>
      </div>
      <Grid>
        <CategoryCard cards={cards} />
      </Grid>
      {/* <Sidebar /> */}
    </div>
  );
};

export default Muebles;
