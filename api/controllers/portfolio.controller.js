const User = require("../models/user.model");
const Portfolio = require("../models/portfolio.model");

module.exports = {
    getPortfolio: async (req, res) => {
        const user = await User.findOne({ username: req.params.user });
        if (!user) {
            return res.status(404).json({ message: "Portfolio not found" });
        }
        try {
            const details = await user.populate("portfolio");

            if (!details.portfolio[0] || !details.portfolio) {
                return res.status(404).json({ message: "Portfolio not found" });
            }
            res.status(200).json(details.portfolio);
        } catch (e) {
            console.log(e);
            res.status(500).json({
                message: "Something went wrong, try again",
            });
        }
    },
    createPortfolio: async (req, res) => {
        const user = await User.findOne({ username: req.params.user });
        const { type, title, content, style } = req.body;
        try {
            const data = {
                user: user._id,
                type,
                title,
                content,
                style: {
                    css: style.css,
                    class: style.class,
                },
            };
            const portfolio = new Portfolio(data);
            await portfolio.save();
            user.portfolio.push(portfolio);
            await user.save();
            res.status(201).json({ message: "Portfolio created" });
        } catch (e) {
            res.status(500).json({
                message: "Something went wrong, try again",
            });
        }
    },
    updatePortfolio: async (req, res) => {
        const { user } = req.params;
        const { type, title, content, style, id } = req.body;
        try {
            if (type !== "delete") {
                const data = {
                    type,
                    title,
                    content,
                    style: {
                        css: style.css,
                        class: style.class,
                    },
                };
                await Portfolio.findOneAndUpdate({ _id: id }, data);
            } else if (type === "delete") {
                await Portfolio.findOneAndDelete({
                    _id: id,
                });
            }
            res.status(201).json({ message: "Portfolio edited" });
        } catch (e) {
            res.status(500).json({
                message: "Something went wrong, try again",
            });
        }
    },
};
