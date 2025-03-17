import { connexion } from "../db/connexion.js";

export async function createReception(reception) {
 const result = await connexion.run(
  `INSERT INTO receptions 
    (upe_sku, nom_article, fournisseur, quantite, date_reception) 
    VALUES (?, ?, ?, ?, ?)`,
  [
   reception.upe_sku,
   reception.nom_article,
   reception.fournisseur,
   reception.quantite,
   reception.date_reception,
  ]
 );

 // Mise à jour du stock principal
 await connexion.run(
  `UPDATE produits 
    SET quantite = quantite + ? 
    WHERE upe_sku = ?`,
  [reception.quantite, reception.upe_sku]
 );

 return result.lastID;
}

export async function getReceptions() {
 return await connexion.all(`
    SELECT r.*, p.quantite as stock_actuel 
    FROM receptions r
    JOIN produits p ON r.upe_sku = p.upe_sku
  `);
}
