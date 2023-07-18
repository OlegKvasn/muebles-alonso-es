"use client";

import Link from "next/link";
import SubmitAlertDialog, { AlertOpen } from "../ui/alertDialog";
import styles from "./contactForm.module.css";
import FormElement from "./formElements";
import React, { useRef, useState } from "react";

export interface Values {
  clientName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const initialValues = {
    clientName: "",
    email: "",
    phone: "",
    message: "",
  };

  const contactStatuses = {
    loading: "Enviando",
    submitted: "Enviado",
    error: "Un Error",
  };

  const [values, setValues] = useState(initialValues);
  const [checked, setChecked] = useState(false);
  const [resetFocus, setResetFocus] = useState(false);
  const [status, setStatus] = useState("");
  const refAlert = useRef<AlertOpen>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refAlert.current?.setOpenAlert(true);

    const abortLongFetch = new AbortController();
    const abortTimeoutId = setTimeout(() => abortLongFetch.abort(), 7000);

    setStatus(contactStatuses.loading);

    const sendContactForm = async (data: Values) =>
      fetch("/api/contact", {
        signal: abortLongFetch.signal,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.ok) {
            clearTimeout(abortTimeoutId);
            return res.json();
          }
          throw new Error("Whoops! Error sending email.");
        })
        .then((res) => {
          setStatus(contactStatuses.submitted);
          setValues(initialValues);
          setChecked(false);
          setResetFocus(!resetFocus);
        })
        .catch((err) => {
          setStatus(contactStatuses.error);
        });

    await sendContactForm(values);
  };

  const handleChecked = () => {
    setChecked(!checked);
  };

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement> &
    React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues({ ...values, [target.name]: target.value });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <FormElement>
        <FormElement.Input
          label="Nombre"
          errorMessage="Este campo es obligatorio."
          name="clientName"
          placeholder="su nombre..."
          type="text"
          value={values.clientName}
          required={true}
          onChange={handleChange}
          resetFocus={resetFocus}
        />
      </FormElement>
      <FormElement>
        <FormElement.Input
          name="email"
          label="Dirección de correo electrónico"
          placeholder="e-mail..."
          type="email"
          value={values.email}
          required={true}
          onChange={handleChange}
          errorMessage="Por favor, introduce una dirección de correo electrónico válida."
          resetFocus={resetFocus}
        />
      </FormElement>
      <FormElement>
        <FormElement.Input
          name="phone"
          label="Teléfono de contacto (optional)"
          placeholder="teléfono... "
          type="tel"
          value={values.phone}
          onChange={handleChange}
          resetFocus={resetFocus}
        />
      </FormElement>
      <FormElement>
        <FormElement.Textarea
          name="message"
          label="Mensaje"
          errorMessage="Este campo es obligatorio."
          placeholder="¿que pregunta tiene?"
          value={values.message}
          required={true}
          onChange={handleChange}
          cols={30}
          rows={10}
          resetFocus={resetFocus}
        />
      </FormElement>
      <FormElement.CheckBox
        name="acepto"
        label="Acepto la política de privacidad. *"
        type="checkbox"
        checked={checked}
        required={true}
        onChange={handleChecked}
        resetFocus={resetFocus}
      />
      <button
        type="submit"
        className={styles.button}
        disabled={
          !values.clientName || !values.email || !values.message || !checked
        }
      >
        Enviar
      </button>
      <p>
        * Para cumplir con la nueva Ley de Protección de Datos debes leer y
        aceptar la{" "}
        <Link href="/politica-de-privacidad" className={styles.link}>
          política de privacidad
        </Link>
        .
      </p>
      <SubmitAlertDialog
        ref={refAlert}
        title={status}
        description={
          status === "Un Error"
            ? "Se produjo un problema al enviar un correo a este contacto"
            : status === "Enviando"
            ? "El mensaje se esta enviando..."
            : "Gracias, proximamente contactamos con usted"
        }
        buttonTitle="ok"
      />
    </form>
  );
};

export default ContactForm;
