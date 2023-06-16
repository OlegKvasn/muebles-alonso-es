import styles from './empresa.module.css'
import Image from 'next/image';
import Sidebar from '@/components/sidebar';

const Empresa = () => {
  return ( 
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Empresa</h2>
        <p>Llevamos mucho tiempo trabajando para ser tu tienda de muebles de confianza.</p>
      </div>
      <div className={styles.block}>
        <div className={styles.content}>
          <Image src='/fachada-1.jpg' alt='' width={700} height={220} />
          <p>En <b>Muebles Alonso</b> estamos convencidos de que aquí encontrará el servicio y la calidad que usted busca. 
            Desde nuestros inicios nos hemos propuesto ofrecer   calidad al mejor precio posible, y 
            lo conseguimos a diario.</p>
          <p>Nuestra oferta de muebles abarca desde desde las últimas tendencias  a lo más clásico con amplia variedad de colores, materiales y medidas. 
            Además disponemos de un amplia gama de productos auxiliares desde lámparas, tapicería, artículos de decoración, descanso y mucho más.</p>
          <p>Confie en nosotros porque llevamos más de treinta años asesorando y ayudando a nuestros clientes para asegurar su satisfacción.</p>
          <p>Visite nuestra tienda en Sestao con más de 800m. de exposición y nunca se arrepentirá.</p>
        </div>
        <Sidebar />
      </div>
    </div>
   );
}
 
export default Empresa;