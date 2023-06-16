import styles from './ofertas.module.css'
import Sidebar from '@/components/sidebar';

const Ofertas = () => {
  return ( 
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Ofertas</h2>
        <p>Os mostramos algunas de las ofertas disponibles en Muebles Alonso.</p>
      </div>
      <div className={styles.block}>
        <div className={styles.content}>
          <h1>OFERTA!!!!</h1>
          <h1>OFERTA!!!!</h1>
          <h1>OFERTA!!!!</h1>
        </div>
        <Sidebar />
      </div>
    </div>
   );
}
 
export default Ofertas;