import jobmodel from "../models/jobmodel.js";

async function find(res){
    await jobmodel.jobX.find().then(data => {
        res.json(data)
    })
    .catch(err => res.status(500)
    .json('err'));
}
async function internalFind(){
    const response = await jobmodel.jobX.find().then(data => {
        console.log('ESTOY ACA??');
        return data
    })
    .catch(err => console.log(err));
    return response
}

function findById(id,res){
    jobmodel.jobX.findById(id)
    .then(data => {
        if (!data) res.status(404).json({ error: 'Not found 404', message: `Job with id "${id} not found"` })
        res.json(data); 
    })
    .catch(err => res.status(500).json({ error: 'Not found 500', message: `Job aca esta el error aca esta el error with id "${id} not found" and error: ${err}` }))
    //return res        /////PORQUE DEVUELVE IGUAL 
}

function findAndModif(id, body, res){
    jobmodel.jobX.findByIdAndUpdate(id, body)
        .then(data => {
            if (!data) res.status(404).json({ error: 'Not found', message: `Job with id "${id} not found"` });
            res.status(201).json({ status: 'Updated', message: `Job with id "${id} updated"` });
        })
        .catch(err => res.status(500).json(err));
}

function findAndDel(id, res){
    console.log(`Buscando ID: ${id}`);
    jobmodel.jobX.findByIdAndDelete(id)
    .then((data) => {
        if (!data) {
            res.status(404).json({ error: 'Not found', message: `jobmodel.JobX with id "${id} not found"` })
            }else{
             res.json({ status: `${id} deleted` })
             console.log('Objeto BORRADO');
            }
    })          ////CHEQUEAR DELETET ENE EL MENSJ O AL MENOS UN 200 ''    "status": "6286f3e96fff39f564ed9e11 deleted"    ''
    .catch(error => res.status(500).json(error));

}

function newJob(body){
    const job = new jobmodel.jobX({     ///NECESITO DATOS VALIDOS >> SERVICE
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
            countRep: body.meta.countRep
        }
        ///////
    });
    return job
}

export default{
    find,findById,newJob,findAndModif,findAndDel,internalFind
}