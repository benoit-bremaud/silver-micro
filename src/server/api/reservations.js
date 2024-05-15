// Path: src/server/api/reservations.js
// Permet de gérer les requêtes pour les réservations.

// Importation du modèle Reservation
import Reservation from '../models/Reservation.js';

/**
 * @api {post} /api/reservations Créer une réservation
 * @apiName CreateReservation
 * @apiGroup Reservation
 * @apiVersion 1.0.0
 * @apiDescription Enregistre une nouvelle réservation dans la base de données.
 * 
 * @apiParam {Date} reservationDateTime Date et heure de la réservation requises.
 * @apiParam {Number} tableNumber Numéro de la table requise.
 * @apiParam {Number} numberOfGuests Nombre d'invités requis.
 * 
 * @apiSuccess {Object} reservation Détails de la réservation enregistrée.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *       "_id": "507f1f77bcf86cd799439011",
 *       "reservationDateTime": "2024-04-30T19:00:00Z",
 *       "tableNumber": 5,
 *       "numberOfGuests": 4,
 *       "__v": 0
 *     }
 *
 * @apiError (Error 400) BadRequest Les données fournies sont incorrectes ou incomplètes.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "InvalidData",
 *       "message": "Les données fournies sont incorrectes ou incomplètes."
 *     }
 */
export const createReservation = async (req, res) => {
    try {
        const newReservation = new Reservation({
            reservationDateTime: req.body.reservationDateTime,
            tableNumber: req.body.tableNumber,
            numberOfGuests: req.body.numberOfGuests
        });

        await newReservation.save();
        res.status(201).send(newReservation);
    } catch (error) {
        res.status(400).send({
            error: 'InvalidData',
            message: 'Les données fournies sont incorrectes ou incomplètes.'
        });
    }
};
