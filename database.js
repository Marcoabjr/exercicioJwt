const mongoose = require('mongoose');

const conectdb = async() => {
    try{
        await mongoose.connect('mongodb+srv://marcoabjr:369582@cluster0.rq1awus.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'      
        );
        console.log('Conectado do banco');
    } catch(error){
        console.error('Conexão com o mongo db não foi realizada com sucesso!!', error.message);
        process.exit(1);
    }
};

module.exports= conectdb;