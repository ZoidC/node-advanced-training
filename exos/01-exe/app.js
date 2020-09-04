const express = require("express");
const app = express();
const PORT = 8001;

app.get('/members/:username', (req, res) => {
    res.send(`<h1>Bonjour ${req.params.username}</h1>`);
});

// • Launch
app.listen(PORT, () => {
    console.log(`Application started and listening at port ${PORT}`);
});