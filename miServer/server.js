const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/01-index.html" )
});

app.post("/formulario", (req, res) => {
    console.log(req.body);

    res.send("Formulario recibido");
});

app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});