import jwt from 'jsonwebtoken';
import redisClient from '../config/redisClient.js';

/**
 * Middleware pour vérifier l'authentification de l'utilisateur
 * @param {Object} req - La requête HTTP
 * @param {Object} res - La réponse HTTP
 * @param {Function} next - La fonction next pour passer au middleware suivant
 */
export const authenticateUser = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).send({ error: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Vérifier si le token est dans la liste noire
    const isBlacklisted = await redisClient.get(`blacklist_${token}`);
    if (isBlacklisted) {
      return res.status(401).send({ error: 'Token invalid' });
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Invalid token' });
  }
};

/**
 * Middleware pour vérifier les rôles de l'utilisateur
 * @param {Array} roles - Les rôles autorisés
 */
export const authorizeUser = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.roles)) {
      return res.status(403).send({ error: 'Unauthorized' });
    }
    next();
  };
};

// Path: src/server/middleware/authMiddleware.js
