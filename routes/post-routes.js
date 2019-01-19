const express = require('express')
const Pregunta = require('../models/Pregunta')

const preguntaRoutes = express.Router();

preguntaRoutes.get('/pregunta', (req, res) => {
    res.render('post/submit-question')
})

preguntaRoutes.post('/preguntaEnviada', (req,res, next)=>{
    
    const {titulo} = req.body;
    const newPregunta = new Pregunta ({titulo}); 
    newPregunta.save()
    .then((Pregunta) =>{
        res.redirect(301,'/')
    } )
   .catch((error)=>{
       console.log("esto es un error")
   })

})


module.exports = preguntaRoutes