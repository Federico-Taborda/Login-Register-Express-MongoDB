const express = require("express");

const app = express();
const port = 3001;

app.use(express.static("./public"));
app.use(express.json());

app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.sendfile("./public/index.html");
});

app.post("/registro", (req, res) => {

});

app.listen(port, () => {
    console.log("Servidor en el puerto", port);
});