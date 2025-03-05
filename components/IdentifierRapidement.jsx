"use client";
import Image from "next/image";
import styles from "@/components/IdentifierRapidement.module.css";
import imageFixe from "@/public/chart-img.png";

export default function IdentifierRapidement({ backgroundImage, titre, texte, boutonTexte }) {
 return (
  <div className={styles.cardContainer}>
   <div className={styles.textContent}>
    <h1>{titre}</h1>
    <p>{texte}</p>
    <button className={styles.actionButton}>{boutonTexte}</button>
   </div>

   <div className={styles.imageContainer}>
    <Image
     src={backgroundImage}
     alt="Image variable"
     className={styles.backgroundImage}
     width={150}
     height={280}
    />
             <Image
                 src={imageFixe}
     alt="Image fixe"
     className={styles.overlayImage}
     width={150}
     height={120}
    />
   </div>
  </div>
 );
}
