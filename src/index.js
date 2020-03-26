const express = require('express');
const app = express();
const routes = require('./routes');
const mongoose = require('mongoose');
const connectionString = require('./config/databaseConfig').connectionString;
const cors = require('cors');

const port = process.env.APP_PORT | 3333;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(cors);
app.use(express.json());
app.use(routes);

console.log(`Serving application at 127.0.0.1:${port}`);

app.listen(port);