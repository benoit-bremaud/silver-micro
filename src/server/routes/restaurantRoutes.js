// restaurantRoutes.js : Routes pour la gestion des restaurants et des tables.

// Path: src/server/routes/restaurantRoutes.js

import { Router } from 'express';
import { createRestaurant, getRestaurant, updateRestaurant, deleteRestaurant, createTable, getTable, updateTable, deleteTable } from '../controllers/restaurantController.js';

const router = Router();

// Endpoints pour les restaurants et leurs tables
router.post('/', createRestaurant);
router.get('/:restaurantId', getRestaurant);
router.put('/:restaurantId', updateRestaurant);
router.delete('/:restaurantId', deleteRestaurant);

// Endpoints pour les tables
router.post('/:restaurantId/tables', createTable);
router.get('/:restaurantId/tables/:tableId', getTable);
router.put('/:restaurantId/tables/:tableId', updateTable);
router.delete('/:restaurantId/tables/:tableId', deleteTable);

export default router;