console.log("01-Installation");
console.log("~: npm init -y");
console.log("~: npm install express");
// DOC : https://expressjs.com/fr/4x/api.html#app

const express = require("express");
const app = express();
const PORT = 8001;

// • Use 
// • sert de Middleware et passera toujours par cette fonction tant que la rotue commence par la route spécifiée.
app.use('/users', (req, res, next) => {
    console.log(`• ${req.path} •`);
    next();
});

// • Route
app.get('/', (req, res) => {
    console.log(req.hostname);
    res.send(`Hello world`);
});

app.get('/users/:name/:id', (req, res) => {
    // res.send('user: ' + JSON.stringify(req.params));
    res.json(req.params);
});

// • Launch
app.listen(PORT, () => {
    console.log(`App started :: ${PORT}`);
});