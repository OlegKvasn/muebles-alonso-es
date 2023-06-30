"use client";

import styles from "./mobMenu.module.css";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import FurnitureBed from "@/components/icons/furniture/bed";

const MobileMenu = ({ subMenuList }: { subMenuList: string[] }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className={styles.IconButton}
        aria-label="Main menu"
      >
        <HamburgerMenuIcon />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={styles.DropdownMenuContent}
          sideOffset={5}
        >
          <DropdownMenu.Item className={styles.DropdownMenuItem}>
            <Link href="/empresa">Empresa</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.DropdownMenuItem}>
            <Link href="/muebles">Muebles</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={styles.DropdownMenuSeparator} />
          <DropdownMenu.Group>
            {subMenuList.map((subMenuName) => (
              <DropdownMenu.Item
                key={subMenuName}
                className={styles.SubMenuItem}
                asChild
              >
                <Link href={`/muebles/${subMenuName}`}>
                  {subMenuName == "sofas" ? "sofás" : subMenuName}
                </Link>
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Group>
          <DropdownMenu.Separator className={styles.DropdownMenuSeparator} />
          <DropdownMenu.Item className={styles.DropdownMenuItem}>
            <Link href="/servicios">Servicios</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.DropdownMenuItem}>
            <Link href="/ofertas">Ofertas</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.DropdownMenuItem}>
            <Link href="/contacto">Contacto</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className={styles.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default MobileMenu;
