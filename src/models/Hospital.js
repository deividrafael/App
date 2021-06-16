const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    email: {type: String, required: true, lowercase: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    contrato: {type: String, unique: true},
    tel:{type: String},
    createdAt: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Hospital', hospitalSchema);