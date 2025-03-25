export class Nodo {
    constructor(tipo, numero, nombreCompleto) {
        this.tipo = tipo;
        this.numero = numero;
        this.nombreCompleto = nombreCompleto;
        this.siguiente = null;
    }
}