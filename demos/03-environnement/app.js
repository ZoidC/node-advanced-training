console.log("03-Environnement");
console.log("~: npm init -y");
console.log("~: npm install express");
// DOC : https://expressjs.com/fr/4x/api.html#app
console.log("~: npm install dotenv");
// NPM : https://www.npmjs.com/package/dotenv

const express = require("express");
const app = express();
require('dotenv').config({path: './production.env'});
// const PORT = 8001;
const PORT = process.env.PORT;

// • Route
app.get('/', (req, res) => {
    res.end("Hello");
});

// • Launch
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log("App started :: " + PORT);
});