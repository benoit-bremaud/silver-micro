// userRoutes.js : Routes pour la gestion des utilisateurs.

// Path: src/server/routes/userRoutes.js

import { Router } from 'express';
const router = Router();
import { createUser, getUser, updateUser, deleteUser } from '../controllers/userController.js';

// Endpoints pour les utilisateurs
router.post('/', createUser);
router.get('/:userId', getUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

// Exporter les routes utilisateur
export default router;