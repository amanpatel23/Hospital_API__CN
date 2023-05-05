const express = require('express');
const app = express();
// defining port
const port = 8000;
// getting database connection
const db = require('./config/mongoose');

// middleware the convert data into json
app.use(express.json());
// middleware to decode form data
app.use(express.urlencoded({
    extended: true
}));

const myRoute = require('./routes');
app.use('/', myRoute);

// running express server on the port defined
app.listen(port, (error) => {
    if (error) console.log(`error in running the server, ${error}`);
    else console.log(`server is running at port: ${port}`);
})

