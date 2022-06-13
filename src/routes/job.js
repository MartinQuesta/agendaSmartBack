import express from "express";
import jobsHandler from '../controllers/jobsHandler.js'


const Router = express.Router()

Router.get('/', async (req, res) => {
//Método GET para traer tabla
    await jobsHandler.getJobs(res.body)  //aislo el body del response
    .then(data => {
        if (!data) res.status(404).json({ error: 'Not found 404', message: `Jobs not found"` })
        res.json(data); 
    })
    .catch(err => res.status(500).json({ error: 'Not found 500', message: `Jobs GET_ERROR - Not found" and error: ${err}` }))
})

Router.get('/:id', async (req, res) => {
    await jobsHandler.getJobs(req.params)  //aislo el body del response
    .then(data => {
        if (!data) res.status(404).json({ error: 'Not found 404', message: `Jobs not found"` })
        res.json(data); 
        console.log(data);
    })
    .catch(err => res.status(500).json({ error: 'Not found 500', message: `Jobs GET_ERROR - Not found" and error: ${err}` }))
})

Router.post('/', async (req, res) => {
    const body = req.body
    jobsHandler.createJob(body)
    .then(response => {
        res.status(200).json({
            'data': response
        })
    })
});

Router.patch('/:id', (req, res) => {
    jobsHandler.modifyJob(req,res)
});

Router.delete('/', (req, res) => {
    console.log('ROUTE DELETE');
    jobsHandler.findAndDel(req,res)
});

export default {
    Router
}