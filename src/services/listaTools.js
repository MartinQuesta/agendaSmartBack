

export default {
    ordenarTareas(lista){
        var arr = Object.entries(lista).map((i) => i[1])
        const nuevaLista = arr.sort((a,b) => { return this.ordenoPriori(a,b)})
        return nuevaLista
    },
    ordenoId(a,b){
        let r = 0
        if (a.id < b.id) {
            r= -1;
        }
        else if (a.id >= b.id) {
            r= 1;
        }
        return r;
    },
    ordenoPriori(a,b) {
        let r = 0
        if (a.prioridad < b.prioridad) {
            r= -1;
        }
        else if (a.prioridad > b.prioridad) {
            r= 1;
        }
        else if (a.prioridad = b.prioridad){
            r = this.ordenoId(a,b)
        }
        return r;
    }
}