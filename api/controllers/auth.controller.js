const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const jwtSecret = process.env.JWT_SECRET;
const Session = require('express-session');

module.exports = {
    register: async (req, res) => {
        const { email, password, username } = req.body;
        const errors = validationResult(req);
        // check for errors
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array(), message: "Invalid registration data" });
        }
        try {
            // check if user exists
            const candidate = await User.findOne({ email });
            if (candidate) {
                return res.status(400).json({ message: "User already exists" });
            }
            // hash password
            const hashedPassword = await bcrypt.hash(password, 12);
            // create user
            const user = new User({ email, password: hashedPassword, username });
            await user.save();
            res.status(201).json({ message: "User created" });
        } catch (e) {
            res.status(500).json({ message: "Something went wrong, try again" });
        }
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        const errors = validationResult(req);
        // check for errors
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array(), message: "Invalid login data" });
        }
        try {
            const user = await User.findOne({
                email
            });
            // check if user exists
            if (!user) {
                return res.status(400).json({ message: "User not found" });
            }
            // check if password is correct
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: "Invalid password" });
            }
            // create and return token
            const token = jwt.sign(
                { userId: user.id },
                jwtSecret,
                { expiresIn: '1h' }
            );
            Session.token = token;
            res.json({ token, userId: user.id });
        } catch (e) {
            res.status(500).json({ message: "Something went wrong, try again" });
        }
    },
    logout: async (req, res) => {
        Session.destroy();
        res.status(200).json({ message: "Logout" });
    },
}