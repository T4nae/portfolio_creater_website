require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");

const app = express();
let PORT;
process.env.STATUS === "production" ? (PORT = process.env.PROD_PORT) : (PORT = process.env.DEV_PORT);
console.log(PORT);

app.use(require("cors")());
app.use("/", require("./routes/auth"));
app.use("/", require("./routes/portfolio"));

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
