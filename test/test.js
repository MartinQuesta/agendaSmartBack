import { expect } from 'chai'
import { assert } from 'chai'
import axios from 'axios' 
import transformJobhttp from '../src/services/httpTransformJobToMongo.js'
import Jobmodel from '../src/models/job-model.js'
import Listmodel from '../src/models/smartList-model.js'

//import AgendaSmartDemo from '../src/app.js'

//const newTarea = {id:0, desc:'Tarea4Test', prioridad:1, palabraClave:'Testing', motiv:'true', atrasada:'1',cantRep:'1'}
//const listaTareasDiarias = [{id:2, desc:'TestDiaria', prioridad:1, palabraClave:'TareaX', motiv:'false', atrasada:0, cantRep:0},{id:1, desc:'TareaXDiaria', prioridad:5,  palabraClave:'TareaX', motiv:'false', atrasada:0, cantRep:1}]
//const listaTareasSemanales = [{id:3, desc:'Test Semanal', prioridad:1, palabraClave:'TareaX', motiv:'false', atrasada:0, cantRep:2},{id:3, desc:'TareaXSemanl', prioridad:3,  palabraClave:'Semanl', motiv:'true', atrasada:0, cantRep:3}]

const job = Jobmodel.createTestJob()    
const list = Listmodel.createTestList()

let ObjectId = ''               //object ID para test
const PORT = 3500                 // Server Listening PORT
const LOCALHOST = `http://127.0.0.1:${PORT}`   // URL of local serever

//import AgendaSmartDemo from '../src/index.js'
// function keepId(id){
//     ObjectId = id
//     console.log(`el id es ${ObjectId}`);
// }
describe('Server Job Responses', () => {
    describe('#serverStatus()', () => {
        it('llama a la web ok', async () => {  
            const response = await axios.get(`${LOCALHOST}/`)        
            expect(response.status).to.equal(200) //200 OK
        })
    })
    describe('#CRUD Tareas Diarias', () => {

        it('get Tareas Diarias', async () => {
            const response = await axios.get(`${LOCALHOST}/api/tareas/`)
            expect(response.status).to.equal(200) //200 OK
        })
        it('Post Tareas Diarias', async () => {
            const response = await axios.post(`${LOCALHOST}/api/tareas/`,job)
            //keepId(response.data.data._id)
            ObjectId = response.data.data._id
            expect(response.status).to.equal(200) //200 OK
            expect(response.data.data).to.have.property('_id') //ID OK
            expect(response.data.data).to.have.property('motiv') //ID OK
        })
        it('Patch Response Type', async () => {
            const reqBody = {  
                            "title": "jobTestTEST TEST 3",
                            "description": "Esto es otro COSA mas Modificada "
                            }
            const response = await axios.patch(`${LOCALHOST}/api/tareas/${ObjectId}`,reqBody)
            expect(response.data.status).to.deep.equal('Updated') //200 OK
        })
        it('Delete Response Type', async () => {
            const response = await axios.delete(`${LOCALHOST}/api/tareas/${ObjectId}`,job)
            expect(response.data.status).to.include('deleted') //200 OK
        })
    })
    // describe('#CRUD Tareas Semanales',() => {
    //     it('get Tareas Semanales', async () => {
    //         const response = await axios.get(`${LOCALHOST}/api/lists/`)
    //         expect(response.status).to.equal(200) //200 OK
    //     })
    // })
    // describe('#getMethods()', () => {
    //     it('get Tareas Ordenadas', async () => {
    //         const response = await axios.get(`${LOCALHOST}/api/lists/`)
    //         expect(response.status).to.equal(200) //200 OK
    //     })
    // })
})

describe('Server Lists Responses', () => {
    describe('#CRUD Tareas Diarias', () => {
        it('get Lista ', async () => {
            const response = await axios.get(`${LOCALHOST}/api/lists/`)
            expect(response.status).to.equal(200) //200 OK
        })
        it('Post Lista Diarias', async () => {
            const response = await axios.post(`${LOCALHOST}/api/lists/`,list)
            //keepId(response.data.data._id)
            ObjectId = response.data.data._id
            expect(response.status).to.equal(200) //200 OK
            expect(response.data.data).to.have.property('_id') //ID OK
            expect(response.data.data).to.have.property('motiv') //ID OK
        })
        it('Patch Lista Type', async () => {
            const reqBody = {  
                            "title": "jobTestTEST TEST 3",
                            "description": "Esto es otro COSA mas Modificada "
                            }
            const response = await axios.patch(`${LOCALHOST}/api/lists/${ObjectId}`,reqBody)
            expect(response.data.status).to.deep.equal('Updated') //200 OK
        })
        it('Delete Response Type', async () => {
            const response = await axios.delete(`${LOCALHOST}/api/lists/${ObjectId}`,list)
            expect(response.data.status).to.include('deleted') //200 OK
        })
    })
})