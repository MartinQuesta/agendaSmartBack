import transformhttp from '../services/httpTransformUserToMongo.js'

async function getUser(){
    const plainList = await transformhttp.find() //GENERAR UN TDD QUE ENVIE UN GET Y VERIFIQUE LA LISTA DEVUELTA
    return plainList;
}

function findUser(req,res){
    const id = req.params.id
    const response = transformhttp.findById(id,res)
    return response
}
async function createUser(body,res){
    const response = res
    console.log('este es el body');
    console.log(body);
    await transformhttp.createUser(body).then(user => response.json(user))
    console.log(response);
    return response
    // return response.data
}

function modifyUser(req,res){
    const id = req.params.id
    const body = req.body
    transformhttp.findAndModif(id, body,res)        ///COMO MANEJO LOS ERRORESSSS  
}

function findAndDel(req,res){
    const id = req.params.id
    transformhttp.findAndDel(id,res)
}

export default {
    getUser,findUser,createUser,modifyUser,findAndDel
}