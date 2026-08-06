const express = require('express');
const router = express.Router();

// Route to fetch system metrics for the frontend AI Reader tab
router.get('/metrics', (req, res) => {
    res.json({
        success: true,
        metrics: {
            remainingTokens: 142050,
            activeTasks: 2,
            serverStatus: 'online',
            uptime: process.uptime()
        }
    });
});

// Route to receive prompt submissions from the frontend Command Center
router.post('/chat', async (req, res) => {
    const { message } = req.body;
    
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    // Echo back a response (or hook into Gemini here later)
    res.json({
        success: true,
        reply: `NOVA AI received: "${message}". Server is online and operational!`
    });
});

module.exports = router;

