const routes = require('express').Router();
const Users = require('../models/Users')
const controller = require('../controller/controller')

//API
routes.post('/api/users',controller.create);
routes.get('/api/users',controller.find);
routes.put('/api/users/:id',controller.update);
routes.delete('/api/users/:id',controller.delete);
routes.get('/api/users/:id',controller.show);
routes.post('/auth',controller.findOne)
routes.get('/users',controller.find);

module.exports = routes;

