"use client";
import styles from "./GestionsReception.module.css";
import datas from "@/data/datas.json";
import InputForm from "@/components/InputForm";
import InfoBlock from "@/components/InfoBlock";

export default function GestionsReception() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Gestion des Réceptions</h1>
                <div className={styles.separator}></div>
            </div>
            
            <div className={styles.content}>
                <div className={styles.formSection}>
                    <InputForm 
                        inputFields={[
                            { name: "numeroCommande", placeholder: "Numero de commande", type: "text" },
                            { name: "upeSku", placeholder: "Upe/Sku", type: "text" },
                            { name: "quantite", placeholder: "Quantité", type: "number" }
                        ]}
                        buttons={[
                            { text: "Enregistrer", type: "submit", primary: true },
                            { text: "Annuler", type: "button", primary: true }
                        ]}
                        onSubmit={(data) => console.log(data)}
                    />
                </div>
                
                <div className={styles.tableSection}>
                    <div className={styles.tableHeader}>
                        <h2>Réceptions</h2>
                        <div className={styles.underline}></div>
                    </div>
                    <InfoBlock 
                        defaultHeaders={["Upe/Sku", "Nom d'article", "Fournisseur", "Quantité", "Date"]}
                        data={datas.receptions.map(reception => ([
                            reception.upeSku,
                            reception.nomArticle,
                            reception.fournisseur,
                            reception.quantite,
                            reception.date
                        ]))}
                    />
                </div>
            </div>
        </div>
    );
} 