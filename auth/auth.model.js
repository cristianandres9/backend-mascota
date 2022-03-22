const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        //borra espacios en blanco
        trim: true
    }
},{
    //guarda en la coleccion la fecha de creacion y actualizacion
    timestamps: true
});

module.exports = userSchema;