const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/login-register";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.on("open", () => {
    console.log("Base de datos conectada a", uri);
});

mongoose.connection.on("error", (err) => {
    console.log(err);
});