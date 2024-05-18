// reservations.js : Définit les endpoints pour la gestion des réservations.

// Path: src/server/api/reservations.js

// Importation du modèle Reservation
import Reservation from '../models/Reservation.js';
/**
 * Requête pour créer une nouvelle réservation
 * @param {*} req 
 * @param {*} res 
 * @returns
 */
export const createReservation = async (req, res) => {
    try {
        console.log("Données reçues :", req.body); // Afficher les données reçues dans la console
        const newReservation = new Reservation({
            reservationDateTime: req.body.reservationDateTime,
            tableNumber: req.body.tableNumber,
            numberOfGuests: req.body.numberOfGuests
        });

        const savedReservation = await newReservation.save();
        res.status(201).send(newReservation);
    } catch (error) {
        console.error("Erreur lors de la création de la réservation :", error); // Afficher l'erreur dans la console
        res.status(400).send({
            error: 'InvalidData',
            message: 'Les données fournies sont incorrectes ou incomplètes.'
        });
    }
};

/**
 * Requête pour obtenir les réservations à une date et heure spécifiques
 * @param {Date} reservationDateTime
 * @returns {Array} Liste des réservations
 */
export const getReservationsByDateTime = async (reservationDateTime) => {
    console.log("Recherche de réservations pour la date et l'heure :", reservationDateTime); // Afficher la date et l'heure dans la console
    return await Reservation.find({
        reservationDateTime: reservationDateTime
    });
};

/**
 * Requête pour obtenir les réservations d'un numéro de table spécifique
 * @param {Number} tableNumber
 * @returns {Array} Liste des réservations
 */
export const getReservationsByTableNumber = async (tableNumber) => {
    console.log("Recherche de réservations pour le numéro de table :", tableNumber);
    return await Reservation.find({
        tableNumber: tableNumber
    });
};

/**
 * Requête combinée pour obtenir les réservations à une date et heure et un numéro de table spécifiques
 * @param {Date} reservationDateTime
 * @param {Number} tableNumber
 * @returns {Array} Liste des réservations
 */
export const getReservationsByDateTimeAndTableNumber = async (reservationDateTime, tableNumber) => {
    console.log("Recherche de réservations pour la date et l'heure :", reservationDateTime, "et le numéro de table :", tableNumber);
    return await Reservation.find({
        reservationDateTime: reservationDateTime,
        tableNumber: tableNumber
    });
};