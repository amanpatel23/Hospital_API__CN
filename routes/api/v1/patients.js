const express = require('express');
const router = express.Router();
const middleware = require('../../../config/middleware');

// getting patient api from the controllers
const patientsApi = require('../../../controllers/api/v1/patients_api');

// route for handling patient registration
router.post('/register', middleware.auth, patientsApi.register);
// route for creating report for the patient
router.post('/:id/create_report', middleware.auth, patientsApi.createReport);
// route for showing all the reports of a patient
router.get('/:id/all_reports', patientsApi.allReports);

module.exports = router;
