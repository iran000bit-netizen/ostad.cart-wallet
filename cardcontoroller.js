const SmartGiftCard = require('../models/SmartCard');
const wallets = require('./walletController').wallets;

exports.createCard = (req, res) => {
    const { userId, cardId, expirationDate, spendingLimit } = req.body;
    const wallet = wallets[userId];
    if (!wallet) return res.status(404).json({ message: 'Wallet not found' });

    const card = new SmartGiftCard(cardId, expirationDate, spendingLimit);
    wallet.addCard(card);
    res.json({ message: 'Card created', card });
};
