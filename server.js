const express = require('express');
const app = express();

const PORT = 3000;

const bodyParser = require("body-parser");//--> bring body parser

// route imports
const elixirs = require("./routes/elixirs");
const ingredients = require("./routes/ingredients");
const wizards = require('./routes/wizards');

//import for error handle
const error = require("./utilities/error");



//---Middleware

// Parsing Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Logging Middlewaare
app.use((req, res, next) => {
    const time = new Date();
    console.log(`---> ${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`);
    if (Object.keys(req.body).length > 0) {
        console.log(`Containing the data: ${JSON.stringify(req.body)}`);
    }
    next();
});

//- Routes

// Use our inported Routes
app.use("/elixirs", elixirs);
app.use("/ingredients", ingredients);
app.use("/wizards", wizards);

app.get("/", (req,res) => {
    res.send("Home page for Professor Severus Snape's students");
})


// 404 Middleware
app.use((req, res) => {
    res.status(404);
    res.json({ error: "Resource Not Found" });
});


// Another error-handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
});


//--start server
app.listen(PORT, () => {
    console.log(`Server is Listening on PORT ${PORT}`);
})