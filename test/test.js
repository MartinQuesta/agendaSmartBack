import { expect } from 'chai'
import { assert } from 'chai'
import axios from 'axios' 
import transformJobhttp from '../src/services/httpTransformJobToMongo.js'
import Jobmodel from '../src/models/job-model.js'
import Listmodel from '../src/models/smartList-model.js'


const job = Jobmodel.createTestJob()    
const list = Listmodel.createTestList()
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjYyYmEwZTc0MzkxY2Q3ODFhMTI2ZDRhNCIsIm5vbWJyZSI6Ik5vbWJyZTEiLCJhcGVsbGlkbyI6ImFwZWxsaWRvMSIsImVkYWQiOjIwLCJlbWFpbCI6InRlc1RJTkdAbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCQyMmlsQ25PVkp5QmV2UkZyZ1RYTkJlQmZLdnJQMW9kdnZ6UDcvZXpGM3MyTGNxbXVtMzVHRyIsInJvbCI6IlVTRVIiLCJ0b2tlbiI6InRva2VuIiwiX192IjowfSwiaWF0IjoxNjU2MzYwNjM2LCJleHAiOjE2NTY1MzM0MzZ9.MxRI6cx6aogJodvtmaHmQj_NAthSViVXCKITukQCakU'
let ObjectId = ''               //object ID para test
const PORT = 3500                 // Server Listening PORT
const LOCALHOST = `http://127.0.0.1:${PORT}`   // URL of local serever


describe('Server Job Responses', () => {
    describe('#serverStatus()', () => {
        it('llama a la web ok', async () => {  
            // const response = await axios.get(`${LOCALHOST}/`)        
            const response = await axios.get(`http://127.0.0.1:3500/`)       
            expect(response.status).to.equal(200) //200 OK
        })
    })
     describe('#CRUD Tareas Diarias', () => {

        it('get Tareas Diarias', async () => {

            const response = await axios.get(`${LOCALHOST}/api/tareas/job_Test`,{ 
                'headers': { 'x-access-token': token } })
            expect(response.status).to.equal(200) //200 OK
        })
       it('Get Statistic', async () => {
            // const response = await axios.post(`${LOCALHOST}/api/tareas/`,job)
            //keepId(response.data.data._id)
            const response = await axios.get(`${LOCALHOST}/api/tareas/`,{ 
                'headers': { 'x-access-token': token } })
            expect(response.status).to.equal(200) //200 OK
            expect(response.data).to.have.property('qnty') //ID OK
            expect(response.data).to.have.property('earlyDate') //ID OK
            expect(response.data).to.have.property('completedJob') //ID OK
        })
        it('Login', async () => {
            const user = {email: "marketTest@mail.com", password: "123456"}

            const response = await axios.post(`${LOCALHOST}/login`, user)
            expect(response.data.usuario).to.have.property('email') //200 OK
        })
        it('Register', async () => {
            let response
            const user = {nombre:"Nombre1", apellido:"apellido1", edad: 20, email: "tesTING@mail.com", password: "123456", role:"ADMIN", token:'token'}
            try{
                response = await axios.post(`${LOCALHOST}/register`, user)
            }catch(err){
                response = err
            }
            expect(response.response.status).to.equal(400) //200 OK

        })
     })
})
