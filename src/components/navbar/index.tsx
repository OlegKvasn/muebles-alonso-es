import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "../search/searchBar";
import DropdownMenu from "./dropdownMenu";
import { fetchCategoryList } from "@/contentful/productsMuebles";
import { draftMode } from "next/headers";
import MobileMenu from "./mobileMenu";

const Navbar = async () => {
  const subMenuList = await fetchCategoryList({
    preview: draftMode().isEnabled,
  });
  return (
    <header className={styles.container}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/logo.jpg"
          alt=""
          width={270}
          height={80}
        />
      </Link>
      <div className={styles.searchBar}>
        <SearchBar />
      </div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navListLink}>
            <Link href="/empresa">Empresa</Link>
          </li>
          <li className={styles.dropdownMenu}>
            <DropdownMenu trigerName={"Muebles"} subMenuList={subMenuList} />
          </li>
          <li className={styles.navListLink}>
            <Link href="/servicios">Servicios</Link>
          </li>
          <li className={styles.navListLink}>
            <Link href="/ofertas">Ofertas</Link>
          </li>
          <li className={styles.navListLink}>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
        {/* FIXME: Style me*/}
        <div className={styles.burgerBtn}>
          <MobileMenu subMenuList={subMenuList} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
