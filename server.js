const express = require('express');
const app = express();

const PORT = 3000;


// route imports
const elixirs = require("./routes/elixirs");
const ingredients = require("./routes/ingredients");

//import for error handle
const error = require("./utilities/error");


//---Middleware


//- Routes

// Use our inported Routes
app.use("/elixirs", elixirs);
app.use("/ingredients", ingredients);

app.get("/", (req,res) => {
    res.send("Home page for Professor Severus Snape's students");
})

//--start server
app.listen(PORT, () => {
    console.log(`Server starts on PORT ${PORT}`);
})