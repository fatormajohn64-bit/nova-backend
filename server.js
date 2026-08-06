const express = require('express');
require('dotenv').config();
const { validateEnv } = require('./src/config/env');
const apiRoutes = require('./src/routes/api');
const webhookRoutes = require('./src/routes/webhooks');

// Validate environment variables on startup
validateEnv();

const app = express();
app.use(express.json());

// Mount Routes
app.use('/api', apiRoutes);
app.use('/webhook', webhookRoutes);

// Health check route
app.get('/', (req, res) => {
    res.json({ 
        status: 'online', 
        service: 'NOVA AI Backend',
        message: 'Server is awake and running!' 
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`NOVA AI Backend running on port ${PORT}`);
});
