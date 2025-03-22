const jwt = require('jsonwebtoken');
require('dotenv').config();


/* const isAdmin = (req, res, next) => {
    // log req.payload to see the decoded token
    console.log(req.payload);

    if ( req.payload && req.payload.role === 'admin') {  
      return next();
    } else {
      return res.status(403).send("forbidden");
    }
  };

module.exports = { 
    isAdmin 
};  

*/
  

// Middleware function to verify JWT and check if the user is an admin
const isAdmin = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        // Verify and decode the token
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

        
        if (decoded.role === 'admin') {
            return next(); // User is admin, proceed to the next middleware or route
        } else {
            return res.status(403).json({ message: 'Forbidden: Admins only' });
        }
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};

module.exports = {
  isAdmin
};