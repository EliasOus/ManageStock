"use client";
import styles from "./page.module.css";
import datas from "@/data/datas.json";
import InputForm from "@/components/InputForm";
import InfoBlock from "@/components/InfoBlock";

export default function Receptions() {
  return (
    <main className={styles.main}>
     
        {/* Header section */}
        <div className={styles.header}>
          <h1>Gestion des Réceptions</h1>
          <div className={styles.separator}></div>
        </div>
        
       
      
          {/* Form Section */}
          <div className={styles.formSection}>
            <InputForm 
              inputFields={[
                { name: "numeroCommande", placeholder: "Numero de commande", type: "text" },
                { name: "upeSku", placeholder: "Upe/Sku", type: "text" },
                { name: "quantite", placeholder: "Quantité", type: "number" }
              ]}
            />
          
          </div>
          
        
          {/* Table Section */}
            <InfoBlock 
              defaultTitle="Réceptions"
              defaultHeaders={[
                "Upe/Sku", 
                "Nom d'article", 
                "Fournisseur", 
                "Quantité", 
                "Date"
              ]}
              data={datas.receptions.map(reception => ({
                "Upe/Sku": reception.upeSku,
                "Nom d'article": reception.nomArticle,
                "Fournisseur": reception.fournisseur,
                "Quantité": reception.quantite,
                "Date": reception.date
              }))}
            />
        
   
    </main>
  );
}
