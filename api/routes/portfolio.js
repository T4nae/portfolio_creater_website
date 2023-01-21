const express = require("express");
const controller = require("../controllers/portfolio.controller");
const middleware = require("../middleware/auth.middleware");
const portfolio = express.Router();

portfolio.get("/portfolio/:user", controller.getPortfolio);

portfolio.use("/portfolio/auth",middleware);
portfolio.post("/portfolio/auth/:user", controller.createPortfolio);
portfolio.put("/portfolio/auth/:user/edit", controller.updatePortfolio);

module.exports = portfolio;