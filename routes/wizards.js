const express = require('express');
const router = express.Router();

const wizards = require("../data/wizards");

router  
    .route("/")
    .get((req,res) => {
        //route can contain key-value pair for serch by name        
        const { name } = req.query;//Extract name from query    
        if (name) { 
            // can be more then one wizard with the  same last name
            const selected = wizards.filter(wizard => wizard.firstName == name || wizard.lastName == name);//filter all comments to the post
            // Check if any comments exist for the postId
            if (selected.length > 0) {
                res.json(selected);
            } else {
                res.send(`No wizards with name ${name} was found`);
            };  
        } else {               
            //select all wizards if no name in query
            res.json(wizards); 
        } 
    });


module.exports = router;