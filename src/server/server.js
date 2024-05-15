// Path: src/server/routes/reservationRoutes.js
// Pour démarer le serveur, vous devez exécuter le fichier src/server/server.js.

// Importer l'application Express
import app from './app.js';  // Assurez-vous que le chemin est correct

// Définir le port
const PORT = process.env.PORT || 3000;

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // eslint-disable-line no-console
});