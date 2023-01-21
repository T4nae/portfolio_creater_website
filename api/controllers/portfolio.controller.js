const Portfolio = require("../models/portfolio.model.js");
const User = require("../models/user.model.js");

module.exports = {
    getPortfolio: async (req, res) => {
        const { user } = req.params;
        try {
            const portfolio = await Portfolio.findOne({ user });
            res.status(200).json(portfolio);
        } catch (e) {
            res.status(500).json({ message: "Something went wrong, try again" });
        }
    },
    createPortfolio: async (req, res) => {
        const { user } = req.params;
        const { html } = req.body;
        try {
            const portfolio = new Portfolio({ user, html });
            await portfolio.save();
            res.status(201).json({ message: "Portfolio created" });
        } catch (e) {
            res.status(500).json({ message: "Something went wrong, try again" });
        }
    },
    updatePortfolio: async (req, res) => {
        const { user } = req.params;
        const { html } = req.body;
        try {
            const portfolio = await Portfolio
                .findOneAndUpdate({
                    user
                }, {
                    html
                }, {
                    new: true
                });
            res.status(200).json(portfolio);
        } catch (e) {
            res.status(500).json({ message: "Something went wrong, try again" });
        }
    },
}