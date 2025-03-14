"use client";  // 👈 Required for useState

import { useState } from "react";
import Button from "./Button";
import styles from "./InputForm.module.css";

export default function InputForm({ className, inputFields, onCancel }) {
  const [visible, setVisible] = useState(true);
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

    // Loop through all input fields to check if any field is empty
    for (const [key, value] of Object.entries(inputValues)) {
      if (!value.trim()) {
        alert(`Please fill in the ${key} field.`);
        return; // Stop submission if a field is empty
      }
    }

    // If all fields are filled, proceed with the submission
    console.log("Form values:", inputValues);
  };

  // This function hides the form when Annuler is clicked
  const handleAnnuler = () => {
    setVisible(false);
  };

  // Only render the form if visible is true
  if (!visible) return null;

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} ${className}`}>
      {inputFields.map((field, index) => (
        <div key={index}>
          {field.name === "description" ? (
            <textarea
              name={field.name}
              value={inputValues[field.name]}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              placeholder={field.placeholder}
              className={`${styles.input} ${styles.textarea}`}
            />
          ) : (
            <input
              type={field.type || "text"}
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
        <Button 
          texte="Enregistrer" 
          type="submit" 
          active={true} 
        />
        <Button 
          texte="Annuler" 
          type="button" 
          active={true} 
          onClick={onCancel}
        />
      </div>
    </form>
  );
}
