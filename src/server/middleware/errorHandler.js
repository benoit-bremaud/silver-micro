// src/server/middleware/errorHandler.js
const errorHandler = (err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
};

export default errorHandler;