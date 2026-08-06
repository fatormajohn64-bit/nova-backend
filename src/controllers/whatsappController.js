const express = require('express');
const router = express.Router();
const { handleWhatsAppWebhook, verifyWhatsAppWebhook } = require('../controllers/whatsappController');

// WhatsApp verification GET route
router.get('/whatsapp', verifyWhatsAppWebhook);

// WhatsApp incoming message POST route
router.post('/whatsapp', handleWhatsAppWebhook);

module.exports = router;

