const { GoogleGenAI } = require('@google/genai');

const apiKey = process.env.GEMINI_API_KEY;

let aiClient = null;

if (apiKey) {
    aiClient = new GoogleGenAI({ apiKey });
    console.log('✅ Gemini AI client initialized.');
} else {
    console.warn('⚠️ GEMINI_API_KEY not found. AI responses will be mocked until keys are added.');
}

module.exports = aiClient;

