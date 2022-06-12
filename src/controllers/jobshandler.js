import transformhttp from '../services/httpTransformJobToMongo.js'

async function getJob(){
    const plainList = await transformhttp.find() //GENERAR UN TDD QUE ENVIE UN GET Y VERIFIQUE LA LISTA DEVUELTA
    return plainList;
}

function findJob(req,res){
    const id = req.params.id
    const response = transformhttp.findById(id,res)
    return response
}
async function createJob(body,res){
    const response = res
    console.log('este es el body');
    console.log(body);
    await transformhttp.createJob(body).then(job => response.json(job))
    // const response = await transformhttp.createJob(body)
    console.log(response);
    return response
    // return response.data
}

function modifyJob(req,res){
    const id = req.params.id
    const body = req.body
    transformhttp.findAndModif(id, body,res)        ///COMO MANEJO LOS ERRORESSSS  
}

function findAndDel(req,res){
    const id = req.params.id
    transformhttp.findAndDel(id,res)
}

export default {
    getJob,findJob,createJob,modifyJob,findAndDel
}