const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, lowercase: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
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
      return jwt.sign({ id: this.id }, "secret", {
        expiresIn: 86400
      });
    }
  };

module.exports = mongoose.model('Users', userSchema);