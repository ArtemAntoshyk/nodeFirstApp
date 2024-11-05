const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Welcome");
        return;
    }
    if (req.url === '/about') {
        res.write("About us");
        return;
    }
    res.end(`
        <h1>Oops...</h1>
        <a href="/">Back</a>
    `);
})

server.listen(5000);