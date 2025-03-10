"use client"

import { useState } from 'react';

import styles from "./Recherche.module.css"


export default function Recherche() {
    const [articles, setArtciles] = useState(['Ordinateur', 'Clavier', 'Sourie', 'Carte mere', 'Boitier', 'Alimentation', 'Cle USB', 'Ecran', 'RAM', 'DDR', 'Disque dure']);

    const [recherche, setRecherche] = useState('');

    const [focus, setFocus] = useState(false);

    const handleRecherche = (event) => setRecherche(event.currentTarget.value);

    const handleSelection = (event) => {
        setRecherche(event.target.value); // Remplit l'input avec l'option sélectionnée
        setFocus(false); // Masque le menu après sélection
        if (!articles.includes(event.target.value)) {
            setArtciles([event.target.value, ...articles]);
        }
    };

    const filtreArticle = (artcile) => {
        return artcile
            .toLowerCase()
            .includes(recherche.toLowerCase());
    }

    return <>
        <div className={styles.contenaire}>
            <input
                type="text"
                value={recherche}
                onChange={handleRecherche}
                className={styles.input}
                onFocus={() => setFocus(true)} //pour afficher la liste au focus
                placeholder="Recherche"
            />
            {
                focus && recherche && (
                    <div className={styles.suggestions}>
                        {articles.filter(filtreArticle).map((artcile) =>
                            <div
                                key={artcile}
                                onClick={() => handleSelection(artcile)}
                                className={styles.suggestionItem}
                            >
                                {artcile}
                            </div>
                        )}
                    </div>
                )
            }
        </div>
    </>
}
