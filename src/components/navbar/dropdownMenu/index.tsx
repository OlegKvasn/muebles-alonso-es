"use client";

import styles from "./dropdownMenu.module.css";
import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const DropdownMenu = ({
  trigerName,
  subMenuList,
}: {
  trigerName: string;
  subMenuList: string[];
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link href={`/${trigerName.toLowerCase()}`} className={styles.triger}>
        {trigerName}{" "}
        <ChevronDownIcon
          className={`${
            open
              ? styles.activeAccordionChevron
              : styles.inactiveAccordionChevron
          }`}
          aria-hidden
        />
      </Link>
      <div
        className={`${styles.dropdownMenu} ${
          open ? styles.active : styles.inactive
        }`}
      >
        <ul>
          {subMenuList.map((item) => (
            <DropdownItem key={item} subMenuName={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

function DropdownItem({ subMenuName }: { subMenuName: string }) {
  return (
    <li className={styles.dropdownItem}>
      <Link href={`/muebles/${subMenuName}`}>
        {subMenuName == "sofas" ? "sofás" : subMenuName}
      </Link>
    </li>
  );
}

export default DropdownMenu;
