// Table.js : Modèle de données pour les tables.

// Path: src/server/models/Table.js

import mongoose from 'mongoose';

// Définir le schéma de la table
const tableSchema = new mongoose.Schema({
  tableNumber: { type: Number, required: true },
  restaurantId: { type: String, required: true },
  numberOfSeats: { type: Number, required: true }
}, {
  timestamps: true
});

// Création des indices
tableSchema.index({ tableNumber: 1 }); // index simple
tableSchema.index({ restaurantId: 1 }); // index simple
tableSchema.index({ numberOfSeats: 1 }); // index simple
tableSchema.index({ id: 1 }); // index simple

// Créer le modèle de la table
const Table = mongoose.model('Table', tableSchema);

// Exporter le modèle de la table
export default Table;