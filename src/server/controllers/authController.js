// authController.js : Gère les opérations d'authentification.

// Path: src/server/controllers/authController.js

// Importer les dépendances
import { generateToken } from '../services/authService.js';

export function registerUser(req, res) {
  const { username, password, email } = req.body;
  // Logique pour l'inscription
  res.status(201).send({ message: 'User registered successfully' });
};

// Logger l'utilisateur
export async function loginUser(req, res) {
  const { email, password } = req.body;
  // Logique pour la connexion
  const token = generateToken(email, ['user']);
  res.status(200).send({ message: 'User logged in successfully', token });
};

export function logoutUser(req, res) {
  // Logique pour la déconnexion
  res.status(200).send({ message: 'User logged out successfully' });
};

// Exporter les opérations d'authentification
export default {
  registerUser,
  loginUser,
  logoutUser
};