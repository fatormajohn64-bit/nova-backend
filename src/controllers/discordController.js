const aiService = require('../services/aiService'); // Optional: connect to Gemini later

// Handle incoming WhatsApp webhook messages
const handleWhatsAppWebhook = async (req, res) => {
    try {
        const body = req.body;

        // Check if this is a valid WhatsApp message event
        if (body.object) {
            // Acknowledge receipt immediately to WhatsApp servers
            res.status(200).send('EVENT_RECEIVED');

            // Process message logic here (e.g., extract text and send to AI)
            console.log('📱 WhatsApp Webhook payload received:', JSON.stringify(body, null, 2));
            return;
        }

        res.sendStatus(404);
    } catch (error) {
        console.error('Error handling WhatsApp webhook:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Verification endpoint required by Meta/WhatsApp during setup
const verifyWhatsAppWebhook = (req, res) => {
    const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'nova_verify_token';

    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token) {
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
            console.log('✅ WhatsApp Webhook verified successfully.');
            res.status(200).send(challenge);
        } else {
            res.sendStatus(403);
        }
    } else {
        res.sendStatus(400);
    }
};

module.exports = {
    handleWhatsAppWebhook,
    verifyWhatsAppWebhook
};
          
