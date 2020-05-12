require("../connection");

const User = require("../models/user");

// Mustra un dato
async function getUser(name) {
    const user = await User.findOne({name: name});
    return user;
};

module.exports.getUser = getUser;