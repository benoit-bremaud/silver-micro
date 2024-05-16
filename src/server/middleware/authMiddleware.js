import jwt from 'jsonwebtoken';
import redisClient from '../config/redisClient.js';

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).send({ error: 'TokenMissing', message: 'Token is required for authentication' });
  }

  try {
    const isBlacklisted = await redisClient.getAsync(token);
    if (isBlacklisted) {
      return res.status(401).send({ error: 'TokenInvalid', message: 'Token has been invalidated' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send({ error: 'TokenInvalid', message: 'Invalid token' });
  }
};

export default authMiddleware;