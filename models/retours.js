import { connexion } from "../db/connexion.js";

export async function createRetour(retour) {
  const result = await connexion.run(
    `INSERT INTO retours 
    (upe_sku, nom_article, fournisseur, quantite, date_retour) 
    VALUES (?, ?, ?, ?, ?)`,
    [retour.upe_sku, retour.nom_article, retour.fournisseur, retour.quantite, retour.date_retour]
  );
  
  // Mise à jour du stock principal
  await connexion.run(
    `UPDATE produits 
    SET quantite = quantite - ? 
    WHERE upe_sku = ?`,
    [retour.quantite, retour.upe_sku]
  );
  
  return result.lastID;
}

export async function getRetours() {
  return await connexion.all(`
    SELECT r.*, p.quantite as stock_actuel 
    FROM retours r
    JOIN produits p ON r.upe_sku = p.upe_sku
  `);
}