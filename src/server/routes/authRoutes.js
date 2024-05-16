import express from 'express';
import { registerUser } from '../controllers/userController.js';

const router = express.Router();

/**
 * Route pour enregistrer un nouvel utilisateur
 * @route POST /api/auth/register
 * @group Auth - Opérations liées à l'authentification
 * @param {string} body.body.required - Les données d'enregistrement d'utilisateur
 * @returns {object} 201 - L'utilisateur créé
 * @returns {Error} 400 - InvalidData ou EmailExists
 * @returns {Error} 500 - ServerError
 */
router.post('/register', registerUser);

export default router;