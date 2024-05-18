// restaurantService.js : Fournit des services pour la gestion des restaurants et des tables.

// Path: src/server/services/restaurantService.js

// Importer le modèle de restaurant
import Restaurant from '../models/Restaurant.js';

// Importer le modèle de table
import Table from '../models/Table.js';

// Créer un nouveau restaurant
export const createRestaurant = async (restaurantData) => {
  try {
    return await Restaurant.create(restaurantData);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Obtenir tous les restaurants
export const getRestaurants = async () => {
  try {
    return await Restaurant.find();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Obtenir un restaurant par ID
export const getRestaurantById = async (id) => {
  try {
    return await Restaurant.findById(id);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Mettre à jour un restaurant par ID
export const updateRestaurant = async (id, updates) => {
  try {
    return await Restaurant.findByIdAndUpdate
        (id, updates, { new: true, runValidators: true });
    } catch (error) {
      throw new Error(error.message);
    }
};

// Supprimer un restaurant par ID
export const deleteRestaurant = async (id) => {
  try {
    return await Restaurant.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Créer une nouvelle table pour un restaurant
export const createTable = async (restaurantId, tableData) => {
  try {
    const table = new Table(tableData);
    const restaurant = await Restaurant.findById(restaurantId);
    restaurant.tables.push(table);
    await restaurant.save();
    return table;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Obtenir toutes les tables pour un restaurant
export const getTables = async (restaurantId) => {
  try {
    const restaurant = await Restaurant.findById(restaurantId);
    return restaurant.tables;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Obtenir une table par ID pour un restaurant
export const getTableById = async (restaurantId, tableId) => {
  try {
    const restaurant = await Restaurant findById(restaurantId);
    const table = restaurant.tables.id(tableId);
    return table;
    } catch (error) {
      throw new Error(error.message);
    }
};

// Mettre à jour une table par ID pour un restaurant
export const updateTable = async (restaurantId, tableId, updates) => {
  try {
    const restaurant = await Restaurant findById(restaurantId);
    const table = restaurant.tables.id(tableId);
    table.set(updates);
    await restaurant.save();
    return table;
    } catch (error) {
      throw new Error(error.message);
    }
};

// Supprimer une table par ID pour un restaurant
export const deleteTable = async (restaurantId, tableId) => {
  try {
    const restaurant = await Restaurant.findById(restaurantId);
    restaurant.tables.id(tableId).remove();
    await restaurant.save();
    } catch (error) {
      throw new Error(error.message);
    }
};

// Exporter les services de restaurant
export default {
  createRestaurant,
  getRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
  createTable,
  getTables,
  getTableById,
  updateTable,
  deleteTable
};