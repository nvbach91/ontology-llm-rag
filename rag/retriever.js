const { queryOntology } = require('./sparqlClient');

const retrieveContext = async (question) => {
    const keywords = question.match(/\b\w+\b/g).slice(0, 5); // naive
    const filter = keywords.map(k => `'${k}'`).join(', ');

    const query = `
        SELECT ?s ?p ?o WHERE {
            ?s ?p ?o .
            FILTER(STR(?o) IN (${filter}))
        }
        LIMIT 10
    `;

    const results = await queryOntology(query.replace(/[\r\n]+/g, ' ').trim());
    const context = results.map((r) => `${r.s.value} ${r.p.value} ${r.o.value}`).join('\n');
    console.log({ context });
    return context;
}

module.exports = { retrieveContext };