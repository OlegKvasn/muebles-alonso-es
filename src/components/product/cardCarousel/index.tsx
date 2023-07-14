"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "./cardCarousel.module.scss";
import { ProductMuebles } from "@/@types";
import Link from "next/link";
import ResponsiveImage from "@/components/images/responsiveImage";

const CardCarousel = ({ products }: { products: ProductMuebles[] }) => {
  return (
    <Carousel
      className={styles.carousel}
      autoPlay={false}
      infiniteLoop={false}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      emulateTouch={true}
      centerMode={true}
      centerSlidePercentage={50}
    >
      {products.map((product) => (
        <div key={product.titleSlug} className={styles.card}>
          {product.images && (
            <ResponsiveImage
              src={`https:${product.images[0].src}`}
              alt={product.images[0].alt}
              fill
              priority
              sizes="(max-width:1023px) 640px,800px"
            />
          )}
          <Link href={`/muebles/${product.category}/${product.titleSlug}`}>
            <h4 className={styles.title}>{product.title}</h4>
          </Link>
          <div className={styles.priceContainer}>
            {product.priceBefore && (
              <p className={styles.priceBefore}>{`${product.priceBefore} €`}</p>
            )}
            {product.price && (
              <p className={styles.price}>{`${product.price} €`}</p>
            )}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CardCarousel;
