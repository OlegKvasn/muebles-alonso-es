"use client";

import React, { useEffect, useState } from "react";
import styles from "./formInput.module.css";

interface FormElement extends React.ComponentProps<"div"> {
  name?: string;
}
interface Input extends React.ComponentProps<"input"> {
  resetFocus: boolean;
  label: string;
  errorMessage?: string;
}
interface TextArea extends React.ComponentProps<"textarea"> {
  resetFocus: boolean;
  label: string;
  errorMessage?: string;
}

const FormElement = (props: React.ComponentProps<"div">) => {
  return <div className={styles.formElement}>{props.children}</div>;
};

const Input = ({
  name,
  errorMessage,
  label,
  resetFocus,
  ...inputProps
}: Input) => {
  const [focused, setFocused] = useState<boolean>(false);

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocused(true);
  };

  useEffect(() => setFocused(false), [resetFocus]);

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        {...inputProps}
        id={name}
        name={name}
        onBlur={handleFocus}
        data-focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </>
  );
};

const Textarea = ({
  name,
  errorMessage,
  label,
  resetFocus,
  ...textProps
}: TextArea) => {
  const [focused, setFocused] = useState<boolean>(false);

  const handleFocus = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFocused(true);
  };

  useEffect(() => setFocused(false), [resetFocus]);
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea
        {...textProps}
        id={name}
        name={name}
        onBlur={handleFocus}
        data-focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </>
  );
};

const CheckBox = ({
  name,
  errorMessage,
  label,
  resetFocus,
  ...inputProps
}: Input) => {
  const [focused, setFocused] = useState<boolean>(false);

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocused(true);
  };

  useEffect(() => setFocused(false), [resetFocus]);

  return (
    <>
      <label htmlFor={name} className={styles.checkContainer}>
        {label}{" "}
        <input
          {...inputProps}
          id={name}
          name={name}
          onBlur={handleFocus}
          data-focused={focused.toString()}
        />
        <span className={styles.checkmark}></span>
      </label>
    </>
  );
};

FormElement.Input = Input;
FormElement.Textarea = Textarea;
FormElement.CheckBox = CheckBox;
export default FormElement;
