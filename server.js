// Chargement du fichier de configuration
import "dotenv/config";

// Importations
import express, { json } from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import { engine } from "express-handlebars";
import { ajouterProduit, getProduits,  supprimerProduit } from "./models/produits.js";

// Création du serveur web
const app = express();

// Configuration du moteur de rendu
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Ajout de middlewares
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(json());
app.use(express.static("public"));

// ✅ Route d'accueil - Affichage des produits
app.get("/api/produits", async (req, res) => {
 const produits = await getProduits();
 res.json(produits);
});

// API - Ajout d'un produit
app.post("/api/produit", async (req, res) => {
 const { upe_sku, nom_article, fournisseur, quantite, prix } = req.body;

 if (!upe_sku || !nom_article || !fournisseur || quantite < 0 || prix < 0) {
  return res.status(400);
 }

 const id = await ajouterProduit(
  upe_sku,
  nom_article,
  fournisseur,
  quantite,
  prix
 );
 res.status(201).json({ message: "Produit ajouté avec succès", id });
});

// API - Suppression d'un produit
app.delete("/api/produit", async (req, res) => {
 const { upe_sku } = req.body;

 if (!upe_sku) {
  return res.status(400);
 }

 const success = await supprimerProduit(upe_sku);
 if (success) {
  res.status(200);
 } else {
  res.status(404);
 }
});

// API - Ajout d'une réception
app.post("/api/reception", async (req, res) => {
 const { upe_sku, nom_article, fournisseur, quantite, date_reception } = req.body;

 if (!upe_sku || !nom_article || !fournisseur || quantite < 0 || !date_reception) {
  return res.status(400).json({ message: "Données invalides" });
 }

 try {
  const receptionId = await createReception({ upe_sku, nom_article, fournisseur, quantite, date_reception });
  res.status(201).json({ message: "Réception ajoutée avec succès", receptionId });
 } catch (error) {
  res.status(500).json({ message: "Erreur lors de l'ajout de la réception", error });
 }
});

// API - Récupérer toutes les réceptions
app.get("/api/receptions", async (req, res) => {
 try {
  const receptions = await getReceptions();
  res.status(200).json(receptions);
 } catch (error) {
  res.status(500).json({ message: "Erreur lors de la récupération des réceptions", error });
 }
});

// Démarrage du serveur
app.listen(process.env.PORT);
console.log("Serveur démarré");
console.log("http://localhost:" + process.env.PORT);
