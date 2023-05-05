const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const myRoute = require('./routes');
app.use('/', myRoute);

app.listen(port, (error) => {
    if (error) console.log(`error in running the server, ${error}`);
    else console.log(`server is running at port: ${port}`);
})

