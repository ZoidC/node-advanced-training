console.log("04-Routing");
console.log("~: npm init -y");
console.log("~: npm install express");
// DOC : https://expressjs.com/fr/4x/api.html#app
console.log("~: npm install compression");
// NPM : https://www.npmjs.com/package/compression

const express = require("express");
const app = express();
const compression = require("compression");
const router = require("./app.router");
const PORT = 8001;

// • Middleware
app.use((req, res, next) => {
    console.log(req.url);
    next();
});

// • Compression
app.use(compression());

// • Static Files (contains next())
app.use(express.static(`${process.cwd()}/public`));

// • Route
app.use(router);

// • No route ? -> 404
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

// • Error Management
app.use((error, req, res, next) => {
    // • Website Mode
    res.status(error.status || 500).sendFile(`${process.cwd()}/views/error.html`);
    // • API Mode
    // res.status(error.status || 500).send({
    //     error: {
    //         status: error.status || 500,
    //         message: error.message || "Internal Server Error"
    //     }
    // });
});

// • Launch
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log("App started :: " + PORT);
});