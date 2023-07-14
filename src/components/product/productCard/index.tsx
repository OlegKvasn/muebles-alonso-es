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
          <Link href={`/muebles/${product.category}/${product.titleSlug}`}>
            {product.images && (
              <ResponsiveImage
                src={`https:${product.images[0].src}`}
                alt={product.images[0].alt}
                fill
                priority
                sizes="(max-width:1023px) 640px,800px"
              />
            )}
          </Link>
          <div className={styles.content}>
            <Link href={`/muebles/${product.category}/${product.titleSlug}`}>
              <h4>{product.title}</h4>
            </Link>
            <div className={styles.priceContainer}>
              {product.priceBefore && (
                <p
                  className={styles.priceBefore}
                >{`${product.priceBefore} €`}</p>
              )}
              {product.price && (
                <p className={styles.price}>{`${product.price} €`}</p>
              )}
            </div>
          </div>
        </Grid.Item>
      ))}
    </>
  );
};

export default ProductCard;
