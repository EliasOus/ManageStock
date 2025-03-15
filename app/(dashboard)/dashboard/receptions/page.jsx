"use client"
import InfoBloc from "@/components/InfoBlock";
import InputForm from "@/components/InputForm";
import style from "./page.module.css";
import datas from "@/data/datas.json";

export default function Receptions() {
  const inputFields = [
    { name: "numerocommande", placeholder: "Entrez le numéro de commande" },
    { name: "upesku", placeholder: "Upe/Sku" },
    { name: "quantite", placeholder: "Quantité" },
  ];

  return (
    <>
      <h1 className={style.titre}>Gestion des réceptions</h1>
      
      <div className={style.inputform}>
        <InputForm 
          inputFields={inputFields} 
          nonAnnuler={true}
        />
      </div>
      
      <div>
        <InfoBloc
          defaultTitle={"Receptions"}
          defaultHeaders={[
            "Upe/Sku",
            "nomArticle",
            "fournisseur",
            "quantite",
            "date",
          ]}
          data={datas.receptions}
        />
      </div>
    </>
  );
}