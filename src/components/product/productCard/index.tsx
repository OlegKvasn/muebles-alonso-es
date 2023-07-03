import styles from "./productCard.module.css";
import Link from "next/link";
import { ProductMuebles } from "@/@types";
import Grid from "../../grid";
import ResponsiveImage from "@/components/images/responsiveImage";

const ProductCard = ({ products }: { products: ProductMuebles[] }) => {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.titleSlug} className={styles.card}>
          {product.images && (
            <ResponsiveImage
              src={`https:${product.images[0].src}`}
              alt={product.images[0].alt}
              fill
              priority
              sizes="(max-width:1023px) 640px,800px"
            />
          )}
          <div className={styles.content}>
            <div className={styles.info}>
              <h4>{product.title}</h4>
              {product.price && <p>{`Price: ${product.price} €`}</p>}
            </div>
            <div className={styles.actions}>
              <Link href={`/muebles/${product.category}/${product.titleSlug}`}>
                More info
              </Link>
            </div>
          </div>
        </Grid.Item>
      ))}
    </>
  );
};

export default ProductCard;
