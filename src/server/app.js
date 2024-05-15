// Path: src/server/routes/reservationRoutes.js
// Permet de configurer l'application Express pour gérer les requêtes HTTP.

// Importer les modules Express
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import mongoose from 'mongoose';
import Test from './models/TestModel.js';
import errorHandler from './middleware/errorHandler.js';
// import userRoutes from './routes/userRoutes.js';
// import authRoutes from './routes/authRoutes.js';
import reservationRoutes from './routes/reservationRoutes.js';

// Charger les variables d'environnement
dotenv.config();

// const express = require('express');
const app = express();

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    
    // Création d'une entrée de test
    const testEntry = new Test({ name: 'Initial Test' });
    testEntry.save()
      .then(() => console.log('Test entry saved successfully'))
      .catch(err => console.log('Error saving test entry:', err));
  })
  .catch(err => console.log('MongoDB connection error:', err));


// Middleware pour parser le JSON
app.use(express.json());

// Middleware de sécurité
app.use(helmet());
app.use(cors());

// Utilisation des routes
// app.use('/api/users', userRoutes);
// app.use('/api/auth', authRoutes);
app.use('/api', reservationRoutes);

// Middleware de gestion des erreurs
app.use(errorHandler);

export default app;

