const mongoose = require('mongoose')
const Schema = mongoose.Schema

const preguntaSchema = new Schema({
    titulo: String,
    descripcion: String
}, 

{
  timestamps: {
    createdAt: "created_at", updatedAt: "updated_at"
  }
})

const Pregunta = mongoose.model('Pregunta', preguntaSchema)

module.exports = Pregunta;
