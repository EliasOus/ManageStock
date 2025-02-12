import styles from "./Carte.module.css"
import Image from "next/image"

export default function Carte({ titre, paragraphe, valeurBouton, srcImage1, srcImage2 }) {
    return <>
        <section className={styles.section}>
            <div className={styles.contenu}>
                <h3>{titre}</h3>
                <p>{paragraphe}</p>
                {/* boutton Lady */}
            </div>
            <div className={styles.images}>
                <div className={styles.image1}>
                    <Image src={srcImage1} alt="image" className= {styles.renduImage} />
                </div>
                <div className={styles.image2}>
                    <Image src={srcImage2} alt="image" className= {styles.renduImage} />
                </div>
            </div>
        </section>

    </>
}
