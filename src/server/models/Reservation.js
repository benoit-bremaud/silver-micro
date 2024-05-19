// Reservation.js : Modèle de données pour les réservations.

// Path: src/server/models/Reservation.js

import mongoose from 'mongoose';

// Définir le schéma de la réservation
const reservationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tableNumber: { type: mongoose.Schema.Types.ObjectId, ref: 'Table', required: true },
  numberOfGuests: { type: Number, required: true },
  reservationDateTime: { type: Date, required: true },
  specialRequests: { type: String }
}, {
  timestamps: true
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
