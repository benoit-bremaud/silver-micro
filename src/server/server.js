// `server.js` is the entry point for the server application. It imports the `app` from `app.js` and starts the server on the specified port. It also connects to the MongoDB database using the `connectDB` function from `db.js`. The server listens on the specified port and logs a message to the console when it starts.

// Path: src/server/server.js

// Importer les dépendances
import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/db.js';

// Charger les variables d'environnement
dotenv.config();

// Connexion à MongoDB
connectDB();

// Port du serveur
const PORT = process.env.PORT || 3000;

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});