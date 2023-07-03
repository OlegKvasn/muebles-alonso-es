import styles from "./categoryCard.module.css";
import Link from "next/link";
import { Category } from "@/@types";
import Grid from "../../grid";
import ResponsiveImage from "@/components/images/responsiveImage";

const CategoryCard = ({ cards }: { cards: Category[] }) => {
  return (
    <>
      {cards.map((card) => (
        <Grid.Item key={card.slug}>
          <Link href={`/muebles/${card.slug}`}>
            <div className={styles.card}>
              {card.images && (
                <ResponsiveImage
                  src={`https:${card.images[0].src}`}
                  alt={card.images[0].alt}
                  fill
                  priority
                  sizes="(max-width:1023px) 640px,800px"
                />
              )}
              <h2 className={styles.content}> {card.category}</h2>
              <h4 className={styles.content}>Ver todo...</h4>
            </div>
          </Link>
        </Grid.Item>
      ))}
    </>
  );
};

export default CategoryCard;
