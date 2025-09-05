const MetaWallet = require('../models/MetaWallet');
const wallets = {};

exports.wallets = wallets;

exports.createWallet = (req, res) => {
    const { userId } = req.body;
    const wallet = new MetaWallet(userId);
    wallets[userId] = wallet;

    res.json({ message: 'Wallet created', wallet });
};

exports.addChainWallet = (req, res) => {
    const { userId, chain, address, balance } = req.body;
    const wallet = wallets[userId];
    if (!wallet) return res.status(404).json({ message: 'Wallet not found' });

    wallet.addWallet(chain, address, balance);
    res.json({ message: 'Chain added', wallet });
};

exports.getWallet = (req, res) => {
    const { userId } = req.params;
    const wallet = wallets[userId];
    if (!wallet) return res.status(404).json({ message: 'Wallet not found' });

    res.json(wallet);
};
