"use client";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import styles from "./alertDialog.module.css";
import React, { useState, forwardRef, useImperativeHandle } from "react";

export type AlertOpen = {
  setOpenAlert: (visible: boolean) => void;
};

interface SubmitAlertDialog {
  title: string;
  description: string;
  buttonTitle: string;
}
// eslint-disable-next-line react/display-name
const SubmitAlertDialog = forwardRef<AlertOpen, SubmitAlertDialog>(
  ({ title, description, buttonTitle }, ref) => {
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      setOpenAlert(visible) {
        setOpen(visible);
      },
    }));

    return (
      <AlertDialog.Root open={open} onOpenChange={setOpen}>
        <AlertDialog.Trigger asChild>{open}</AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className={styles.AlertDialogOverlay} />
          <AlertDialog.Content className={styles.AlertDialogContent}>
            <AlertDialog.Title className={styles.AlertDialogTitle}>
              {title}
            </AlertDialog.Title>
            <AlertDialog.Description className={styles.AlertDialogDescription}>
              {description}
            </AlertDialog.Description>
            <AlertDialog.Action asChild>
              <button className={styles.Button}>{buttonTitle}</button>
            </AlertDialog.Action>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    );
  }
);
export default SubmitAlertDialog;
