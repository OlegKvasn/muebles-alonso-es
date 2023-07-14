import styles from "./sidebar.module.css";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <Link href="/contacto" className={styles.logo}>
        <Image src="/barra.png" alt="" width={219} height={173} />
      </Link>
      <div>Ofertas</div>
      <div className={styles.links}>
        <Link href="/empresa" className={styles.navigation}>
          Empresa
        </Link>
        <Link href="/muebles" className={styles.navigation}>
          Muebles
        </Link>
        <Link href="/servicios" className={styles.navigation}>
          Servicios
        </Link>
        <Link href="/ofertas" className={styles.navigation}>
          Ofertas
        </Link>
        <Link href="/contacto" className={styles.navigation}>
          Contacto
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
