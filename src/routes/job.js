import express from "express";
import jobshandler from '../controllers/jobsHandler.js'


const Router = express.Router()

Router.get('/', async (req, res) => {
//Método GET para traer tabla
res.json(await jobshandler.getJob())
})

Router.get('/:id', (req, res) => {
    //const myRequest = req
   jobshandler.findJob(req,res)
})

Router.post('/', async (req, res) => {
    const body = req.body
    jobshandler.createJob(body,res)
    // .then(response => {
    //     res.status(200).json({
    //         'body': response,
    //         'statusMessage': 'OK'
    //     })
    //     console.log('AQUI res');
    //     console.log(res);
    //     //res.json(response)
    // })
    
    
    // res.json(await jobshandler.createJob(request))
});

Router.patch('/:id', (req, res) => {
    jobshandler.modifyJob(req,res)
});

Router.delete('/:id', (req, res) => {
    console.log('ROUTE DELETE');
    jobshandler.findAndDel(req,res)
});

export default {
    Router
}