// helperFunctions.js : Fonctions utilitaires pour le serveur.
// Ces fonctions sont utilisées dans plusieurs parties de l'application
// pour effectuer des opérations communes. Par exemple, elles peuvent
// être utilisées pour valider les données, générer des identifiants
// uniques ou formater les dates.

// Path: src/server/utils/helperFunctions.js

// Importer les dépendances
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Générer un hachage de mot de passe
export async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

// Vérifier un mot de passe haché
export async function comparePasswords(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

// Générer un token JWT
export function generateToken(payload, expiresIn) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
}

// Vérifier un token JWT
export function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}

// Générer un identifiant unique
export function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

// Formatter une date
export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

// Valider une adresse e-mail
export function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Exporter les fonctions utilitaires
export default {
  hashPassword,
  comparePasswords,
  generateToken,
  verifyToken,
  generateId,
  formatDate,
  validateEmail
};

// Compare this snippet from src/server/utils/helperFunctions.js: