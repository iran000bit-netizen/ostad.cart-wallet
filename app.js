const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const walletRoutes = require('./routes/walletRoutes');
const cardRoutes = require('./routes/cardRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());
app.set('io', io);

app.use('/api/auth', authRoutes);
app.use('/api/wallets', walletRoutes);
app.use('/api/cards', cardRoutes);
app.use('/api/payments', paymentRoutes);

app.post('/api/notify', (req, res) => {
    const { userId, message } = req.body;
    io.emit(`notification:${userId}`, { message });
    res.json({ status: 'Notification sent' });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
