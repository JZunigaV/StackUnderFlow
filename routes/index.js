const express = require('express');
const Pregunta = require('../models/Pregunta')
const router  = express.Router();

/* GET home page */
router.get('/', (req, res)=>{
  Pregunta.find()
    .then(preguntas =>{
      res.render('index', {preguntas})
    })
    .catch(err =>{
      console.log(err)
    })
})
module.exports = router;
