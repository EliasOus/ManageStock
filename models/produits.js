import { connexion } from "../db/connexion.js";

// Ajouter un produit
export async function ajouterProduit(
 upeSku,
 nomArticle,
 fournisseur,
 quantite,
 prix
) {
 const result = await connexion.run(
  `INSERT INTO produits (upe_sku, nom_article, fournisseur, quantite, prix) VALUES (?, ?, ?, ?, ?)`,
  [upeSku, nomArticle, fournisseur, quantite, prix]
 );

 return result.lastID; // Retourne l'ID du produit ajouté
}

// Récupérer tous les produits
export async function getProduits() {
 const produits = await connexion.all(`SELECT * FROM produits`);
 return produits;
}

// Supprimer un produit par son UPE/SKU
export async function supprimerProduit(upeSku) {
 const result = await connexion.run(`DELETE FROM produits WHERE upe_sku = ?`, [
  upeSku,
 ]);

 return result.changes > 0; // Retourne true si un produit a été supprimé
}
