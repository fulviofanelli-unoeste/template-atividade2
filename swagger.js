import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
        title: "API RESTful - Consulta Tabela FIPE",
    },
    host: 'localhost:5000',
}

const outputJson = "./swagger-output.json";
const routes = ['./server.js']

swaggerAutogen({openapi: '3.0.0'})(outputJson, routes, doc)
.then( async () => {
    await import('./server.js');
})