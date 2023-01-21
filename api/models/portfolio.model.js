const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    id: {
        type: Number,
        required: true,
    },
    html: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Portfolio", PortfolioSchema);
