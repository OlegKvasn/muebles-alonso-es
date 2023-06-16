import styles from './contacto.module.css'

const Contacto = () => {
  return ( 
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.content}>
          <h1>Contact!!!!</h1>
          <h1>Contact!!!!</h1>
          <h1>Contact!!!!</h1>
        </div>
        <div>
          <p>Si desea contactar con nosotros lo puede hacer bajo este formulario de 
            contacto mediante email o si lo prefiere acudiendo a nuestra oficina y le
            atenderemos personalmente.

            Dirección: Calle Via Galindo, nº1, 48910 Sestao,Bizkaia
            Teléfono: 94 495 62 49</p>
        </div>
      </div>
    </div>
   );
}
 
export default Contacto;