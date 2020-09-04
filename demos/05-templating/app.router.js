const express = require("express");
const router = express.Router();
const pageController = require("./controllers/pages");

// • Routes
router.get('/', pageController.index);
router.get('/index', pageController.index);
router.get('/about', pageController.about);

module.exports = router;