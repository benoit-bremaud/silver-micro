// src/server/app.js
import express from 'express';
import { config } from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
// import errorHandler from './middleware/errorHandler.js';
// import userRoutes from './routes/userRoutes.js';
// import authRoutes from './routes/authRoutes.js';
// import reservationRoutes from './routes/reservationRoutes.js';

// Charger les variables d'environnement
config();

const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Middleware de sécurité
app.use(helmet());
app.use(cors());

// Utilisation des routes
// app.use('/api/users', userRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api/reservations', reservationRoutes);

// Middleware de gestion des erreurs
// app.use(errorHandler);

export default app;