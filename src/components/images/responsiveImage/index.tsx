import Image from "next/image";
import styles from "./responsiveImage.module.css";

interface ResponsiveImage {
  isInteractive?: boolean;
  active?: boolean;
}
const ResponsiveImage = ({
  isInteractive = true,
  ...props
}: ResponsiveImage & React.ComponentProps<typeof Image>) => {
  return (
    <div className={`${styles.imageContainer} ${props.className}`}>
      {props.src ? (
        <Image
          {...props}
          alt={props.alt || ""}
          className={`${
            isInteractive ? styles.imageInteractive : styles.image
          }`}
        />
      ) : null}
    </div>
  );
};

export default ResponsiveImage;
