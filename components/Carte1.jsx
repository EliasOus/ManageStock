import styles from "./Carte1.module.css"
import Image from "next/image"

import Button from "./Button"
export default function Carte1({ titre, paragraphe, texteButton, activeButton, btnGoToUrl, srcImage1, srcImage2, estVisible, estInverse}) {
    return <>
        <section className={`${styles.section} ${estInverse ? styles.inverse : ""}`}>
            <div className={`${styles.contenu} ${estInverse ? styles.contenuInverse : ""}`}>
                <h3>{titre}</h3>
                <p>{paragraphe}</p>
                <Button texte={texteButton} active={activeButton} goToUrl={btnGoToUrl}></Button>
            </div>
            <div className={`${styles.images} ${estInverse ? styles.imagesInverse : ""}`}>
                {estVisible ?
                    <div className={`${styles.image1} ${estInverse ? styles.image1Inverse : ""} `}>
                        <Image src={srcImage1} alt="image" className={styles.renduImage} />
                    </div>
                    :
                    <></>
                }
                <div className={`${styles.image2} ${estInverse ? styles.image2Inverse : ""} `}>
                    <Image src={srcImage2} alt="image" className={styles.renduImage} />
                </div>
            </div>
        </section>

    </>
}