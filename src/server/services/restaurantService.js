// restaurantService.js : Fournit des services pour la gestion des restaurants et des tables.

// Path: src/server/services/restaurantService.js

// Importer le modèle de restaurant
import Restaurant from '../models/Restaurant.js';


// Créer un nouveau restaurant
export const createRestaurant = async ( name, address, phone, email, openingHours ) => {
  try {
    return await Restaurant.create( name, address, phone, email, openingHours );
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

// Obtenir tous les restaurants
export const getRestaurants = async () => {
  try {
    return await Restaurant.find();
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

// Obtenir un restaurant par ID
export const getRestaurantById = async (id) => {
  try {
    return await Restaurant.findById(id);
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

// Mettre à jour un restaurant par ID
export const updateRestaurant = async (id, updates) => {
  try {
    return await Restaurant.findByIdAndUpdate
        (id, updates, { new: true, runValidators: true });
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
};

// Supprimer un restaurant par ID
export const deleteRestaurant = async (id) => {
  try {
    return await Restaurant.findByIdAndDelete(id);
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

// Exporter les opérations de restaurant
export default {
  createRestaurant,
  getRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant
};

// Path: src/server/services/tableService.js