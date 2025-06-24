# LLM RAG with Ontology

An API that retrieves ontology contextual data and prompt the LLM for an answer.

## Requirements
- Node.js 22.14.0 + yarn

1. Install Ollama - Mistral LLM
    - https://ollama.com/download
    - `ollama pull mistral`
1. Install API
    - `yarn install`

## How to run on Windows
```
C:> ollama run mistral
C:> cd ontology-llm-rag
C:> node index.js
```

## How to test
- Send a POST request to http://localhost:3000/ask with JSON body `{"question":"Ask me something."}`

