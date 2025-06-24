const axios = require('axios');
require('dotenv').config();

async function askMistral(prompt) {
    const res = await axios.post(`${process.env.OLLAMA_URL}/api/generate`, {
        model: 'mistral',
        prompt,
        stream: false
    });

    return res.data.response;
}

module.exports = { askMistral };