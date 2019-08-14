const mongoose = require('mongoose');


let Schema = mongoose.Schema;

let Producto = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    precio: {
        type: Number,
        required: [true, 'El precio es necesario']
    },
    creado_En:{
        type: Date,
        default: Date.now
    }
})
    


module.exports = mongoose.model('Producto', Producto);