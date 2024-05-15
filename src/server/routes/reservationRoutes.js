// Path: src/server/routes/reservationRoutes.js
// Permet de configurer les routes pour les réservations.

// Importer le module Router d'Express
import { Router } from 'express';
import { 
    createReservation,
    getReservationsByTableNumber,
    getReservationsByDateTime,
    getReservationsByDateTimeAndTableNumber
} from '../api/reservations.js';

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


/**
 * @api {get} /api/reservations/date Requête pour obtenir les réservations à une date et heure spécifiques
 * @apiName GetReservationsByDateTime
 * @apiGroup Reservation
 * @apiVersion 1.0.0
 * @apiParam {Date} reservationDateTime Date et heure de la réservation
 */
router.get('/reservations/date', async (req, res) => {
    const { reservationDateTime } = req.query;
    const reservations = await getReservationsByDateTime(new Date(reservationDateTime));
    res.status(200).send(reservations);
});

/**
 * @api {get} /api/reservations/table Requête pour obtenir les réservations d'un numéro de table spécifique
 * @apiName GetReservationsByTableNumber
 * @apiGroup Reservation
 * @apiVersion 1.0.0
 * @apiParam {Number} tableNumber Numéro de la table
 */
router.get('/reservations/table', async (req, res) => {
    const { tableNumber } = req.query;
    const reservations = await getReservationsByTableNumber(Number(tableNumber));
    res.status(200).send(reservations);
});

/**
 * @api {get} /api/reservations/date-table Requête combinée pour obtenir les réservations à une date et heure et un numéro de table spécifiques
 * @apiName GetReservationsByDateTimeAndTableNumber
 * @apiGroup Reservation
 * @apiVersion 1.0.0
 * @apiParam {Date} reservationDateTime Date et heure de la réservation
 * @apiParam {Number} tableNumber Numéro de la table
 */
router.get('/reservations/date-table', async (req, res) => {
    const { reservationDateTime, tableNumber } = req.query;
    const reservations = await getReservationsByDateTimeAndTableNumber(new Date(reservationDateTime), Number(tableNumber));
    res.status(200).send(reservations);
});


// Exporter le routeur
export default router;