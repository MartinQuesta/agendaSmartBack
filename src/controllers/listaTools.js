
const listaTareasDiarias = []
const listaTareasSemanales = []
const listaTareasOrdenadas = []

export default{
    orderDiarias(lista){
        console.log(`lista${lista}`);
        this.listaTareasDiarias = Array.of(lista)
        console.log(`listaDiarias${this.listaTareasDiarias}`);
        const nuevaLista = this.listaTareasDiarias.sort(function(a, b){return b.id - a.id})//(a,b) => { return this.ordenoId(a,b)})
        console.log(`listaOrdenada${nuevaLista}`)
        return nuevaLista
    },
    ordenoId(a,b) {
        const r = '0'
        if (a.id > b.id) {
            r= -1;
        }
        if (a.id <= b.id) {
            r= 1;
        }
        return r;
    }
}