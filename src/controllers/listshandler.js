import transformhttp from '../services/httpTransformListToMongo.js'

function getList(res){
    transformhttp.createList(res) //GENERAR UN TDD QUE ENVIE UN GET Y VERIFIQUE LA LISTA DEVUELTA
}

function findList(req,res){
    const id = req.params.id
    //console.log(id); ///LLEGA EL ID ACA TDD!!!!!!!!!!!!!
    return transformhttp.findById(id,res)
}

async function createList(req,res){
  //console.log(req.body);              //the body is OK??
    const list = transformhttp.newList(req.body)       //I kept the body
  //console.log(List);                 // model its OK??
    try {
        const listGuardada = await list.save();
        res.status(200).json({
            data: listGuardada
        })
    } catch (error) {
        res.status(400).json({ error })
    }  
}

function modifyList(req,res){
    const id = req.params.id
    const body = req.body
    transformhttp.findAndModif(id, body,res)        ///COMO MANEJO LOS ERRORESSSS  
}

function findAndDel(req,res){
    const id = req.params.id
    console.log('AQUIiiiiiiiii');
    transformhttp.findAndDel(id,res)
    
}

export default {
    getList,findList,createList,modifyList,findAndDel
}