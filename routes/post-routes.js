const express = require('express')
const Pregunta = require('../models/Pregunta')
const ensureLogin = require('connect-ensure-login')

const preguntaRoutes = express.Router();

preguntaRoutes.get('/pregunta', (req, res) => {
    res.render('post/submit-question')
})

preguntaRoutes.post('/preguntaEnviada', ensureLogin.ensureLoggedIn(),(req,res, next)=>{
    
    const {titulo} = req.body;
    const {descripcion} = req.body;
    const newPregunta = new Pregunta ({titulo, descripcion}); 
    newPregunta.save()
    .then((Pregunta) =>{
        res.redirect(301,'/')
    } )
   .catch((error)=>{
       console.log("esto es un error")
   })

})

preguntaRoutes.post('/buscar', (req, res)=>{
    let tituloPregunta = req.body.titulo;
    Pregunta.find({title: {$regex: tituloPregunta, $options: 'i'}})
    .then((pregunta)=>{
      res.redirect(301, `/pregunta/${pregunta._id}`)
    })
    .catch(err=>{
      console.log(err);
    })
   })


module.exports = preguntaRoutes