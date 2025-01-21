const express = require('express');
const app = express();

const PORT = 3000;


//---Middleware


//- Routes
app.get("/", (req,res) => {
    res.send("Home");
})

//--start server
app.listen(PORT, () => {
    console.log(`Server starts on PORT ${PORT}`);
})