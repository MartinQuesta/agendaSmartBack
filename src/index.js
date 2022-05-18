import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'
import controllers from './controllers/listaTools.js'
//const express = require('express')
const app = express()
const port = 3500

app.use(cors())
app.use(bodyparser.json())

const listaTareasDiarias = [
  {id:3, desc:'Una Tarea Diaria', prioridad:1, palabraClave:'TareaX', motiv:'false', atrasada:0, cantRep:0, esDia: 'true'},
  {id:1, desc:'TareaXDiaria', prioridad:2,  palabraClave:'TareaX', motiv:'false', atrasada:0, cantRep:1, esDia: 'true'},
  {id:5, desc:'TareaXDiaria', prioridad:2,  palabraClave:'TareaX', motiv:'false', atrasada:0, cantRep:1, esDia: 'true'},
  {id:2, desc:'TareaXDiaria', prioridad:1,  palabraClave:'TareaX', motiv:'false', atrasada:0, cantRep:1, esDia: 'true'},
]
const listaTareasSemanales = [{id:2, desc:'Una Tarea Semanal', prioridad:1, palabraClave:'TareaX', motiv:'false', atrasada:0, cantRep:2},{id:3, desc:'TareaXSemanl', prioridad:3,  palabraClave:'Semanl', motiv:'true', atrasada:0, cantRep:3}]



app.get('/', (req, res) => {
  res.send('Hello World 2022!')
}),

app.get('/api/gettareas/diarias', (req, res) => {
  console.log('estoy aca Diarias');
  res.json(listaTareasDiarias)
}),
app.post('/api/settareas/diarias', (req, res) => {
  listaTareasDiarias.push(req.body)
  res.json(req.body)
}),
app.get('/api/gettareas/semanales', (req, res) => {
  console.log('estoy aca Semanales');
  res.json(listaTareasSemanales)
}),
app.post('/api/settareas/semanales', (req, res) => {
  listaTareasSemanales.push(req.body)
  res.json(req.body)
}),
app.post('/api/gettareas/ordenadas', (req, res) => {
  const nuevaLista = controllers.ordenarTareas(req.body)
  console.log(`lista en salida POST:${nuevaLista}`);
  res.json(nuevaLista)
}),

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default {
      ordenoTareas: (lista)=> {
        return controllers.orderDiarias(lista)
      }
}