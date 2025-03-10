
import styles from "./CarteInfo.module.css"


export default function CarteInfo({ chiffre, titre }) {
    return (
        <>
            <div className={styles.maDiv}>
                <p className={styles.chiffre} >{chiffre}</p>
                <p className={styles.titre}>{titre}</p>
            </div>
        </>
    )
}