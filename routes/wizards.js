const express = require('express');
const router = express.Router();

const wizards = require("../data/wizards");

router  
    .route("/")
    .get((req,res) => {
        res.json(wizards);
    });

module.exports = router;