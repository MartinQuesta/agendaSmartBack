import mongoose from 'mongoose'
import Job from './job-model.js'
const Schema = mongoose.Schema

const smartListschema = new Schema({
    title: String,
    date: { type:Date, default: Date.now },
    listType: ['DayList','WeekList'],
    data: [], //va empty o con referencia a Job
    userData: {
        id: Number,
        userName: String
    }
  //{id:1, desc:'TareaXDiaria', prioridad:2,  palabraClave:'TareaX', motiv:'false', atrasada:0, cantRep:1, esDia: 'true'},
})


const smartList = mongoose.model('smartList', smartListschema)

console.log(testList()); //Test New List !!!!!!!!!!

function testList() {
    return createTestList()
}

function createTestList(){
    const smartTestList = mongoose.model('smartTestList', smartListschema)
    const testList = new smartTestList({
        title: 'tittle',
        date: {default: Date.now },
        listType: ['DayList'],
        data: [testJob()],
        userData: {
            id: 2,
            userName: 'JuanT'
        }
    })
    return testList
}

function testJob(){
    return Job.testJob()
}
export default{
    smartList,createTestList
}
//module.exports = smartList
