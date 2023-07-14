"use client";

import styles from "./mobMenu.module.css";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import FurnitureBed from "@/components/icons/furniture/bed";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

const MobileMenu = ({ subMenuList }: { subMenuList: string[] }) => {
  // const [isOpen, setIsOpen] = useState(false);
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
          <DropdownMenu.Item asChild className={styles.DropdownMenuItem}>
            <Link href="/empresa">Empresa</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild className={styles.DropdownMenuItem}>
            <Link href="/muebles">
              <b>Muebles</b>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={styles.DropdownMenuSeparator} />
          {/* <DropdownMenu.Sub>
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenu.SubTrigger asChild>
                <CollapsibleTrigger asChild>
                  <button>Mueb</button>
                </CollapsibleTrigger>
              </DropdownMenu.SubTrigger>
              <CollapsibleContent className="space-y-2">
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
              </CollapsibleContent>
            </Collapsible>
          </DropdownMenu.Sub> */}
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
          <DropdownMenu.Item asChild className={styles.DropdownMenuItem}>
            <Link href="/servicios">Servicios</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild className={styles.DropdownMenuItem}>
            <Link href="/ofertas">Ofertas</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild className={styles.DropdownMenuItem}>
            <Link href="/contacto">Contacto</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className={styles.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default MobileMenu;
