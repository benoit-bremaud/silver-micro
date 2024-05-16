import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/**
 * Contrôleur pour gérer la connexion de l'utilisateur.
 * @param {Request} req - La requête HTTP
 * @param {Response} res - La réponse HTTP
 * @returns {Promise<void>}
 */
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe dans la base de données
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Vérifier si le mot de passe est correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Préparer les données pour le payload
    const payload = {
      id: user._id,
      roles: user.roles
    };

    // Générer un token JWT
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    // Envoyer le token au client
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};