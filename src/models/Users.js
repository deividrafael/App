const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require('mongoose');
require('dotenv').config();

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, lowercase: true, unique: true},
    password: {type: String, required: true},
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
    createdAt: {type: Date, default: Date.now},
})

userSchema.pre("save", async function hashPassword(next) {
    if (!this.isModified("password")) next();
  
    this.password = await bcrypt.hash(this.password, 8);
  });
  
  userSchema.methods = {
    compareHash(hash) {
      return bcrypt.compare(hash, this.password);
    },
  
    generateToken() {
      return jwt.sign({ id: this.id }, process.env.TOKEN_SECRET, {
        expiresIn: 86400
      });
    }
  };

module.exports = mongoose.model('Users', userSchema);