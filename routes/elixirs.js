const express = require('express');
const router = express.Router();

//import data
const ingredients = require("../data/ingredients");
const difficulties = require("../data/difficulties");
const elixirs = require("../data/elixirs");
const wizards = require("../data/wizards");

const error = require("../utilities/error");

router
    .route("/")
    .get((req, res) => {        
        res.json(elixirs);
    })
    .post((req, res, next) => {
        if (req.body.name && req.body.effect && req.body.difficulty) {
            if (elixirs.find((el) => el.name === req.body.name)) {
                next(error(409, `The Recipe for the ${req.body.name} is already written down here`));
                return;
            };

            if (elixirs.find((el) => el.effect === req.body.effect)) {
                next(error(409, `An elixir with the same effect is already exists`));
                return;
            };

            const elixir = {
                id: elixirs[elixirs.length - 1].id + 1,
                name: req.body.name,
                effect: req.body.effect,
                sideEffects: req.body.sideEffects,
                characteristics: req.body.characteristics,
                difficulty: req.body.difficulty,       
                ingredients: req.body.ingredients, 
                inventorID: req.body.inventorID, 
                instructions: req.body.instructions
            };

            elixirs.push(elixir);
            res.json(elixirs[elixirs.length - 1]);
            console.log("Successfully added");
            

        } else next(error(400, "Insufficient Data"));
    });

router
    .route("/:id")
    .get((req, res, next) => {
        const elixir = elixirs.find((el) => el.id == req.params.id);
        if (elixir) res.json(elixir);
        else next();
    })
    .patch((req, res, next) => {
        const elixir = elixirs.find((el, i) => {
            if (el.id == req.params.id) {
                for (const key in req.body) {
                    elixirs[i][key] = req.body[key];
                }
                return true;
            }
        });

        if (elixir) {
            res.json(elixir);
            console.log("Successfully edited");
        } 
        else next();
    })
    .delete((req, res, next) => {
        const elixir = elixirs.find((el, i) => {
            if (el.id == req.params.id) {
                elixirs.splice(i, 1);
                return true;
            }
        });

        if (elixir) {
            res.json(elixir);
            console.log("Element deleted");
        } 
        else next();
    });


module.exports = router;

