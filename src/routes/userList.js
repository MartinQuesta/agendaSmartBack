import express from "express";
import listshandler from '../controllers/listsHandler.js'


const Router = express.Router()

Router.get('/', (req, res) => {
//Método GET para traer tabla
    listshandler.getList(res)
})

Router.get('/:id', (req, res) => {
   listshandler.findList(req,res)
})

Router.post('/', async (req, res) => {
    listshandler.createList(req, res)
});

Router.patch('/:id', (req, res) => {
    listshandler.modifyList(req,res)
});

Router.delete('/:id', (req, res) => {
    listshandler.findAndDel(req,res)
    
});

export default {
    Router
}