// reservationRoutes.js : Routes pour la gestion des réservations.

// Path: src/server/routes/reservationRoutes.js

import { Router } from 'express';
const router = Router();
import { createReservation, getReservation, updateReservation, cancelReservation, checkAvailability } from '../controllers/reservationController.js';

// Endpoints pour les réservations
router.post('/', createReservation);
router.get('/:reservationId', getReservation);
router.put('/:reservationId', updateReservation);
router.delete('/:reservationId', cancelReservation);

// Endpoint pour la disponibilité des tables
router.get('/availability', checkAvailability);

// Exporter les routes de réservation
export default router;