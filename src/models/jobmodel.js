import mongoose from 'mongoose'
const Schema = mongoose.Schema

const jobschema = new Schema({
    title: String,
    description: String,
    keyWords: [String],
    date: { type:Date, default: Date.now },
    priority: {
        type: Number,
        min: [0, '1 is Urgent Priority'],       //https://mongoosejs.com/docs/validation.html //Validators mongoose
        max: [6, '5 is Lowest Priority']
    },
    motiv: Boolean,
    meta: {
        completed: Boolean,
        isDelayed: Boolean,
        isDaily: Boolean,
        countRep: Number
    }
  //{id:1, desc:'jobXDiaria', prioridad:2,  palabraClave:'jobX', motiv:'false', atrasada:0, cantRep:1, esDia: 'true'},
})

const jobX = mongoose.model('job', jobschema)

//console.log(job1); // 100% match in create new

//console.log(job1); armar Test AQUIIIIIIII
//console.log(job1.keyWords[1]);
//console.log(job1.date);
//const varJob =
//console.log(testJob());
//module.exports = job
function testJob (){
    const jobX = mongoose.model('job', jobschema)
    return createTestJob(jobX)
}
function createTestJob(){
    const job1 = new jobX({
        title: 'jobTest1',
        description: 'Esto es una descripcion',
        keyWords: ['job','Test'],
        date: { type:Date, default: Date.now },
        priority: 2,
        motiv: true,
        meta: {
            completed: false,
            isDelayed: false,
            isDaily: true,
            countRep: 2
        }
      //{id:1, desc:'jobXDiaria', prioridad:2,  palabraClave:'jobX', motiv:'false', atrasada:0, cantRep:1, esDia: 'true'},
    })
    return job1
}

export default {
    jobX,testJob,createTestJob
}