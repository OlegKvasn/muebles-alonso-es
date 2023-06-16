import styles from './navbar.module.css'
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>
        <Image src='/logo.jpg' alt='' width={270} height={80} />
      </Link>
      <div className={styles.links}>
        <Link href='/empresa' className={styles.navigation}>Empresa</Link>
        <Link href='/muebles' className={styles.navigation}>Muebles</Link>
        <Link href='/servicios' className={styles.navigation}>Servicios</Link>
        <Link href='/ofertas' className={styles.navigation}>Ofertas</Link>
        <Link href='/contacto' className={styles.navigation}>Contacto</Link>
      </div>
    </div> 
   );
}
 
export default Navbar;