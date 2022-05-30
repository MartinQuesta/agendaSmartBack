import smartListmodel from "../models/smartListmodel.js";
import listaTools from "./listaTools.js";
import transformJobhttp from "./transformJobhttp.js";

async function full(list){
    console.log('Smart Order Service');
    let data = await transformJobhttp.internalFind()
    console.log(data);
    data = listaTools.ordenarTareas(data)
    list.data = data

    return list
}

export default{
    full
}