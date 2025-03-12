import CarteInfo from "@/components/CarteInfo";
import styles from "./page.module.css";
import Chart from "@/components/Chart";
import InfoBloc from "@/components/InfoBlock";

import datas from "@/data/datas.json";

export default function Dashboard() {
  return (
    <>
      {/* <h1>dashboard page bonjour</h1> */}
      <div className={styles.maDiv1}>
        <CarteInfo chiffre={"43 000"} titre={"Chiffre d'affaire"}></CarteInfo>
        <CarteInfo chiffre={"100"} titre={"Commande en cours"}></CarteInfo>
        <CarteInfo chiffre={"1 490"} titre={"Produits en stock"}></CarteInfo>
        <CarteInfo chiffre={"19"} titre={"Produits a reaprovisionner"}></CarteInfo>
      </div>
      <div className={styles.madiv2}>
        <Chart></Chart>
      </div>
      <div className={styles.maDiv3}>
        <InfoBloc
          defaultTitle={"Produits a reaprovisionner"}
          defaultHeaders={[
            "Upe/Sku",
            "Nom d’article",
            "Fournisseur",
            "Quantité",
            "Prix",
          ]}
          data={datas.produitsRupture}
        >
        </InfoBloc>
      </div>
    </>
  );
}