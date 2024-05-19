// tableService.js : Gère les opérations de table.

// Path: src/server/services/tableService.js

// Importer le modèle de table
import Table from '../models/Table.js';

// Créer une nouvelle table
export const createTable = async (tableData) => {
  try {
    return await Table.create(tableData);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Obtenir toutes les tables
export const getTables = async () => {
  try {
    return await Table.find();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Obtenir une table par ID
export const getTableById = async (id) => {
  try {
    return await Table.findById(id);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Mettre à jour une table par ID
export const updateTable = async (id, updates) => {
  try {
    return await Table.findByIdAndUpdate(id, updates);
    }
    catch (error) {
      throw new Error(error.message);
    }
};

// Supprimer une table par ID
export const deleteTable = async (id) => {
  try {
    return await Table.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Exporter les opérations de table
export default {
  createTable,
  getTables,
  getTableById,
  updateTable,
  deleteTable
};