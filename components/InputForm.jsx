"use client";  // 👈 Required for useState

import { useState } from "react";
import Button from "./Button";
import styles from "./InputForm.module.css";

export default function InputForm({ className, inputFields }) {
  const [inputValues, setInputValues] = useState(
    Object.fromEntries(inputFields.map(field => [field.name, ""]))
  );

  const handleInputChange = (name, value) => {
    setInputValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form values:", inputValues);
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} ${className}`}>
      {inputFields.map((field, index) => (
        <div key={index}>
          {field.name === "description" ? (
            // Render a textarea for the description input
            <textarea
              name={field.name}
              value={inputValues[field.name]}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              placeholder={field.placeholder}
              className={`${styles.input} ${styles.textarea}`} // Apply additional CSS for larger input
            />
          ) : (
            // Render a normal input field
            <input
              type="text"
              name={field.name}
              value={inputValues[field.name]}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              placeholder={field.placeholder}
              className={styles.input}
            />
          )}
        </div>
      ))}
      <div className={styles.buttonContainer}>
        <Button texte="Enregistrer" type="submit" active={true} />
        <Button texte="Annuler" type="button" active={true} />
      </div>
    </form>
  );
}
