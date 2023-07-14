"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./gallery.module.scss";
import ResponsiveImage from "../responsiveImage";
import { ContentImage } from "@/@types";

const Gallery = ({ images }: { images: ContentImage[] }) => {
  const renderCustomThumbs = () => {
    const thumbList = images.map((img, idx: number) => (
      <ResponsiveImage
        key={`${idx}-${img.alt}`}
        src={`https:${img.src}`}
        alt={img.alt}
        fill
        priority
        isInteractive={false}
        sizes="100px"
      />
    ));
    return thumbList;
  };
  return (
    <Carousel
      className={styles.carousel}
      autoPlay={false}
      infiniteLoop={true}
      showIndicators={false}
      showStatus={true}
      showThumbs={images.length > 1 ? true : false}
      emulateTouch={true}
      thumbWidth={100}
      renderThumbs={renderCustomThumbs}
    >
      {images.map((img, idx: number) => (
        <ResponsiveImage
          key={`${idx}-${img.alt}`}
          src={`https:${img.src}`}
          alt={img.alt}
          fill
          priority
          isInteractive={false}
          sizes="(max-width:1060px) 640px,800px"
        />
      ))}
    </Carousel>
  );
};

export default Gallery;
