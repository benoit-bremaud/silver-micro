// authService.js : Fournit des services pour l'authentification.

// Path: src/server/services/authService.js

// Importer les dépendances
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/**
 * Service pour gérer l'authentification de l'utilisateur.
 * @param {string} email - Email de l'utilisateur
 * @param {string} password - Mot de passe de l'utilisateur
 * @returns {Promise<{token: string}>} - Token JWT si la connexion est réussie
 * @throws {Error} - Si les identifiants sont incorrects
 */
export const authenticateUser = async (email, password) => {
  // Vérifier si l'utilisateur existe dans la base de données
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid email or password');
  }

  // Vérifier si le mot de passe est correct
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid email or password');
  }

  // Générer un token JWT
  const token = jwt.sign({ id: user._id, roles: user.roles }, process.env.JWT_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRY,
  });

  // Retourner le token
  return { token };
};

/**
 * Service pour gérer la déconnexion de l'utilisateur.
 * @param {string} token - Token JWT de l'utilisateur
 * @returns {Promise<void>}
 */
export const logoutUser = async (token) => {
  console.log('LogoutUser');
  if (!token) {
    console.log('TokenMissing');
    throw new Error('Token missing');
  }
  // Supprimer le token de la base de données Redis
  await redisClient.del(token);
};

/**
 * Service pour générer un token JWT.
 * @param {string} id - ID de l'utilisateur
 * @param {string} roles - Rôles de l'utilisateur
 * @returns {string} - Token JWT
 * @throws {Error} - Si une erreur s'est produite
 */
export const generateToken = (id, roles) => {
  try {
    // Générer un token JWT
    const token = jwt.sign({ id, roles }, process.env.JWT_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRY,
    });

    return token;
  } catch (error) {
    throw new Error('Token generation failed');
  }
};


// Exportation des services
export default { authenticateUser, logoutUser, generateToken };