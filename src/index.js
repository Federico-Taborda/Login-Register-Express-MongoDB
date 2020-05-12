const express = require("express");
require("./connection");

const find = require("./login-register/login");
const create = require("./login-register/register");

const app = express();
const port = 3001;

app.use(express.static("./public"));
app.use(express.json());

app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.sendfile("./public/index.html");
});

app.post("/login", (req, res) => {
    console.log(req.body);
    const { user, password } = req.body;

    find.getUser(user)
    .then(json => {
        if(user == json.name && password == json.password) {
            res.redirect(`http://localhost:${port}/Pages/success.html`);
        }else if(user != json.name || password != json.password) {
            res.redirect(`http://localhost:${port}/Pages/fail.html`);
        };
    })
});

app.post("/registro", (req, res) => {
    console.log(req.body)
    const { user, password, email } = req.body;

    create.createUser(user, password, email)
    .then(() => console.log("Usuario creado"))
    .then(() => res.redirect(`http://localhost:${port}/index.html`))
});

app.listen(port, () => {
    console.log("Servidor en el puerto", port);
});