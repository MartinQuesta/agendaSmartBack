import { response } from "express";
import jobmodel from "../models/job-model.js";
import toolsForLists from './toolsForLists.js'

//const userID = 'user1'
async function find(userID){
    let response
    await jobmodel.jobListInstance(userID).find().then(data => {
        const orderList = toolsForLists.ordenarTareas(data)
        response = orderList
    })
    .catch(err => response.status(500)
    .json(err));
    return response
}
async function internalFind(){
    const response = await jobmodel.jobListInstance.find().then(data => {
        return data
    })
    .catch(err => console.log(err));
    return response
}

function findById(id,res){
    jobmodel.jobListInstance.findById(id)
    .then(data => {
        if (!data) res.status(404).json({ error: 'Not found 404', message: `Job with id "${id} not found"` })
        res.json(data); 
    })
    .catch(err => res.status(500).json({ error: 'Not found 500', message: `Job aca esta el error aca esta el error with id "${id} not found" and error: ${err}` }))
    //return res        /////PORQUE DEVUELVE IGUAL 
}

function findAndModif(id, body, res){
    jobmodel.jobListInstance.findByIdAndUpdate(id, body)
        .then(data => {
            if (!data) res.status(404).json({ error: 'Not found', message: `Job with id "${id} not found"` });
            res.status(201).json({ status: 'Updated', message: `Job with id "${id} updated"` });
        })
        .catch(err => res.status(500).json(err));
}

function findAndDel(userID,id, res){
    console.log(`Buscando ID: ${id}`);
    jobmodel.jobListInstance(userID).findByIdAndDelete(id)
    .then((data) => {
        if (!data) {
            res.status(404).json({ error: 'Not found', message: `jobmodel.jobListInstance with id "${id} not found"` })
            }else{
             res.json({ status: `${id} deleted` })
             console.log('Objeto BORRADO');
            }
    })          ////CHEQUEAR DELETET ENE EL MENSJ O AL MENOS UN 200 ''    "status": "6286f3e96fff39f564ed9e11 deleted"    ''
    .catch(error => res.status(500).json(error));

}
async function createJob(jobParams){       //I kept the body
    let response = {}
    const job = newJob(jobParams)
    await job.save()
    .then(job => {
        response.data = job
        response.status = 0
        return response.data

        })
    .catch(err => {
        response.data = err
        response.status = 1
    });
}

function newJob(body){
    const userID = body.meta.userData.userID
    return jobmodel.jobDBCreator(userID,body)
}

export default{
    find,findById,newJob,findAndModif,findAndDel,internalFind,createJob
}