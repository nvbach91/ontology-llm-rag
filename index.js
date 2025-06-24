const express = require('express');
const { retrieveContext } = require('./rag/retriever');
const { askMistral } = require('./rag/mistralClient');

const app = express();
app.use(express.json());

app.post('/ask', async (req, res) => {
    const { question } = req.body;
    if (!question) return res.status(400).send('Missing question');

    const context = await retrieveContext(question);

    const finalPrompt = [
        'Answer the question using the following context:',
        '',
        '',
        context,
        '',
        '',
        `Question: ${question}`
    ];

    const answer = await askMistral(finalPrompt);

    return res.json({ answer });
});

app.listen(3000, () => console.log("API running on http://localhost:3000"));
