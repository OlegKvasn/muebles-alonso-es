import styles from "./sidebar.module.css";
import Link from "next/link";
import Image from "next/image";
import { ProductMuebles } from "@/@types";
import ProductCard from "../product/productCard";

interface SidebarProps extends React.ComponentProps<"aside"> {
  products: ProductMuebles[];
}

const Sidebar = ({ products, ...props }: SidebarProps) => {
  return (
    <aside {...props} className={`${styles.container} ${props.className}`}>
      <Link href="/contacto" className={styles.logo}>
        <Image src="/barra.png" alt="" width={219} height={173} />
      </Link>
      <Link href={"/ofertas"}>
        <h3>Ofertas Recientes</h3>
      </Link>
      <ul className={styles.cards}>
        <ProductCard products={products} />
      </ul>
    </aside>
  );
};

export default Sidebar;
