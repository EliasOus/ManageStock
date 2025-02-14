import Image from "next/image";
import styles from './SectionEntreprise.module.css';

const entreprises = [
  { name: "RBC Financial Group", src: "/rbc-logo.png" },
  { name: "National Bank", src: "/nationalBank-logo.png" },
  { name: "Nestlé", src: "/nestle-logo.png" },
  { name: "Hershey's", src: "/hersheys-logo.png" },
  { name: "Burger King", src: "/burgerKing-logo.png" },
];

const SectionEntreprises = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Approuvé par +20 entreprises leaders dans le monde entier
      </h2>
      <div className={styles.logoContainer}>
        {entreprises.map((entreprise, index) => (
          <Image
            key={index}
            src={entreprise.src}
            alt={entreprise.name}
            width={120}
            height={60}
            className={styles.logo}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionEntreprises;
