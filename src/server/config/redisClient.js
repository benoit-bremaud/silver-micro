// redisClient.js : Configuration du client Redis pour le stockage en cache ou la gestion des sessions.

// Path: src/server/config/redisClient.js

import redis from 'redis';

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD
});

redisClient.on('error', (err) => {
  console.error('Redis error: ', err);
});

export default redisClient;
