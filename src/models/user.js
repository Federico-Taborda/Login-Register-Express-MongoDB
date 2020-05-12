const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        require: true
    },
    password: String,
    email: String
});

module.exports = model("User", userSchema);