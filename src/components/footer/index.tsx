import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <h1 className={styles.titulo}>Tienda de muebles en Sestao</h1>
      <div className={styles.infoContainer}>
        <div>
          <Link href="/contacto" className={styles.logo}>
            <Image src="/barra.png" alt="" width={219} height={173} />
          </Link>
        </div>
        <div>
          <h4>Office</h4>
          <p>Calle Via Galindo, nº1,</p>
          <p>48910 Sestao,Bizkaia</p>
          <br />
          <h4>Teléfono</h4>
          <p>94 495 62 49</p>
          <br />
          <h4>Horario</h4>
          <p>L-V 9:30-13:30, 16:30-20:30</p>
          <p>S 9:30-13:30</p>
        </div>
        <div className={styles.links}>
          <Link href="/contacto" className={styles.link}>
            Contacta con nosotros
          </Link>
          <Link href="/muebles" className={styles.link}>
            Politica de cookies
          </Link>
          <Link href="/servicios" className={styles.link}>
            Política de privacidad
          </Link>
          <Link href="/ofertas" className={styles.link}>
            Aviso legal
          </Link>
          <Link href="/contacto" className={styles.link}>
            Accesibilidad
          </Link>
          <Link href="/contacto" className={styles.link}>
            Enlaces
          </Link>
        </div>
      </div>
      <div className={styles.nosotros}>
        <h3>Nosotros</h3>
        <p>
          En <b>Muebles Alonso</b> estamos convencidos de que aquí encontrará el
        </p>
        <p>servicio y la calidad que usted busca. Desde nuestros inicios nos</p>
        <p>hemos propuesto ofrecer calidad al mejor precio posible.</p>
      </div>
      {/* <Separator.Root
        className={styles.SeparatorRoot}
        style={{ margin: "15px 0" }}
      /> */}
      <hr className={styles.separator} />

      <div className={styles.bottom}>
        <p>Copyright © 2023 | Alonso Furnitures S.L.</p>
        <Image
          className={styles.logo}
          src="/logoskit-min-1.png"
          alt=""
          width={384}
          height={52}
        />
      </div>
    </footer>
  );
};

export default Footer;
