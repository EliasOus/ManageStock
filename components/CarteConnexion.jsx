import styles from "./CarteConnexion.module.css"
import Image from "next/image"

import logo from "@/public/Logo-White.png"

export default function CarteConnexion() {
    return <>
        <section className={styles.maSection}>
            <div className={styles.logo}>
                <Image src={logo} alt="logo ManageStock" className={styles.logoImage}/>
            </div>
            <div className={styles.liens}>
                <div><a href="#">Connexion</a></div>
                <div><a href="#">Creer un Compte</a></div>
            </div>
            <div className={styles.zoneText}>
                <input type="text" placeholder="Nom d'entreprise" />
            </div>
            <div className={styles.zoneText}>
                <input type="text" placeholder="Email" />
            </div>
            <div className={styles.zoneText}>
                <input type="text" placeholder="Nom d'utilisateur" />
            </div>
            <div className={styles.zoneText}>
                <input type="text" placeholder="Mot de Passe" />
            </div>
            <div>
                {/* Boutton lady */}
            </div>
        </section>
    </>
}
