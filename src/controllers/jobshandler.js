import httpToMongo from '../services/httpTransformJobToMongo.js'

async function getJobs(body){
    console.log(body);
    const userID = body.id
    console.log(userID);
    const plainList = await httpToMongo.find(userID) //GENERAR UN TDD QUE ENVIE UN GET Y VERIFIQUE LA LISTA DEVUELTA
    return plainList;
}

function findJob(req,res){
    const id = req.params.id
    const response = httpToMongo.findById(id,res)
    return response
}
async function createJob(body,res){
    console.log('este es el body');
    console.log(body);
    const response = await httpToMongo.createJob(body)
    console.log(response);
    return response
    // return response.data
}

function modifyJob(req,res){
    const id = req.params.id
    const body = req.body
    httpToMongo.findAndModif(id, body,res)        ///COMO MANEJO LOS ERRORESSSS  
}

function findAndDel(req,res){
    const id = req.query.id
    const userID = req.query.userID
    httpToMongo.findAndDel(userID,id,res)
}

export default {
    getJobs,findJob,createJob,modifyJob,findAndDel
}