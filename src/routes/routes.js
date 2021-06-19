const routes = require('express').Router();
const Users = require('../models/Users')
const controller = require('../controller/controller')
const auth = require('../middleware/auth')
const Hospcontroller = require('../controller/Hospcontroller')
const Pacientecontroller = require('../controller/Pacientecontroller')

//API
routes.post('/api/users',controller.create);
routes.get('/users',controller.find);
routes.put('/api/users/:id', controller.update);
routes.delete('/api/users/:id',controller.delete);
routes.get('/users/:email',controller.show);
routes.post('/auth',controller.findOne)
routes.get('/user/:email',controller.findOne);

//HOSPITAL

routes.post('/api/hospital',Hospcontroller.create);
routes.get('/api/hospital',Hospcontroller.find);
routes.get('/api/hospital/:email',Hospcontroller.show);
routes.delete('/api/hospital/:id',Hospcontroller.delete);
routes.put('/api/hospital/:id',Hospcontroller.update);


//PACIENTE HOSPITAL
routes.post('/api/paciente',Pacientecontroller.create);
routes.get('/api/paciente',Pacientecontroller.find);
routes.get('/api/paciente/:email',Pacientecontroller.show);
routes.delete('/api/paciente/:id',Pacientecontroller.delete);
routes.put('/api/paciente/:id',Pacientecontroller.update);
routes.get('/paciente/:filatype',Pacientecontroller.findfila);

module.exports = routes;

