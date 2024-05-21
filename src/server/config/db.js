// db.js : Configuration de la connexion à la base de données.

// Path: src/server/config/db.js

// Importer les dépendances
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config();

/**
 * Fonction pour connecter à la base de données MongoDB
 */
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    // Afficher un message de confirmation si la connexion est établie
    console.log('MongoDB connected successfully');
  } catch (error) {
    // Afficher une erreur et quitter l'application si la connexion échoue
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Exporter la fonction connectDB
export default connectDB;

// Compare this snippet from src/server/utils/helperFunctions.js: