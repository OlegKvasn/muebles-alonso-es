"use client";

import Link from "next/link";
import { useState } from "react";

const DropDownLink = (props: { innerText: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link
        href={props.innerText.toLowerCase()}
        // className={styles.dropDownLink}
      >
        {props.innerText}
      </Link>
      {open && (
        <div>
          <Link href="/muebles/sofas">Sofa</Link>
          <Link href="/muebles/salones">Salon</Link>
        </div>
      )}
    </div>
  );
};

export default DropDownLink;
