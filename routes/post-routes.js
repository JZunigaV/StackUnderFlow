const express = require('express')
const Pregunta = require('../models/Pregunta')

const routes = express.Router();

routes.get('/pregunta', (req, res) => {
    res.render('post/submit-question')
})

routes.post('/preguntaEnviada', (req, res, next) => {
    const {
        titulo
    } = req.body;
    const newPregunta = new Pregunta({
        titulo
    });
    newPregunta.save()
        .then((Pregunta) => {
            res.redirect(301, '/')
        })
        .catch((error) => {
            console.log("esto es un error")
        })
});


//Rutas de respuesta
//Editar preguntas
routes.get('/pregunta/edit', (req, res) => {
    Pregunta.findOne({
            _id: req.query.book_id
        })
        .then((pregunta) => {
            res.render('pregunta-edit', {
                descripcion
            })
        })
        .catch(err => {
            console.log(err)
        })
});

//detalle pregunta
routes.get('/preguntas/:id', (req, res) => {
    let preguntaId = req.params.id
    Pregunta.findOne({
            '_id': preguntaId
        })
        .populate('user')
        .then((pregunta) => {
            res.render('pregunta-detalle', {
                titulo,
                descripcion
            })
        })
        .catch((err) => {
            console.log(err);
        })
});

//editar post respuesta
routes.post('/pregunta/edit', (req, res, next) => {
    const {
        titulo,
        descripcion
    } = req.body;
    Books.updateOne({
            _id: req.query.book_id
        }, {
            $set: {
                titulo,
                descripcion
            }
        })
        .then(pregunta => {
            res.redirect('/preguntas');
        })
        .catch((error) => {
            console.log(error);
        })
});

//Editar preguntas
routes.get('/pregunta/edit', (req, res) => {
    Pregunta.findOne({
            _id: req.query.book_id
        })
        .then((pregunta) => {
            res.render('pregunta-edit', {
                titulo,
                descripcion
            })
        })
        .catch(err => {
            console.log(err)
        })
})




module.exports = routes