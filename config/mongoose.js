const mongoose = require('mongoose');

// connecting to the MONGODB database
mongoose.connect('mongodb://127.0.0.1/hospital_api');
// getting the connection and storing it in variable db
const db = mongoose.connection;

// handling error
db.on('error', console.error.bind(console, 'error connecting to the database: MONGODB'));
db.once('open', () => console.log('connected to the database: MONGODB'));

module.exports = db;