import Image from "next/image";
import styles from './CarteAvantage.module.css';

const CarteAvantage = ({ imageSrc, title, description }) => {
  return (
    <div className={styles.card}>
      <Image src={imageSrc} alt={title} quality={100} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default CarteAvantage;
