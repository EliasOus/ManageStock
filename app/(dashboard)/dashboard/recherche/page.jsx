import InfoBloc from "@/components/InfoBlock.jsx";
import styles from "./page.module.css";
import Recherche1 from "@/components/Recherche";

import datas from "@/data/datas.json";

export default function Recherche() {
    return (
        <>
            <div className={styles.contenaire}>
                <div className={styles.divRecherche}>
                    <Recherche1 />
                </div>
                <div className={styles.infoBloc}>
                    <InfoBloc
                        defaultTitle={"Recherche Article"}
                        defaultHeaders={[
                            "Upe/Sku",
                            "Nom d’article",
                            "Fournisseur",
                            "Quantité",
                            "Prix",
                        ]}
                        data={datas.produitsRupture}
                    />
                </div>
            </div>

        </>
    )
}