import PageTitle from "@/components/pageTitle";
import styles from "./contacto.module.css";
import ContactForm from "@/components/contactForm";

export const metadata = {
  title: "Contacto - Muebles Alonso",
};

const Contacto = async () => {
  return (
    <>
      <main className={styles.container}>
        <PageTitle>
          <h2>Contacta con Nosotros</h2>
        </PageTitle>
        <div className={styles.content}>
          <ContactForm />
          <div className={styles.info}>
            <p>
              Si desea contactar con nosotros lo puede hacer bajo este
              formulario de contacto mediante email o si lo prefiere acudiendo a
              nuestra oficina y le atenderemos personalmente.
            </p>
            <p>
              <b>- Dirección:</b> Calle Via Galindo, nº1, 48910 Sestao,Bizkaia
            </p>
            <p>
              <b>- Teléfono:</b> 94 495 62 49
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contacto;
