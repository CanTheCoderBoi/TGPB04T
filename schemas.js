const mongoose = require("mongoose");

const userPoints = mongoose.Schema({
    userID: String,
    points: {type: Number, default: 0},
    inv: {type: Array, default: []}
})

const sellSchema = mongoose.Schema({
    userID: String,
    product: String,
    points: Number,
    asking: {type: String, default: undefined},
    messageID: String,
})

module.exports.userPoints = mongoose.model("points", userPoints);
module.exports.sales = mongoose.model("sales", sellSchema);