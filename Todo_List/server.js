const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');

//env config
dotenv.config(); // since it is already in the root folder no need to set the path for this otherwise we do "dotenv.config({the path of the .env file});"

// rest object
const app = express(); // all express workings are put into app variable.

//middlewares 
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use('/api/v1/test', require('./routes/testRouter'));

//port
const PORT = process.env.PORT || 8000; // if by chance .env file does not work it will fall back to port 8000.

//listen
app.listen(PORT, () => {
    console.log(`Node server Running on ${process.env.DEV_MODE} mode on port number ${PORT} `.bgBlue);
});

