// restaurants.js : Définit les endpoints pour la gestion des restaurants et des tables.

// Path: src/server/api/restaurants.js

// Importer les dépendances
import { Router } from 'express';
import { createRestaurant, getRestaurant, updateRestaurant, deleteRestaurant, createTable, getTable, updateTable, deleteTable, checkTableAvailability } from '../controllers/restaurantController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

// Créer un routeur
const router = Router();

// Endpoints pour les restaurants
router.post('/', createRestaurant);
router.get('/:restaurantId', getRestaurant);
router.put('/:restaurantId', updateRestaurant);
router.delete('/:restaurantId', deleteRestaurant);

// Endpoints pour les tables
router.post('/:restaurantId/tables', createTable);
router.get('/:restaurantId/tables/:tableId', getTable);
router.put('/:restaurantId/tables/:tableId', updateTable);
router.delete('/:restaurantId/tables/:tableId', deleteTable);

// Endpoint pour vérifier la disponibilité des tables
router.get('/:restaurantId/tables/availability', authMiddleware, checkTableAvailability);

// Exporter les routes
export default router;
