const express = require("express");
const bodyParser = require("body-parser");
require("./connection");

const find = require("./login-register/login");
const create = require("./login-register/register");

const app = express();
const port = 3001;

// Static
app.use(express.static("./public"));

// Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// GET
app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.sendFile(__dirname + "/index.html");
});

app.get("/success", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.sendFile(__dirname + "/public/Pages/success.html");
});

app.get("/error", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.sendFile(__dirname + "/public/Pages/fail.html");
});

// POST
app.post("/login", (req, res) => {
    console.log(req.body);
    const { user, password } = req.body;
    
    find.getUser(user)
    .then(json => {
        if(json != null) {
            if(user == json.name && password == json.password) {
                res.redirect("/success");
            }else if(user != json.name || password != json.password) {
                res.redirect("/error");
            };
        }else{
            res.redirect("/error");
        };
    })
    .catch(err => console.log(err));
});

app.post("/registro", (req, res) => {
    const { user, password, email } = req.body;
    
    create.createUser(user, password, email)
    .then(() => res.redirect("/"))
    .catch(err => console.log(err));
});

app.listen(port, () => {
    console.log("Servidor en el puerto", port);
});