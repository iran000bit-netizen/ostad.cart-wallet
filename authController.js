const jwt = require('jsonwebtoken');
const User = require('../models/User');

const users = {};
const secretKey = 'my_secret_key';

exports.register = (req, res) => {
    const { userId, password, isAdmin } = req.body;
    if (users[userId]) return res.status(400).json({ message: 'User exists' });

    const user = new User(userId, password, isAdmin);
    users[userId] = user;

    res.json({ message: 'User registered' });
};

exports.login = (req, res) => {
    const { userId, password } = req.body;

    const user = users[userId];
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (!user.verifyPassword(password)) return res.status(401).json({ message: 'Invalid password' });

    const token = jwt.sign({ userId: user.userId, isAdmin: user.isAdmin }, secretKey, { expiresIn: '1h' });
    res.json({ token, isAdmin: user.isAdmin });
};

exports.verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Token missing' });

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};
