const express = require('express');
const router = express.Router();
const AggregatedController = require('../controllers/aggregated.controller');

router.get('/', AggregatedController.getAggregatedData);

module.exports = router;
