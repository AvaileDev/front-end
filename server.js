const express = require('express');
const next = require('next');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use((req, res, next) => {
        res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
        res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
        next();
    });

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, () => {
        console.log('> Ready on http://localhost:3000');
    });
});
