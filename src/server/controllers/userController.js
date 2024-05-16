import { validateRegister } from '../validations/userValidation.js';
import User from '../models/User.js';

// Contrôleur pour enregistrer un nouvel utilisateur
const registerUser = async (req, res) => {
  // Validation des données d'entrée à l'aide de Joi
  const { error } = validateRegister(req.body);
  if (error) {
    // Retourner des messages d'erreur si la validation échoue
    return res.status(400).send(error.details.map(detail => detail.message));
  }

  // Vérification si l'email existe déjà dans la base de données
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

  try {
    // Sauvegarder l'utilisateur dans la base de données
    await user.save();
    // Envoyer une réponse de succès avec l'ID de l'utilisateur
    res.status(201).send({ user: user._id });
  } catch (err) {
    // Gérer les erreurs lors de la sauvegarde
    res.status(400).send(err);
  }
};

export { registerUser };
