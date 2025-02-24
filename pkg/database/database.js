const mongoose = require ('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path : `${__dirname}/../../config.env`});

console.log(process.env);

const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
console.log(DB);


exports.db = async()=> {
    try {
        await mongoose.connect(DB);
        
        console.log('Connected to database');
    } catch(err) {
       console.log(err.message);
    }
};