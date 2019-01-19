const express = require('express')
const Pregunta = require('../models/Pregunta')

const routes = express.Router();

routes.get('/pregunta', (req, res) => {
    res.render('post/submit-question')
})

routes.post('/preguntaEnviada', (req,res, next)=>{
    const {titulo} = req.body;
    const newPregunta = new Pregunta ({titulo}); 
    newPregunta.save()
    .then((Pregunta) =>{
        res.redirect(301,'/')
    } )
   .catch((error)=>{
       console.log("esto es un error")
   })
});


//Rutas de respuesta
// routes.get("/respuesta", (req,res) => {
//     render("")
// });

// routes.post("/respuestas", (req,res) => {

// })









module.exports = routes