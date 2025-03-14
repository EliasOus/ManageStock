"use client";
import styles from "./page.module.css";
import datas from "@/data/datas.json";
import InfoBlock from "@/components/InfoBlock";
import Button from "@/components/Button";
import InputForm from "@/components/InputForm";
import { useState } from "react";

export default function Retours() {
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <main className={styles.main}>
      {/* Header section */}
      <div className={styles.header}>
        <h1>Traitement des Retours</h1>
        <div className={styles.separator}></div>
      </div>

      {/* Action Buttons or Form */}
      {!showForm ? (
        <div className={styles.actionButtons}>
          <div onClick={() => setShowForm(true)}>
            <Button 
              texte="Nouveau" 
              active={true} 
              type="button"
            />
          </div>
          <div onClick={() => {setShowForm(true); setIsEditing(true)}}>
            <Button 
              texte="Modifier" 
              active={true} 
              type="button"
            />
          </div>
          <div>
            <Button 
              texte="Supprimer" 
              active={true}
              type="button"
            />
          </div>
        </div>
      ) : (
        <div className={styles.formSection}>
          <InputForm 
            inputFields={[
              { name: "numeroBon", placeholder: "Bons de Commande", type: "text" },
              { name: "upeSku", placeholder: "Upe/Sku", type: "text" },
              { name: "nomArticle", placeholder: "Nom d'article", type: "text" },
              { name: "fournisseur", placeholder: "Fournisseur", type: "text" },
              { name: "quantite", placeholder: "Quantité", type: "number" }
            ]}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      {/* Table Section */}
      <div className={styles.tableSection}>
        <InfoBlock 
          defaultTitle="Bon de Retours"
          defaultHeaders={[
            "Upe/Sku", 
            "Nom d'article", 
            "Fournisseur", 
            "Quantité", 
            "Date"
          ]}
          data={datas.retours.map(retour => ({
            "Upe/Sku": retour.upeSku,
            "Nom d'article": retour.nomArticle,
            "Fournisseur": retour.fournisseur,
            "Quantité": retour.quantite,
            "Date": retour.date
          }))}
        />
      </div>
    </main>
  );
}