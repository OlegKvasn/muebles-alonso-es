"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "./reactRespCarousel.module.scss";
import ResponsiveImage from "@/components/images/responsiveImage";

interface Images {
  src: string;
  title: string;
}

const ReactResponsiveCarousel = ({ images }: { images: Images[] }) => {
  return (
    <Carousel
      className={styles.carousel}
      autoPlay={true}
      interval={4000}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      emulateTouch={true}
    >
      {images.map((img, idx: number) => (
        <ResponsiveImage
          key={`${idx}-${img.title}`}
          src={img.src}
          alt={img.title}
          fill
          priority
          isInteractive={false}
          sizes="(max-width:1023px) 640px,800px"
        />
      ))}
    </Carousel>
  );
};

export default ReactResponsiveCarousel;
