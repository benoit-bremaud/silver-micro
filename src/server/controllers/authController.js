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
    console.log('Recherche de l\'utilisateur dans la base de données...');
    const user = await User.findOne({ email });
    if (!user) {
      console.log('Utilisateur non trouvé');
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    console.log('Utilisateur trouvé:', user);

    // Vérifier si le mot de passe est correct
    console.log('Vérification du mot de passe...');
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Mot de passe incorrect');
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    console.log('Mot de passe correct');

    // Vérifier les variables d'environnement
    console.log('JWT_SECRET:', process.env.JWT_SECRET);
    console.log('TOKEN_EXPIRY:', process.env.TOKEN_EXPIRY);

        // Vérifier le format de TOKEN_EXPIRY
    const tokenExpiry = process.env.TOKEN_EXPIRY;
    if (!/^\d+[smhd]$/.test(tokenExpiry)) {
      throw new Error('TOKEN_EXPIRY format is invalid');
    }

    // Générer un token JWT
    console.log('Génération du token JWT...');
    const token = jwt.sign({ id: user._id, roles: user.roles }, process.env.JWT_SECRET, {
      expiresIn: tokenExpiry,
    });
    console.log('Token généré:', token);

    // Envoyer le token au client
    res.json({ token });
  } catch (error) {
    console.log('Erreur du serveur:', error);
    res.status(500).json({ error: 'Server error' });
  }
};