const express = require('express');
const router = express.Router();

//import data
const ingredients = require("../data/ingredients");
const elixirs = require("../data/elixirs");

//import error handle function
const error = require("../utilities/error");

router
    .route("/")
    .get((req, res) => {
        //add links to the response
        const links = [
        {
            href: "ingredients/:id",
            rel: ":id",
            type: "GET",
        },
        ];

        res.json({ ingredients, links });
    });

module.exports = router;
