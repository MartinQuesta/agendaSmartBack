

export default {
    ordenarTareas(lista){
        var arr = Object.entries(lista).map((i) => i[1])
        console.log('aqui el arry desde listaTools');
        console.log(arr[1]._id);
        const nuevaLista = arr.sort((a,b) => { return this.ordenoPriori(a,b)})
        return nuevaLista
    },
    ordenoId(a,b){
        let r = 0
        if (a._id < b._id) {
            r= -1;
        }
        else if (a._id >= b._id) {
            r= 1;
        }
        return r;
    },
    ordenoPriori(a,b) {
        let r = 0
        if (a.priority < b.priority) {
            r= -1;
        }
        else if (a.priority > b.priority) {
            r= 1;
        }
        else if (a.priority = b.priority){
            r = this.ordenoId(a,b)
        }
        return r;
    }
}