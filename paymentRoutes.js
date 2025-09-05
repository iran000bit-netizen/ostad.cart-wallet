const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.post('/make', paymentController.makePayment);

module.exports = router;
