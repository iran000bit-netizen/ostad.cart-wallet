const { multiChainPayment } = require('../services/paymentService');
const aiFraudDetection = require('../services/aiFraudDetection');
const wallets = require('./walletController').wallets;

exports.makePayment = async (req, res) => {
    const { userId, amount, chainsPriority } = req.body;
    const wallet = wallets[userId];
    if (!wallet) return res.status(404).json({ message: 'Wallet not found' });

    if (aiFraudDetection.isSuspicious(userId, amount)) {
        return res.status(403).json({ message: 'Suspicious transaction detected' });
    }

    const success = await multiChainPayment(wallet, amount, chainsPriority);

    if (success) {
        aiFraudDetection.recordTransaction(userId, amount, chainsPriority[0]);
        const io = req.app.get('io');
        io.emit(`notification:${userId}`, { message: `Payment of ${amount} successful!` });

        res.json({ message: 'Payment successful', wallet });
    } else {
        res.status(400).json({ message: 'Insufficient funds' });
    }
};
