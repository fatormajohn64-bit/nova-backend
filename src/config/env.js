// Validates that critical environment keys exist
function validateEnv() {
    const requiredKeys = ['SUPABASE_URL', 'SUPABASE_SERVICE_KEY', 'GEMINI_API_KEY'];
    const missing = requiredKeys.filter(key => !process.env[key]);

    if (missing.length > 0) {
        console.warn(`⚠️ Warning: Missing environment variables: ${missing.join(', ')}`);
        console.warn(`Tip: You can deploy to Render first and add these keys in your dashboard later!`);
    } else {
        console.log(`✅ All core environment variables are present.`);
    }
}

module.exports = { validateEnv };

