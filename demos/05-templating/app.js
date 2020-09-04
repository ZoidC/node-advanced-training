console.log("05-Templating");
console.log("~: npm init -y");
console.log("~: npm install express");
// DOC : https://expressjs.com/fr/4x/api.html#app
console.log("~: npm install express-hbs");
// NPM : https://www.npmjs.com/package/express-hbs

const express = require("express");
const app = express();
const router = require("./app.router");
const engine = require("express-hbs");
const PORT = 8001;

// • Config Engine
app.engine('hbs', engine.express4({
    partialsDir: `${process.cwd()}/views/partials`,
    defaultLayout: `${process.cwd()}/views/layouts/default.hbs`
}));

// • Use Engine
app.set('view engine', 'hbs');

// • Middleware
app.use((req, res, next) => {
    console.log(req.url);
    next();
});

// • Static Files (contains next())
app.use(express.static(`${process.cwd()}/public`));

// • Route
app.use(router);

// • Launch
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log("App started :: " + PORT);
});