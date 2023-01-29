require("dotenv").config();
var bodyParser = require("body-parser");

const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const session = require("express-session");
const JWT_SECRET = process.env.JWT_SECRET;

const app = express();
let PORT;
process.env.STATUS === "production"
    ? (PORT = process.env.PROD_PORT)
    : (PORT = process.env.DEV_PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require("cors")());

app.use(
    session({
        secret: JWT_SECRET,
        resave: false,
        saveUninitialized: true,
    })
);

app.use("/portfolio", require("./routes/portfolio"));
app.use("/", require("./routes/auth"));

const Start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (e) {
        console.log("Server Error", e.message);
        process.exit(1);
    }
};

Start();
