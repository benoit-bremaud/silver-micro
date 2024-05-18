// authController.js : Gère les opérations d'authentification.

// Path: src/server/controllers/authController.js

export function registerUser(req, res) {
  const { username, password, email } = req.body;
  // Logique pour l'inscription
  res.status(201).send({ message: 'User registered successfully' });
};

export function loginUser(req, res) {
  const { username, password } = req.body;
  // Logique pour la connexion
  res.status(200).send({ message: 'User logged in successfully' });
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