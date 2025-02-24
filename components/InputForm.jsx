import { useState } from "react";
import Button from "./Button";
import styles from "./InputForm.module.css";

export default function InputForm({ className }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission à implémenter
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} ${className}`}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Votre texte"
        className={styles.input}
      />
      <div className={styles.buttonContainer}>
        <Button texte="Enregistrer" type="submit" />
        <Button texte="Annuler" type="button" />
      </div>
    </form>
  );
} 