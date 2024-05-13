// src/server/app.js
import express from 'express';
import { json } from 'express';
import { config } from 'dotenv';
import errorHandler from './middleware/errorHandler';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import reservationRoutes from './routes/reservationRoutes';

config();

const app = express();

app.use(json());  // Middleware pour parser les corps de requêtes JSON
app.use('/api', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/reservations', reservationRoutes);

// Middleware de gestion des erreurs doit être juste avant la définition du port et le démarrage du serveur
app.use(errorHandler);

// Middleware de gestion des erreurs spécifiques
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Une erreur interne est survenue');
});

// Définition du port et démarrage du serveur
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});