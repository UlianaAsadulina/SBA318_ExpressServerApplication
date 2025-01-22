const express = require('express');
const router = express.Router();

//import data
const ingredients = require("../data/ingredients");
//const elixirs = require("../data/elixirs");

//import error handle function
const error = require("../utilities/error");

router
    .route("/")
    .get((req, res) => {
        res.json(ingredients);
    })
    .post((req, res, next) => {
        //if  the body of the post request contain id and name
        if (req.body.id && req.body.name) {
            //create a new variable with body request
            const ingredient = {
                id: ingredients[ingredients.length - 1].id + 1,          
                name: req.body.name
            };
            //add this variable to the array of ingredients
            ingredients.push(ingredient);
            //send sesponse in JSON format
            res.json(ingredients[ingredients.length - 1]);
        } else //if the body of the post request do not contain data - call an error function
            next(error(400, "Insufficient Data"));
    });
    

router
    .route("/:id")
    .get((req, res, next) => {
        const ingredient = ingredients.find((ingr) => ingr.id == req.params.id);
        if (ingredient) res.json(ingredient)
        else next();
    })
    .patch((req, res, next) => {
        const ingredient = ingredients.find((ingr, i) => {
            if (ingr.id == req.params.id) {
                for (const key in req.body) {
                    ingredients[i][key] = req.body[key];
                }
                return true;
            }
        });

        if (ingredient) res.json(ingredient)
        else next();
    });

//let's say what we can only add new ingredients and change them but can't delete them   

module.exports = router;
