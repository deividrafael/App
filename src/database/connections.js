const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        //String de conexão MongoDB
        const con = await mongoose.connect(process.env.DB_CONN,{
            useNewUrlParser:true, 
            useUnifiedTopology: true
        })

        console.log(`MongoDb conectado: ${con.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);        
    }
}

module.exports = connectDB