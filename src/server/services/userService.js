// userService.js : Fournit des services pour la gestion des utilisateurs.

// Path: src/server/services/userService.js

// Importer le modèle de données de l'utilisateur
import User from '../models/User.js';

/** 
 * Créer un nouvel utilisateur
 * @param {Object} userData - Les données de l'utilisateur
 * @returns {Promise<Object>} - L'utilisateur créé
 */
export const createUser = async (userData) => {
  const newUser = new User(userData);
  return await newUser.save();
};

/**
 * Obtenir tous les utilisateurs
 * @returns {Promise<Array>} - Une liste de tous les utilisateurs
 */
export const getUsers = async () => {
  return await User.find();
};

/**
 * Obtenir un utilisateur par ID
 * @param {String} id - L'ID de l'utilisateur
 * @returns {Promise<Object>} - L'utilisateur trouvé
 */
export const getUserById = async (id ) => {
  return await User .findById(id);
};

/**
 * Mettre à jour un utilisateur par ID
 * @param {String} id - L'ID de l'utilisateur
 * @param {Object} updates - Les mises à jour de l'utilisateur
 * @returns {Promise<Object>} - L'utilisateur mis à jour
 */
export const updateUser = async (id, updates) => {
  return await User.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
};

/**
 * Supprimer un utilisateur par ID
 * @param {String} id - L'ID de l'utilisateur
 * @returns {Promise<Object>} - L'utilisateur supprimé
 */
export const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

// Exporter les services de l'utilisateur
export default {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};
