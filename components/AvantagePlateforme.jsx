import styles from "@/components/AvantagePlateforme.module.css";
import Image from "next/image";

export default function AvantagePlateforme({ imageCarte, titre, description }) {
 return (
  <div className={styles.carte}>
   <div>
    <Image
     className={styles.imageContainer}
     src={imageCarte}
     alt="image avantage"
     width={60}
     height={60}
    />
   </div>

   <h3 className={styles.titre}>{titre}</h3>
   <h3 className={styles.description}>{description}</h3>
  </div>
 );
}
