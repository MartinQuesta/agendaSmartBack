//import mongoose from 'mongoose'
const mongoose = require('mongoose');

const dbconnect = (req, res, next) => {
    const uri = `mongodb+srv://admindb:4dm1n@agendacluster0.r5i8f.mongodb.net/?retryWrites=true&w=majority`;
    mongoose.connect(uri, { useNewUrlparser: true, useUnifiedTopology: true })
        .then(() => console.log('DB OK'))
        .catch(e => console.log(e));

    next();
}

module.exports = dbconnect;