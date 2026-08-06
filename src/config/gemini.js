const { GoogleGenAI } = require('@google/genai');

// Automatically picks up GEMINI_API_KEY from process.env
const aiClient = new GoogleGenAI(); 

console.log('✅ Gemini AI client initialized.');

module.exports = aiClient;
