// Path: src/server/routes/reservationRoutes.js
// Permet de configurer les routes pour les réservations.

// Importer le module Router d'Express
import { Router } from 'express';
import { createReservation } from '../api/reservations.js';

// Créer un routeur Express
const router = Router();
/**
 * @api {post} /reservations Créer une réservation
 * @apiName CreateReservation
 * @apiGroup Reservation
 * @apiVersion 1.0.0
 * @apiDescription Enregistre une nouvelle réservation dans la base de données.
 * 
 * @apiParam {Date} reservationDateTime Date et heure de la réservation.
 * @apiParam {Number} tableNumber Numéro de la table réservée.
 * @apiParam {Number} numberOfGuests Nombre de personnes pour la réservation.
 * 
 * @apiSuccess {Object} reservation Détails de la réservation créée.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *       "reservationDateTime": "2024-04-30T19:00:00Z",
 *       "tableNumber": 5,
 *       "numberOfGuests": 4
 *     }
 *
 * @apiError (Error 400) BadRequest Erreur dans les données de la requête.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "InvalidData",
 *       "message": "Les données fournies sont incorrectes ou incomplètes."
 *     }
 */

// Définir la route pour créer une réservation
router.post('/reservations', createReservation);

// Exporter le routeur
export default router;