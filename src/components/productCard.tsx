/* eslint-disable @next/next/no-img-element */
import styles from "./productCard.module.css";
import Link from "next/link";
import { ProductMuebles } from "@/@types";

const ProductCard = ({ product }: { product: ProductMuebles }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {product.images && (
          <img
            src={product.images[0].src}
            srcSet={`${product.images[0].src}?w=800 1x, ${product.images[0].src} 2x`}
            width={400}
            height={300}
            alt={product.images[0].alt}
          />
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h4>{product.title}</h4>
          <p>{`Price: ${product.price} €`}</p>
        </div>
        <div className={styles.actions}>
          <Link href={`/muebles/${product.category}/${product.titleSlug}`}>
            More info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
