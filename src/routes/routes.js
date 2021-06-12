const routes = require('express').Router();
const Users = require('../models/Users')
const controller = require('../controller/controller')
const auth = require('../middleware/auth')
//API
routes.post('/api/users',controller.create);
routes.get('/userss',auth,controller.find);
routes.put('/api/users/:id', auth,controller.update);
routes.delete('/api/users/:id',controller.delete);
routes.get('/users/:email',controller.show);
routes.post('/auth',controller.findOne)
routes.get('/user/:email',controller.findOne);

module.exports = routes;

