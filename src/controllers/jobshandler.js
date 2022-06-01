import transformhttp from '../services/transformJobhttp.js'

function getJob(res){
    const plainList = transformhttp.find(res) //GENERAR UN TDD QUE ENVIE UN GET Y VERIFIQUE LA LISTA DEVUELTA
    return plainList;
}

function findJob(req,res){
    const id = req.params.id
    return transformhttp.findById(id,res)
}

async function createJob(req,res){
  //console.log(req.body);              //the body is OK??
    const job = transformhttp.newJob(req.body)       //I kept the body
    console.log('AQUI CONROLLER');
    console.log(req.body);
  //console.log(job);                 // model its OK??
    try {
        const jobGuardado = await job.save();
        console.log('jobGuardado');
        console.log(jobGuardado);
        res.status(200).json({
            data: jobGuardado
        })
    } catch (error) {
        res.status(400).json({ error })
    }
    
}

function modifyJob(req,res){
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
    getJob,findJob,createJob,modifyJob,findAndDel
}