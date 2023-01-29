const express = require("express");
const controller = require("../controllers/portfolio.controller");
const middleware = require("../middleware/auth.middleware");
const portfolio = express.Router();

portfolio.get("/:user", controller.getPortfolio);
portfolio.use("/auth/*", middleware);
portfolio.post("/auth/create/:user", controller.createPortfolio);
portfolio.put("/auth/edit/:user", controller.updatePortfolio);

module.exports = portfolio;
