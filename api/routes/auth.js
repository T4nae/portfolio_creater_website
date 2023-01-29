const express = require("express");
const controller = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");
const auth = express.Router();

auth.post("/register", controller.register);
auth.post("/login", controller.login);
auth.use("/auth/*", authMiddleware);
auth.post("/auth/logout", controller.logout);

module.exports = auth;
