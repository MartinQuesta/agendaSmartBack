import mongoose from 'mongoose'
const Schema = mongoose.Schema

const jobschema = new Schema({
    tittle: String,
    description: String,
    keyWords: [String],
    date: { type:Date, default: Date.now },
    priority: Number,
    motiv: Boolean,
    meta: {
        completed: Boolean,
        isDelayed: Boolean,
        isDaily: Boolean,
        countRep: Number,
        userData: {
            userID: String,
            userToken: String
        }
    }
})

const jobListInstance = (instance) => mongoose.model(`job_${instance}`, jobschema)

const jobDBCreator = (instancia,body) => {
    const jobDBModCreator = mongoose.model(`job_${instancia}`, jobschema)
    const job = new jobDBModCreator({     ///NECESITO DATOS VALIDOS >> SERVICE
        tittle: body.tittle,
        description: body.description,
        keyWords: body.keyWords,
        date: body.date,
        priority: body.priority,
        motiv: body.motiv,
        meta: {
            completed: body.meta.completed,
            isDelayed: body.meta.isDelayed,
            isDaily: body.meta.isDaily,
            countRep: body.meta.countRep,
            userData: {
                userID: body.meta.userData.userID,
                userToken: body.meta.userData.userToken
            }
        }
        ///////
    });
    return job
};

function createTestJob (){
    const jobSchema = mongoose.model('job_Test', jobschema)
    
    const job = new jobSchema({     ///NECESITO DATOS VALIDOS >> SERVICE
        tittle: 'jobTest1',
        description: 'Esto es una descripcion',
        keyWords: ['job','Test'],
        date: { type:Date, default: Date.now },
        priority: 2,
        motiv: true,
        meta: {
            completed: false,
            isDelayed: false,
            isDaily: true,
            countRep: 2,
            userData: {
                userID: 'job_Test',
                userToken: '1001'
            }
        }
    });
    // return createTestJob(jobSchema)
    return job
}
// function createTestJob(jobSchema){
//     const job = new jobSchema({     ///NECESITO DATOS VALIDOS >> SERVICE
//         tittle: 'jobTest1',
//         description: 'Esto es una descripcion',
//         keyWords: ['job','Test'],
//         date: { type:Date, default: Date.now },
//         priority: 2,
//         motiv: true,
//         meta: {
//             completed: false,
//             isDelayed: false,
//             isDaily: true,
//             countRep: 2,
//             userData: {
//                 userID: 'job_Test',
//                 userToken: '1001'
//             }
//         }
//     });
//     return job
// }

export default {
    createTestJob,jobDBCreator,jobListInstance
}