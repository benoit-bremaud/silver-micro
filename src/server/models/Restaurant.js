// Restaurant.js : Modèle de données pour les restaurants.

// Path: src/server/models/Restaurant.js

import mongoose from 'mongoose';

// Définir le schéma du restaurant
const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true},
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true},
  openingHours: { type: String, required: true },
  tables: { type: mongoose.Schema.Types.ObjectId, ref: 'Table'}
}, {
  timestamps: true
});

// Création des indices
restaurantSchema.index({ name: 1 }); // index simple
restaurantSchema.index({ address: 1 }); // index simple
restaurantSchema.index({ phone: 1 }); // index simple
restaurantSchema.index({ tables: 1 }); // index simple
restaurantSchema.index({ id: 1 }); // index simple

// Créer le modèle du restaurant
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

// Exporter le modèle du restaurant
export default mongoose.model('Restaurant', restaurantSchema);