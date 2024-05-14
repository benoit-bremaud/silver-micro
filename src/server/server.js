import app from './app.js';  // Assurez-vous que le chemin est correct

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
