const { Router } = require('express');
const DevController = require('../controllers/DevController');

const routes = new Router();

routes.get('/devs', DevController.index);

module.exports = routes;