import { existsSync } from "fs";
import { open } from "sqlite";
import sqlite3 from "sqlite3";
const IS_NEW = !existsSync(process.env.DB_FILE);

async function createDatabase(connexion) {
 await connexion.exec(
  `
        CREATE TABLE IF NOT EXISTS utilisateurs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nom TEXT NOT NULL,
            prenom TEXT NOT NULL,
            nom_utilisateur TEXT UNIQUE NOT NULL,
            mot_de_passe TEXT NOT NULL,
            poste TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS produits (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            upe_sku TEXT UNIQUE NOT NULL,
            nom_article TEXT NOT NULL,
            fournisseur TEXT NOT NULL,
            quantite INTEGER DEFAULT 0,
            prix REAL NOT NULL
        );

        CREATE TABLE IF NOT EXISTS produits_rupture (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            upe_sku TEXT UNIQUE NOT NULL,
            nom_article TEXT NOT NULL,
            fournisseur TEXT NOT NULL,
            quantite INTEGER DEFAULT 0,
            prix REAL NOT NULL
        );

        CREATE TABLE IF NOT EXISTS receptions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            upe_sku TEXT NOT NULL,
            nom_article TEXT NOT NULL,
            fournisseur TEXT NOT NULL,
            quantite INTEGER NOT NULL,
            date_reception TEXT NOT NULL,
            FOREIGN KEY (upe_sku) REFERENCES produits(upe_sku) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS retours (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            upe_sku TEXT NOT NULL,
            nom_article TEXT NOT NULL,
            fournisseur TEXT NOT NULL,
            quantite INTEGER NOT NULL,
            date_retour TEXT NOT NULL,
            FOREIGN KEY (upe_sku) REFERENCES produits(upe_sku) ON DELETE CASCADE
        );

        INSERT INTO utilisateurs (nom, prenom, nom_utilisateur, mot_de_passe, poste) VALUES
        ('Dupont', 'Jean', 'jdupont', '123456', 'Employe'),
        ('Martin', 'Sophie', 'smartin', 'abcdef', 'Gestionnaire'),
        ('Lemoine', 'Paul', 'plemoine', 'paul123', 'Employe');

        INSERT INTO produits (upe_sku, nom_article, fournisseur, quantite, prix) VALUES
        ('12345-ABC', 'Filtre à huile', 'Bosch', 50, 12.99),
        ('67890-DEF', 'Plaquettes de frein', 'Brembo', 30, 45.00),
        ('11223-GHI', 'Batterie 12V', 'Varta', 20, 89.99),
        ('44556-JKL', 'Bougie dallumage', 'NGK', 100, 8.50);

        INSERT INTO produits_rupture (upe_sku, nom_article, fournisseur, quantite, prix) VALUES
        ('98765-XYZ', 'Amortisseur avant', 'KYB', 0, 75.00),
        ('54321-PQR', 'Courroie de distribution', 'Dayco', 0, 35.49),
        ('23456-STU', 'Filtre à air', 'Mann-Filter', 0, 18.99),
        ('78901-VWX', 'Pneu hiver 205/55R16', 'Michelin', 0, 120.00);

        INSERT INTO receptions (upe_sku, nom_article, fournisseur, quantite, date_reception) VALUES
        ('11111-AAA', 'Filtre à huile', 'Bosch', 100, '2025-03-01'),
        ('22222-BBB', 'Plaquettes de frein', 'Brembo', 50, '2025-03-02'),
        ('33333-CCC', 'Amortisseur arrière', 'KYB', 25, '2025-03-03'),
        ('44444-DDD', 'Bougie dallumage', 'NGK', 200, '2025-03-04');

        INSERT INTO retours (upe_sku, nom_article, fournisseur, quantite, date_retour) VALUES
        ('55555-EEE', 'Pneu été 195/65R15', 'Bridgestone', 5, '2025-03-05'),
        ('66666-FFF', 'Filtre à carburant', 'Mahle', 10, '2025-03-06'),
        ('77777-GGG', 'Batterie 12V', 'Varta', 3, '2025-03-07'),
        ('88888-HHH', 'Essuie-glaces avant', 'Valeo', 8, '2025-03-08');
    `
 );
}

let connexion = await open({
 filename: process.env.DB_FILE,
 driver: sqlite3.Database,
});

if (IS_NEW) {
 await createDatabase(connexion);
}

export { connexion };
