import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "../search/searchBar";
import DropDownLink from "./dropDownLink";

//TODO: Dropdown Menus
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image src="/logo.jpg" alt="" width={270} height={80} />
      </Link>
      <div className={styles.searchBar}>
        <SearchBar />
      </div>
      <div className={styles.links}>
        <Link href="/empresa" className={styles.navigation}>
          Empresa
        </Link>
        <div className={styles.dropdown}>
          <DropDownLink innerText={"Muebles"} />

          {/* <Link href="/muebles" className={styles.dropDownLink}>
            Muebles
          </Link>
          <div className={styles.dropdownMenu}>Dropdown content</div> */}
        </div>
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
    </div>
  );
};

export default Navbar;
