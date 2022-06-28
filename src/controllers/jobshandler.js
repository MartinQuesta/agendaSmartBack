import httpToMongo from '../services/httpTransformJobToMongo.js'

async function getJobs(id){
    const userID = id
    const plainList = await httpToMongo.find(userID) //GENERAR UN TDD QUE ENVIE UN GET Y VERIFIQUE LA LISTA DEVUELTA
    return plainList;
}

function findJob(req,res){
    const id = req.params.id
    const response = httpToMongo.findById(id,res)
    return response
}
async function createJob(body,res){
    const response = await httpToMongo.createJob(body)
    return response
}

function modifyJob(req,res){
    const id = req.params.id
    let userId = req.body.userId
    let body = {meta: {completed:true, isDelayed:false, isDaily: true, countRep:0, userData:{userID: userId,userToken:'0101'}}}
    httpToMongo.findAndModif(userId,id, body,res)        ///COMO MANEJO LOS ERRORESSSS  
}

function findAndDel(req,res){
    const id = req.query.id
    const userID = req.query.userID
    httpToMongo.findAndDel(userID,id,res)
}

export default {
    getJobs,findJob,createJob,modifyJob,findAndDel
}