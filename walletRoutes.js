const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');

router.post('/create', walletController.createWallet);
router.post('/add-chain', walletController.addChainWallet);
router.get('/:userId', walletController.getWallet);

module.exports = router;
