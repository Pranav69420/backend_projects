const express = require('express');

// rest object
const app = express(); // all express workings are put into app variable.

//middlewares 
app.use(express.json());

//routes
app.get("/test", (req, res) => {
    res.status(200).send('<h1>Welcome to Node server</h1>');
});

//port
const PORT = 8080;

//listen
app.listen(PORT, () => {
    console.log("Node server Running");
});

