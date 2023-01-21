const jwt = require("jsonwebtoken");
const express = require("express");
const authMiddleware = express.Router();
const session = require("express-session");

authMiddleware.use(session({            
    secret: 'my-secret',     
    resave: false,           
    saveUninitialized: true
}));

authMiddleware.use((req, res, next) => {
    const token = session.token;
    if (!token) {
        return res.status(401).json({ message: "Not authorized" });
    }
    try {
        const decoded = jwt.verify(token, config.get("jwtSecret"));
        req.user = decoded;
        next();
    } catch (e) {
        res.status(401).json({ message: "Not authorized" });
    }
});
module.exports = authMiddleware;
