import styles from "./page.module.css";
import Image from "next/image";
import banner from "@/public/banner.png";

export default function Home() {
  return (
    <div className={styles.sectionBanner}>
      <Image src={banner} alt={"banner de la page d'accueil"} />
    </div>
  );
}
