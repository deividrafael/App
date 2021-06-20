const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
    email: {type: String, required: true, lowercase: true, unique: true},
    name: {type: String, required: true},
    cpf: {type: String},
    tel:{type: String},
    cns:{type: String},
    dateNasc:{type: String},
    gender:{type: String},
    temperature:{type: String},
    ox:{type: String},
    pa:{type: String},
    description:{type: String},
    type:{type: String}, 
    filatype:{type:String},
    createdAt: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Paciente', pacienteSchema);