import smartListmodel from "../models/smartList-model.js";
import listaTools from "./toolsForLists.js";
import transformJobhttp from "./httpTransformJobToMongo.js";

async function full(list){
    console.log('Smart Order Service');
    let data = await transformJobhttp.internalFind()
    data = listaTools.ordenarTareas(data)
    list.data = data

    return list
}

export default{
    full
}