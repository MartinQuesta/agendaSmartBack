import express from "express";
import jobshandler from '../controllers/jobshandler.js'


const Router = express.Router()

Router.get('/', (req, res) => {
//Método GET para traer tabla
    jobshandler.getJob(res)
})

Router.get('/:id', (req, res) => {
   jobshandler.findJob(req,res)
})

Router.post('/', async (req, res) => {
    jobshandler.createJob(req, res)
});

Router.patch('/:id', (req, res) => {
    jobshandler.modifyJob(req,res)
});

Router.delete('/:id', (req, res) => {
    jobshandler.findAndDel(req,res)
    
});

export default {
    Router
}