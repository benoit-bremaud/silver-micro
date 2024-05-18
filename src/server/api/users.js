// users.js : Définit les endpoints pour la gestion des utilisateurs.

// Path: src/server/api/users.js

// Importation du modèle User
import User from '../models/User.js';
import { hashPassword, comparePasswords } from '../utils/password.js';

/**
 * Requête pour créer un nouvel utilisateur
 * @param {*} req 
 * @param {*} res 
 * @returns
 */
export const createUser = async (req, res) => {
    try {
        console.log("Données reçues :", req.body); // Afficher les données reçues dans la console
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: await hashPassword(req.body.password)
        });

        const savedUser = await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur :", error); // Afficher l'erreur dans la console
        res.status(400).send({
            error: 'InvalidData',
            message: 'Les données fournies sont incorrectes ou incomplètes.'
        });
    }
}
