const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

// Basic health check route for Render deployment testing
app.get('/', (req, res) => {
    json({ 
        status: 'online', 
        service: 'NOVA AI Backend',
        message: 'Server is awake and running!' 
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`NOVA AI Backend running on port ${PORT}`);
});

