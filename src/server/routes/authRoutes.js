// authRoutes.js : Routes pour les opérations d'authentification.

// Path: src/server/routes/authRoutes.js

import { Router } from 'express';
import { registerUser, loginUser, logoutUser } from '../controllers/authController.js';

// Routes pour l'authentification
const router = Router();

// Endpoints pour l'authentification
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

// Exporter les routes d'authentification
export default router;