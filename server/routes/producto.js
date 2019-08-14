const express = require('express');

const Producto = require('../models/producto');

const app = express();

app.get('/', (req, res) => {
    res.json('Examen 1 Programación 4');
});

// Deberá hacer aquí el método get para producto (Valor 5 puntos)

app.get('/producto',(req,res)=>{
    Producto.find({},(err,producto)=>{
        if(err) return res.status(500).send({message:`Error al realizar la peticion`})
        if(!producto) return res.status(404).send({message: `No existen productos`})

        res.send(200,{producto})
    })
})

app.post('/producto', (req, res)=>{
    let body = req.body;

    let producto = new Producto({
        nombre: body.nombre,
        precio: body.precio,
        creado_En: body.creado_En,
    });
    producto.save( (err, productoDB) =>{
        if(err){
            res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok:true,
            producto: productoDB
        })
    });
})

module.exports = app;