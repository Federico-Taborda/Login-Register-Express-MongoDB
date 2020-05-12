require("../connection");

const User = require("../models/user");

async function createUser(name, password, email) {
    const user = new User({
        name: name,
        password: password,
        email: email
    });

    await user.save();
};

module.exports.createUser = createUser;