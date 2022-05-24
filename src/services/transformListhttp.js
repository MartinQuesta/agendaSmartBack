import smartListmodel from "../models/smartListmodel.js";

async function find(res){
    await smartListmodel.smartList.find().then(data => res.json(data))
    .catch(err => res.status(500)
    .json('err'));
}

function findById(id,res){
    smartListmodel.smartList.findById(id)
    .then(data => {
        if (!data) res.status(404).json({ error: 'Not found 404', message: `Job with id "${id} not found"` })
        res.json(data); 
    })
    .catch(err => res.status(500).json({ error: 'Not found 500', message: `Job aca esta el error aca esta el error with id "${id} not found" and error: ${err}` }))
    //return res        /////PORQUE DEVUELVE IGUAL 
}

function newList(body){
    const job = new smartListmodel.smartList({
        title: body.title,
        date: body.date,
        listType: body.listType,
        data: [],
        userData: {
            id: body.userData.id,
            userName: body.userData.userName
        }
    });
    return job
}

function findAndModif(id, body, res){
    smartListmodel.smartList.findByIdAndUpdate(id, body)
        .then(data => {
            if (!data) res.status(404).json({ error: 'Not found', message: `Job with id "${id} not found"` });
            res.status(201).json({ status: 'Updated', message: `Job with id "${id} updated"` });
        })
        .catch(err => res.status(500).json(err));
}

function findAndDel(id, res){
    console.log(`Buscando ID: ${id}`);
    smartListmodel.smartList.findByIdAndDelete(id)
    .then((data) => {
        if (!data) {
            res.status(404).json({ error: 'Not found', message: `smartListmodel.smartList with id "${id} not found"` })
            }else{
             res.json({ status: `${id} deleted` })
             console.log('Objeto BORRADO');
            }
    })          ////CHEQUEAR DELETET ENE EL MENSJ O AL MENOS UN 200 ''    "status": "6286f3e96fff39f564ed9e11 deleted"    ''
    .catch(error => res.status(500).json(error));

}

export default{
    find,findById,newList,findAndModif,findAndDel
}