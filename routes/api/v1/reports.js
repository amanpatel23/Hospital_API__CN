const express = require('express');
const router = express.Router();

// getting reports api from the controllers
const reportsApi = require('../../../controllers/api/v1/reports_api');

// route for showing all the reports that has a particula status
router.get('/:status', reportsApi.reportsByStatus);

module.exports = router;