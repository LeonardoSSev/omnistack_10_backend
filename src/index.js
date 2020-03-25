const express = require('express');
const app = express();
const routes = require('./routes');

const port = process.env.APP_PORT | 3000;

app.use(express.json());
app.use(routes);

console.log(`Serving application at 127.0.0.1:${port}`);

app.listen(port);