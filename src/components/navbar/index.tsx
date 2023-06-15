import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <>
      <div>
        <p>Home</p>
      </div>
      <div className={styles.container}>
        <p className={styles.navigation}>Empresa</p>
        <p className={styles.navigation}>Muebles</p>
        <p className={styles.navigation}>Servicios</p>
        <p className={styles.navigation}>Ofertas</p>
        <p className={styles.navigation}>Contacto</p>
      </div>
    </> 
   );
}
 
export default Navbar;