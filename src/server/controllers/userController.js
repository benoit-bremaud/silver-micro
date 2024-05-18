import User from '../models/User.js';
import { validateUser } from '../validations/userValidation.js';

/**
 * Contrôleur pour l'enregistrement d'un nouvel utilisateur
 * @param {Object} req - La requête HTTP
 * @param {Object} res - La réponse HTTP
 * @returns {Promise<void>}
 */
export const registerUser = async (req, res) => {
  // Validation des données d'entrée
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send({ error: 'InvalidData', message: error.details[0].message });

  try {
    // Vérifier si l'email existe déjà
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send({ error: 'EmailExists', message: 'Email already exists' });

    // Créer un nouvel utilisateur avec les données fournies
    user = new User(req.body);
    await user.save();

    // Exclure le mot de passe de la réponse
    const userResponse = {
      _id: user._id,
      username: user.username,
      email: user.email,
      roles: user.roles,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      __v: user.__v,
    };

    // Envoyer la réponse avec l'utilisateur créé
    res.status(201).send(userResponse);
  } catch (error) {
    // En cas d'erreur serveur, envoyer un message d'erreur
    res.status(500).send({ error: 'ServerError', message: 'An error occurred while creating the user' });
  }
};

/**
 * Contrôleur pour la connexion d'un utilisateur
 * @param {Object} req - La requête HTTP
 * @param {Object} res - La réponse HTTP
 * @returns {Promise<void>}
 */
export const loginUser = async (req, res) => {
  // Validation des données d'entrée
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send({ error: 'InvalidData', message: error.details[0].message });

  try {
    // Vérifier si l'utilisateur existe
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send({ error: 'UserNotFound', message: 'User not found' });

    // Vérifier si le mot de passe est correct
    const validPassword = await user.isValidPassword(req.body.password);
    if (!validPassword) return res.status(400).send({ error: 'InvalidPassword', message: 'Invalid password' });

    // Générer un token JWT
    const token = user.generateAuthToken();

    // Exclure le mot de passe de la réponse
    const userResponse = {
      _id: user._id,
      username: user.username,
      email: user.email,
      roles: user.roles,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      __v: user.__v,
    };

    // Envoyer la réponse avec l'utilisateur et le token
    res.status(200).send({ user: userResponse, token });
  } catch (error) {
    // En cas d'erreur serveur, envoyer un message d'erreur
    res.status(500).send({ error: 'ServerError', message: 'An error occurred while logging in' });
  }
};

/**
 * Contrôleur pour obtenir les détails d'un utilisateur
 * @param {Object} req - La requête HTTP
 * @param {Object} res - La réponse HTTP
 * @returns {Promise<void>}
 */
export const getUserDetails = async (req, res) => {
  try {
    // Récupérer les détails de l'utilisateur à partir du token JWT
    const user = await User.findById(req.user._id).select('-password');

    // Envoyer la réponse avec les détails de l'utilisateur
    res.status(200).send(user);
  } catch (error) {
    // En cas d'erreur serveur, envoyer un message d'erreur
    res.status(500).send({ error: 'ServerError', message: 'An error occurred while getting user details' });
  }
};

/**
 * Contrôleur pour mettre à jour les détails d'un utilisateur
 * @param {Object} req - La requête HTTP
 * @param {Object} res - La réponse HTTP
 * @returns {Promise<void>}
 */
export const updateUserDetails = async (req, res) => {
  // Validation des données d'entrée
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send({ error: 'InvalidData', message: error.details[0].message });

  try {
    // Mettre à jour les détails de l'utilisateur
    await User.findByIdAndUpdate(req.user._id, req.body);

    // Envoyer la réponse avec un message de succès
    res.status(200).send({ message: 'User details updated successfully' });
  } catch (error) {
    // En cas d'erreur serveur, envoyer un message d'erreur
    res.status(500).send({ error: 'ServerError', message: 'An error occurred while updating user details' });
  }
};

/**
 * Contrôleur pour supprimer un utilisateur
 * @param {Object} req - La requête HTTP
 * @param {Object} res - La réponse HTTP
 * @returns {Promise<void>}
 */
export const deleteUser = async (req, res) => {
  try {
    // Supprimer l'utilisateur
    await User.findByIdAndDelete(req.user._id);

    // Envoyer la réponse avec un message de succès
    res.status(200).send({ message: 'User deleted successfully' });
  } catch (error) {
    // En cas d'erreur serveur, envoyer un message d'erreur
    res.status(500).send({ error: 'ServerError', message: 'An error occurred while deleting user' });
  }
};

// Path: src/server/controllers/userController.js