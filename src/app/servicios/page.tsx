import styles from "./servicios.module.css";
import Image from "next/image";
import Sidebar from "@/components/sidebar";
import PageTitle from "@/components/pageTitle";

const Servicios = () => {
  return (
    <div className={styles.container}>
      <PageTitle>
        <h2>Servicios</h2>
        <p>
          Ponemos todo nuestro empeño para proporcionarte los servicios más
          eficaces del mercado.
        </p>
      </PageTitle>
      <section className={styles.block}>
        <article className={styles.content}>
          <Image src="/furgonetas.jpg" alt="" width={512} height={161} />
          <p>
            En <b>Muebles Alonso</b> la calidad es algo innegociable y nuestros
            profesionales están siempre a sú disposición para ayudarle de forma
            personalizada con todas sus dudas y aconsejarle de la manera más
            profesional, ofreciendole:
          </p>
          <p>
            <b>Mediciones</b>, tomamos las medidas necesarias en su vivienda y
            sin compromiso.
          </p>
          <p>
            laboración y desarrollo del plano de su habitación para su posterior{" "}
            <b>estudio</b>. Ajustando los muebles a sus gustos y necesidades
            especificas.
          </p>
          <p>
            <b>Asesoramiento</b> para solucionar cualquier problema que se
            presente a la hora de diseñar su casa, para que vuestro hogar sea
            como quieren.
          </p>
          <p>
            <b>Financiación</b>; consúltenos sobre las múltiples formas de pago
            que ofrecemos.
          </p>
          <p>
            <b>Montaje gratuito</b> realizado por expertos profesionales.
          </p>
          <p>
            <b>Servicio post-venta y atención personalizada</b>. Trato cercano
            para tratar se resolver cualquier problema o incidencia, asegurando
            su completa satisfacción.
          </p>
          <p>
            Contacte con nosotros, responderemos lo antes posible a cualquier
            duda o comentario que nos envíe mediante nuestra sección de
            contacto.
          </p>
        </article>
        <Sidebar />
      </section>
    </div>
  );
};

export default Servicios;
