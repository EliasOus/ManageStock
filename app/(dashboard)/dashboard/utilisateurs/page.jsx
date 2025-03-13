"use client"
import Button from "@/components/Button";
import InfoBloc from "@/components/InfoBlock";
import InputForm from "@/components/InputForm";
import style from "./utilisateur.module.css";
import datas from "@/data/datas.json";
import { useState } from "react";
import styles from "@/components/InputForm.module.css"

export default function Utilisateur() {
    const [isInputVisible, setInputVisible] = useState(false);

    const toggleInputForm = () => {
     setInputVisible(true);
    };
    const handleCloseForm = () => {
     setInputVisible(false);
    };
   const inputFields = [
    { name: "nom", placeholder: "Entrez le Upe/Sku" },
    { name: "prenom", placeholder: "Entrez le nom de l'article" },
    { name: "poste", placeholder: "Entrez la description" },
    { name: "telephone", placeholder: "Entrez le fournisseur" },
    { name: "Password", placeholder: "Entrez la catégorie" },
    ];
    return (
     <>
      <h1 className={style.titre}>Gestion d'utilisateur</h1>
      {!isInputVisible && (
       <div className={style.boutons}>
        <div onClick={toggleInputForm}>
         <Button
          className={""}
          texte={"Nouveau"}
          active={true}
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

        <Button
         texte={"Supprimer"}
         active={true}
         className={""}
         type={"button"}
        />
       </div>
      )}

      {isInputVisible && (
       <div className={style.inputform}>
        <InputForm inputFields={inputFields} onClose={handleCloseForm} />
       </div>
            )}
            
      <div>
       <InfoBloc
        defaultTitle={"Utilisateurs"}
        defaultHeaders={[
         "Nom",
         "Prenom",
         "Nom utilisateur",
         "Mot de passe",
         "Poste",
        ]}
        data={datas.utilisateurs}
       />
      </div>
     </>
    );
}