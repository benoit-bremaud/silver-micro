import User from '../models/User.js';
import { validateRegister } from '../validations/userValidation.js';

/**
 * Contrôleur pour enregistrer un nouvel utilisateur
 * @param {Object} req - Requête HTTP
 * @param {Object} res - Réponse HTTP
 */
export const registerUser = async (req, res) => {
  // Validation des données d'entrée à l'aide de Joi
  const { error } = validateRegister(req.body);
  if (error) {
    return res.status(400).send(error.details.map(detail => detail.message));
  }

  // Vérification si l'email existe déjà dans la base de données
  try {
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
      return res.status(400).send('Email already exists');
    }

    // Création de l'utilisateur après validation et vérification de l'email
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    // Sauvegarder l'utilisateur dans la base de données
    const savedUser = await user.save();
    res.status(201).send({ user: savedUser._id });
  } catch (err) {
    // Gérer les erreurs lors de la sauvegarde
    res.status(400).send(err);
  }
};