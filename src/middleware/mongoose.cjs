//import mongoose from 'mongoose'
const mongoose = require('mongoose');

//import {config} from 'dotenv'
//require('dotenv').config();     //Variable de entonrno

const dbconnect = (req, res, next) => {
    //const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.DBNAME}.r5i8f.mongodb.net/?retryWrites=true&w=majority`;
    const uri = `mongodb+srv://admindb:4dm1n@agendacluster0.r5i8f.mongodb.net/?retryWrites=true&w=majority`;
    //mongodb+srv://admindb:<password>@agendacluster0.r5i8f.mongodb.net/?retryWrites=true&w=majority
    mongoose.connect(uri, { useNewUrlparser: true, useUnifiedTopology: true })
        .then(() => console.log('DB OK'))
        .catch(e => console.log(e));

    next();
}

//export default dbconnect
module.exports = dbconnect;