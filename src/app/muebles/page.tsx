import styles from './muebles.module.css'

const Muebles = () => {
  return ( 
        <div className={styles.container}>
      <div className={styles.title}>
        <h2>Muebles en Bizkaia</h2>
        <p>En nuestra sección de muebles podrá encontrar una pequeña muestra entre todos nuestros muebles.</p>
      </div>
      <div className={styles.block}>
        <div className={styles.content}>
          <h1>Messa!!!!</h1>
          <h1>Sofa!!!!</h1>
          <h1>Armario!!!!</h1>
        </div>
      </div>
    </div>
   );
}
 
export default Muebles;