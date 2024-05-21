// app.js est le point d'entrée de l'application Express

// Path: src/server/app.js

// Importer les dépendances
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import reservationRoutes from './routes/reservationRoutes.js';
import restaurantRoutes from './routes/restaurantRoutes.js';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import { authMiddleware } from './middleware/authMiddleware.js';

// Charger les variables d'environnement
dotenv.config();

// Créer l'application Express
const app = express();

// Middleware de base
app.use(express.json()); // Parser le corps de la requête en JSON
app.use(morgan('dev')); // Logger HTTP
app.use(helmet()); // Sécuriser les en-têtes HTTP
app.use(cors()); // Activer CORS

// Routes publiques
app.use('/api/v1/auth', authRoutes);

// Middleware d'authentification pour les routes protégées
app.use(authMiddleware);

// Middleware de sécurité
app.use(helmet());
app.use(cors());

// Routes protégées
app.use('/api/v1/reservations', authMiddleware, reservationRoutes);
app.use('/api/v1/restaurants', authMiddleware, restaurantRoutes);
app.use('/api/v1/users', authMiddleware, userRoutes);

// Middleware de gestion des erreurs
app.use(errorHandler);

// Exporter l'application
export default app;