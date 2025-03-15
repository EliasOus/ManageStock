"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "@/public/Logo-White.png";
import btnMenu from "@/public/btnMenu.png";
import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} alt="Logo ManageStock" className={styles.image} />
      </div>

      <div onClick={toggleNav} className={styles.menuButton}>
        <Image
          src={btnMenu}
          alt="Menu for small screens"
          className={styles.menuIcon}
        />
      </div>

      <nav className={`${styles.nav} ${isNavVisible && styles.navActive}`}>
        <ul className={styles.liste}>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link
              href="/#Apropos"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("Apropos");
              }}
            >
              À propos
            </Link>
          </li>
          <li>
            <Link href="/contactez-nous">Contact</Link>
          </li>
          <li>
            <Link
              href="/#Faq"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("Faq");
              }}
            >
              FAQ
            </Link>
          </li>
        </ul>
        <div className={styles.buttons}>
          <Button texte="S'inscrire" goToUrl={"/inscription"} />
          <Button texte="Se connecter" active={true} goToUrl={"/login"} />
        </div>
      </nav>
    </header>
  );
}
