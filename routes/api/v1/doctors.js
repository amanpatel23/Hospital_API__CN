const express = require('express');
const router = express.Router();

// getting doctors api from the controllers
const doctorsApi = require('../../../controllers/api/v1/doctors_api');

// route for handling doctor registration
router.post('/register', doctorsApi.register);
// route for handling login of the doctor
router.post('/login', doctorsApi.login);

module.exports = router;