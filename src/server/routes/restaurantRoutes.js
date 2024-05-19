// restaurantRoutes.js : Routes pour la gestion des restaurants et des tables.

// Path: src/server/routes/restaurantRoutes.js

import { Router } from 'express';
import { createRestaurantController, getRestaurant, updateRestaurant, deleteRestaurant, createTable, getTable, updateTable, deleteTable, checkTableAvailability } from '../controllers/restaurantController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
// import { checkTableAvailability } from '../controllers/restaurantController.js';

const router = Router();

// Endpoints pour les restaurants et leurs tables
router.post('/', authMiddleware , createRestaurantController);
router.get('/:restaurantId', authMiddleware , getRestaurant);
router.put('/:restaurantId', authMiddleware, updateRestaurant);
router.delete('/:restaurantId', authMiddleware, deleteRestaurant);
 
// Endpoints pour les tables
router.post('/:restaurantId/tables', authMiddleware, createTable);
router.get('/:restaurantId/tables/:tableId', authMiddleware, getTable);
router.put('/:restaurantId/tables/:tableId', authMiddleware, updateTable);
router.delete('/:restaurantId/tables/:tableId', authMiddleware, deleteTable);

// Endpoint pour vérifier la disponibilité des tables
router.get('/:restaurantId/tables/availability', authMiddleware, checkTableAvailability);

// Exporter les routes
export default router;