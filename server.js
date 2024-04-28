const express = require("express");
const conectdb = require('./database');
const app = express();
require("dotenv").config();

conectdb();

app.get('/', (_,res) => {
    res.status(200).json({message: "Rota pública "})
});

app.listen(process.env.port || 3000, () => {
    console.log(`Servidor Rodando na Porta ${process.env.PORT}`)
});