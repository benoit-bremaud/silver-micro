// auth.js : Définit les endpoints pour les opérations d'authentification.

// Path: src/server/api/auth.js

import { Router } from 'express';
import { login, register } from '../controllers/authController.js';

const router = Router();

// Endpoints pour l'authentification
router.post('/login', login);
router.post('/logout', (req, res) => res.send('Logout'));
router.post('/register', register);
router.post('/forgot-password', (req, res) => res.send('Forgot password'));

// Exporter les routes
export default router;
