const mongoose = require("mongoose");

const userPoints = mongoose.Schema({
    userID: String,
    points: {type: Number, default: 0},
    inv: {type: Array, default: []}
})

module.exports.userPoints = mongoose.model("points", userPoints);