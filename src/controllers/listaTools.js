import listaTools from '../services/toolsForLists.js'

const listaTareasDiarias = []
const listaTareasSemanales = []
const listaTareasOrdenadas = []

export default{

    ordenarTareas(lista){
        return listaTools.ordenarTareas(lista)
    }
}