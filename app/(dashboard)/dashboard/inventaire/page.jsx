"use client";
import Button from "@/components/Button";
import InfoBloc from "@/components/InfoBlock";
import InputForm from "@/components/InputForm";
import style from "./inventaire.module.css";
import { useState, useEffect } from "react";

export default function Inventaire() {
    const [produits, setProduits] = useState([]);
    const [isInputVisible, setInputVisible] = useState(false);
    const [newProduit, setNewProduit] = useState({
        upe_sku: "",
        nom_article: "",
        fournisseur: "",
        quantite: "",
        prix: "",
    });
    
    const toggleInputForm = () => {
        setInputVisible(true);
    };

    // Récupération des produits depuis l'API
    useEffect(() => {
     const fetchProduits = async () => {
      try {
       const response = await fetch("http://localhost:3001/api/produits");
       const data = await response.json();
       setProduits(data);
      } catch (error) {
       console.error("Erreur de récupération des produits:", error);
      }
     };
     fetchProduits();
    }, []);


    const handleInputChange = (e) => {
        setNewProduit({ ...newProduit, [e.target.name]: e.target.value });
    };

    // Suppression d'un produit
    const handleDeleteProduit = async (upe_sku) => {
        try {
            const response = await fetch("http://localhost:3001/api/produit", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ upe_sku }),
            });

            if (response.ok) {
                setProduits(produits.filter((p) => p.upe_sku !== upe_sku)); // Mise à jour de l'affichage
            } else {
                console.error("Erreur lors de la suppression");
            }
        } catch (error) {
            console.error("Erreur de connexion à l'API:", error);
        }
    };

    const handleAddProduit = async (newProduit) => {
     console.log("Envoi du produit :", newProduit); // Vérifie ici que les valeurs sont correctes
     try {
      const response = await fetch("http://localhost:3001/api/produit", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(newProduit),
      });

      if (response.ok) {
       const result = await response.json();
       alert("Produit ajouté avec succès !");
       setProduits((prevProduits) => [
        ...prevProduits,
        { ...newProduit, id: result.id },
       ]);
       setNewProduit({
        upe_sku: "",
        nom_article: "",
        fournisseur: "",
        quantite: "",
        prix: "",
       });
       setInputVisible(false);
      } else {
       alert("Erreur lors de l'ajout du produit");
      }
     } catch (error) {
      console.error("Erreur lors de la requête:", error);
      alert("Une erreur s'est produite");
     }
    };



    return (
     <>
      <h1 className={style.titre}>Articles & Inventaire</h1>

      {!isInputVisible && (
       <div className={style.boutons}>
        <div onClick={toggleInputForm}>
         <Button
          texte={"Ajouter"}
          active={true}
          className={""}
          type={"button"}
         />
        </div>

        <div onClick={toggleInputForm}>
         <Button
          texte={"Modifier"}
          active={true}
          className={""}
          type={"button"}
         />
        </div>
        <div onClick={handleDeleteProduit}>
         <Button
          texte={"Supprimer"}
          active={true}
          className={""}
          type={"button"}
         />
        </div>
       </div>
      )}

      {isInputVisible && (
       <div className={style.inputform}>
        <InputForm
         inputFields={[
          {
           name: "upe_sku",
           type: "text",
           placeholder: "Entrez le Upe/Sku",
           value: newProduit.upe_sku,
           onChange: handleInputChange,
          },
          {
           name: "nom_article",
           placeholder: "Nom de l'article",
           value: newProduit.nom_article,
           onChange: handleInputChange,
          },
          {
           name: "fournisseur",
           placeholder: "Fournisseur",
           value: newProduit.fournisseur,
           onChange: handleInputChange,
          },
          {
           name: "quantite",
           type: "number",
           placeholder: "Quantité",
           value: newProduit.quantite,
           onChange: handleInputChange,
          },
          {
           name: "prix",
           type: "number",
           placeholder: "Prix",
           value: newProduit.prix,
           onChange: handleInputChange,
          },
         ]}
         onClose={() => setInputVisible(false)}
         onAdd={handleAddProduit}
        />
       </div>
      )}

      <InfoBloc
       defaultTitle={"Inventaire"}
       defaultHeaders={[
        "Upe/Sku",
        "Nom d’article",
        "Fournisseur",
        "Quantité",
        "Prix",
       ]}
       data={produits.map((p) => [
        p.upe_sku,
        p.nom_article,
        p.fournisseur,
        p.quantite,
        p.prix,
       ])}
      />
     </>
    );
}