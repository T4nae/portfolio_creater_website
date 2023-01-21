const express = require('express');
const controller = require('../controllers/auth.controller');
const middleware = require('../middleware/auth.middleware');
const auth = express.Router();

auth.use(middleware)

auth.post("/register", controller.register);
auth.post("/login", controller.login);
auth.get("/logout", controller.logout);

module.exports = auth;