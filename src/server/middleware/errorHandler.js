// errorHandler.js : Gère les erreurs de manière centralisée.

// Path: src/server/middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'An internal server error occurred' });
  };
  
  export default errorHandler;
  