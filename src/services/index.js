const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const app = express();
const connectDB = require('../database/connections');
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));

connectDB();

app.use(require('../routes/routes'));

app.listen(process.env.PORT || 3000, function(){
    console.log(process.env.PORT + 3000)
});