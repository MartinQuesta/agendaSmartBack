import express from 'express'       //Initializing Express 1
import bodyparser from 'body-parser'
import cors from 'cors'
import controllers from './controllers/listaTools.js'
import mongoose from 'mongoose'
import mongoDB from './middleware/mongoose.cjs'
import Jobs from './routes/job.js'
import Lists from './routes/userList.js'
//import {config} from 'dotenv'
//const express = require('express')




//const config = dotenv.config()
import './models/smartListmodel.js';   //Model de lista Smart
import './models/jobmodel.js';     //Model de tarea

const app = express();     ////Initializing Express 2
const port = 3500;
//const Job = require('./routes/job.js')
//const mongoDBmiddleware = mongoDB.dbconnect();
const portEnv = process.env.PORT || 3500;
app.use(express.json({ extended: false }));

/*const mongoDBmiddleware = function (req,res,next){
  console.log('LOGGED');
  mongoDB.dbconnect()
  next()
}*/
app.use(cors());
app.use(bodyparser.json());
app.use(mongoDB);

const listaTareasDiarias = [
  {id:3, desc:'Una Tarea Diaria', prioridad:1, palabraClave:'TareaX', motiv:'false', atrasada:0, cantRep:0, esDia: 'true'},
  {id:1, desc:'TareaXDiaria', prioridad:2,  palabraClave:'TareaX', motiv:'false', atrasada:0, cantRep:1, esDia: 'true'},
  {id:5, desc:'TareaXDiaria', prioridad:2,  palabraClave:'TareaX', motiv:'false', atrasada:0, cantRep:1, esDia: 'true'},
  {id:2, desc:'TareaXDiaria', prioridad:1,  palabraClave:'TareaX', motiv:'false', atrasada:0, cantRep:1, esDia: 'true'},
]
const listaTareasSemanales = [{id:2, desc:'Una Tarea Semanal', prioridad:1, palabraClave:'TareaX', motiv:'false', atrasada:0, cantRep:2},{id:3, desc:'TareaXSemanl', prioridad:3,  palabraClave:'Semanl', motiv:'true', atrasada:0, cantRep:3}]



app.get('/', (req, res) => {
  res.send('Agenda Hyper Mega Super InteligentE 2022!')
})

app.use('/api/tareas', Jobs.Router)
app.use('/api/lists', Lists.Router)

app.use(function (req, res, next){
  next(createError(404))
})
/*
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
*/

app.listen(portEnv, () => {
  console.clear()
  console.log(`SmartAgenda app listening on port ${portEnv}`)
})

