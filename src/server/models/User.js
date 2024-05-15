import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Création du schéma pour le modèle utilisateur
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    minlength: 3,
    maxlength: 255
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    maxlength: 255,
    unique: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6
  }
});

// Hashage du mot de passe avant de sauvegarder le modèle utilisateur
userSchema.pre('save', async function (next) {
  // Vérifier si le mot de passe est modifié pour éviter de le re-hasher accidentellement
  if (!this.isModified('password')) return next();

  // Hashage du mot de passe avec un salt généré par bcrypt
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compilation du modèle basé sur le schéma
const User = mongoose.model('User', userSchema);

export default User;
