const express = require('express');

const itemRoutes = require('./routes/item.routes');
const errorHandler = require('./middlewares/error.middleware');

const app = express();

// Middleware
app.use(express.json());

// Health Check
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        uptime: process.uptime()
    });
});

// Routes
app.use('/api/items', itemRoutes);

// Error handler
app.use(errorHandler);

module.exports = app;
