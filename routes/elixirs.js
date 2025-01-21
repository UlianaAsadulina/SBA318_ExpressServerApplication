const express = require('express');
const router = express.Router();

//import data
const ingredients = require("../data/ingredients");
const difficulties = require("../data/difficulties");
const elixirs = require("../data/elixirs");

const error = require("../utilities/error");

router
    .route("/")
    .get((req, res) => {
        
        res.json(elixirs);
    })

module.exports = router;
