const axios = require('axios');
require('dotenv').config();

const endpoint = process.env.SPARQL_ENDPOINT;
console.log({ endpoint });

const queryOntology = async (query) => {
    try {
        const url = `${endpoint}`;
        console.log({ url });
        console.log({ query });
        const resp = await axios.post(url, { query }, { headers: { 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', accept: 'application/sparql-results+json,*/*;q=0.9' } });
        // console.log(resp.data);
        return resp.data.results.bindings;
    } catch (err) {
        console.error('SPARQL Query Error:', err);
        return [];
    }
}


module.exports = { queryOntology };