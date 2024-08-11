const mongoose = require('mongoose');

const connectDatabase = async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/crud')
        .then(()=>{
            console.log('Database connected successfully');
        }).catch(err=>{
            console.log('Database connection error:',err);
        })
    } catch (error) {
        console.log(error);
        
    }
};

module.exports = connectDatabase;