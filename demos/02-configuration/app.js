console.log("02-Configuration");
console.log("~: npm init -y");
console.log("~: npm install express");
// DOC : https://expressjs.com/fr/4x/api.html#app

const express = require("express");
const app = express();
const PORT = 8001;

const fsp = require("fs").promises;

// • Middleware
// • Création d'un fichier log qui track toutes les requêtes
app.use('', async (req, res, next) => {
    await fsp.appendFile(`${process.cwd()}/private/logs.txt`, `${Date.now()} :: ${req.ip} :: ${req.url}\n`);
    next();
});

// • Route
app.get('/', (req, res) => {
    res.sendFile(`${process.cwd()}/views/index.html`);
});

// • Launch
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log("App started :: " + PORT);
});