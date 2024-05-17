import mongoose from 'mongoose';

/**
 * Schéma de la réservation pour la base de données MongoDB
 * 
 * @typedef {Object} Reservation
 * @property {Date} reservationDateTime - Date et heure de la réservation
 * @property {number} tableNumber - Numéro de la table réservée
 * @property {number} numberOfGuests - Nombre d'invités pour la réservation
 * @property {Date} createdAt - Date de création de la réservation
 * @property {Date} updatedAt - Date de mise à jour de la réservation
 * @property {string} _id - Identifiant unique de la réservation
 * @property {number} __v - Version du document
 */
const reservationSchema = new mongoose.Schema({
  reservationDateTime: { type: Date, required: true },
  tableNumber: { type: Number, required: true },
  numberOfGuests: { type: Number, required: true }
}, {
  timestamps: true, versionKey: '__v'
});

// Création des indices
reservationSchema.index({ reservationDateTime: 1 }); // index simple
reservationSchema.index({ tableNumber: 1 }); // index simple
reservationSchema.index({ reservationDateTime: 1, tableNumber: 1 }); // index composé
reservationSchema.index({ id: 1 }); // index simple


// Créer le modèle de la réservation
const Reservation = mongoose.model('Reservation', reservationSchema);

// Exporter le modèle de la réservation
export default Reservation;
