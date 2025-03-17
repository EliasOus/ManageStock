import { connexion } from "../db/connexion.js";

//ajouter un utilisateur
export async function addUtilisateur(
 nom,
 prenom,
 nom_utilisateur,
 mot_de_passe,
 poste
) {
 const motdepasseHash = await hash(mot_de_passe, 10);

 const result = await connexion.run(
  `INSERT INTO utilisateurs 
    (nom, prenom, nom_utilisateur, mot_de_passe, poste) 
    VALUES (?, ?, ?, ?, ?)`,
  [nom, prenom, nom_utilisateur, mot_de_passe, poste, motdepasseHash]
 );
 return result.lastID;
}

//recuperer un utilisateur apartir de son couriel
export async function getUtilisateurByCourriel(courriel) {
 const utilisateur = await connexion.get(
  "SELECT * FROM utilisateur WHERE courriel = ?",
  [courriel]
 );
 return utilisateur;
}

//recuperer les utilisateurs
export async function getUtilisateurs() {
 return await connexion.all(`
    SELECT id, nom, prenom, nom_utilisateur, poste 
    FROM utilisateurs
  `);
}

export async function deleteUtilisateur(id) {
 const result = await connexion.run(`DELETE FROM utilisateurs WHERE id = ?`, [
  id,
 ]);
 return result.changes > 0;
}
