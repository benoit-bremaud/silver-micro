// src/server/routes/userRoutes.js
const express = require('express');
const router = express.Router();

// Exemple de contrôleurs (à créer dans le fichier correspondant)
const { getUser, addUser } = require('../api/userController');

router.get('/users', getUser);
router.post('/users', addUser);

module.exports = router;