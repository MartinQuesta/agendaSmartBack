import express from "express";
import jobsHandler from '../controllers/jobsHandler.js'
import auth from '../middleware/auth.js'
import statisticService from "../services/statisticService.js";


const Router = express.Router()

Router.get('/', async (req, res) => {
//Método GET para traer tabla
    console.log('GET /api/tareas/');
    try{
        auth.verifyToken(req,res)  //Agrega userId
        await jobsHandler.getJobs(req.userId)  //aislo el body del response
        .then(data => {
            if (!data) res.status(404).json({ error: 'Not found 404', message: `Jobs not found"` })
            const response = statisticService.totalJobsDone(data)
            res.status(200).json(response);
        })
        .catch(err => res.status(500).json({ error: 'Not found 500', message: `Jobs GET_ERROR - Not found" and error: ${err}` }))
    }catch(err){
        console.log('error en TOKEN');
    }
})

Router.get('/:id', async (req, res,next) => {
    try{
        console.log('GET /api/tareas/id');
        const Myauth = auth.verifyToken(req,res)    //Agrega userId
        if(req.userId){
            await jobsHandler.getJobs(req.userId)  //aislo el body del response
            .then(data => {
                if (!data) res.status(404).json({ error: 'Not found 404', message: `Jobs not found"` })
                   res.json(data); 
            }).catch(err => res.status(500).json({ error: 'Not found 500', message: `Jobs GET_ERROR - Not found" and error: ${err}` }));
        }else{
            let err = req.params;
            res.status(500).json({ error: 'Not found 500', message: `Jobs GET_ERROR - Not found" and error: ${err}`});
        }
    }catch(err){
        console.log('error en TOKEN');
    }
})

Router.post('/', async (req, res) => {
    console.log('POST /api/tareas/');
    const body = req.body
    jobsHandler.createJob(body)
    .then(response => {
        res.status(200).json({
            'data': response
        })
    })
});

Router.patch('/:id', (req, res) => {
    try{
        console.log('PATCH /api/tareas/id');
        auth.verifyToken(req.body)  //Agrega userId
        jobsHandler.modifyJob(req,res)
    }catch(err){
         console.log('error en TOKEN');
    }
});

Router.delete('/', (req, res) => {
    console.log('DELETE METHOD DELETE');
    jobsHandler.findAndDel(req,res)
});

export default {
    Router
}