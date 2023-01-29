const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    style: {
        type: Object,
        css: {
            type: String
        },
        class: {
            type: String
        },
    }
});

module.exports = mongoose.model("Portfolio", PortfolioSchema);
