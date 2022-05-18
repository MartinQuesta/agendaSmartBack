import { expect } from 'chai'
import { assert } from 'chai'
import axios from 'axios' 
import AgendaSmartDemo from '../src/index.js'

const newTarea = {id:0, desc:'Tarea4Test', prioridad:1, palabraClave:'Testing', motiv:'true', atrasada:'1',cantRep:'1'}
const listaTareasDiarias = [{id:2, desc:'TestDiaria', prioridad:1, palabraClave:'TareaX', motiv:'false', atrasada:0, cantRep:0},{id:1, desc:'TareaXDiaria', prioridad:5,  palabraClave:'TareaX', motiv:'false', atrasada:0, cantRep:1}]
const listaTareasSemanales = [{id:3, desc:'Test Semanal', prioridad:1, palabraClave:'TareaX', motiv:'false', atrasada:0, cantRep:2},{id:3, desc:'TareaXSemanl', prioridad:3,  palabraClave:'Semanl', motiv:'true', atrasada:0, cantRep:3}]


//import AgendaSmartDemo from '../src/index.js'

describe('Server Responses', () => {
    describe('#serverStatus()', () => {
        it('llama a la web ok', async () => {
            const response = await axios.get('http://localhost:3500/')        
            expect(response.status).to.equal(200) //200 OK
        })
    })
    describe('#CRUD Tareas Diarias',() => {
        it('get Tareas Diarias', async () => {
            const response = await axios.get('http://localhost:3500/api/gettareas/diarias')
            expect(response.status).to.equal(200) //200 OK
        })
        it('Post Tareas Diarias', async () => {
            const response = await axios.post('http://localhost:3500/api/settareas/diarias',newTarea)
            expect(response.status).to.equal(200) //200 OK
        })
        it('Post Response Type', async () => {
            const response = await axios.post('http://localhost:3500/api/settareas/diarias',newTarea)
            console.log(response.body);
            expect(response.body).to.have.property('id') //200 OK
        })
    })
    describe('#CRUD Tareas Semanales',() => {
        it('get Tareas Semanales', async () => {
            const response = await axios.get('http://localhost:3500/api/gettareas/semanales')
            expect(response.status).to.equal(200) //200 OK
        })
    })
    describe('#getMethods()', () => {
        it('get Tareas Ordenadas', async () => {
            const response = await axios.get('http://localhost:3500/api/gettareas/ordenadas')
            expect(response.status).to.equal(200) //200 OK
        })
    })
})