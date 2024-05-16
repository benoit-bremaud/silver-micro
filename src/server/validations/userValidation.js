// Importation du module Joi pour la validation des données
import Joi from 'joi';

// Schéma de validation pour l'enregistrement d'un utilisateur
const registerSchema = Joi.object({
  username: Joi.string().min(3).max(255).required().description('User\'s unique username').label('Username'),
  email: Joi.string().email().required().description('User\'s email address').label('Email'),
  password: Joi.string().min(6).required().description('User\'s secure password').label('Password')
});

// Fonction de validation pour l'enregistrement d'un utilisateur
// Valide les données d'entrée contre le schéma défini ci-dessus
const validateRegister = (user) => {
  return registerSchema.validate(user, { abortEarly: false }); // abortEarly: false pour obtenir toutes les erreurs de validation
};

// Exportation de la fonction de validation
export { validateRegister };
