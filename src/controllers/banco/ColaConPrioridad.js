import { Nodo } from './Nodo';

export class ColaConPrioridad {
    constructor() {
        this.inicio = null;
        this.contador = { 'P': 0, 'C': 0, 'N': 0 }; 
    }

    agregarCliente(tipo, nombreCompleto) {
        this.contador[tipo]++;
        const nuevoNodo = new Nodo(tipo, this.contador[tipo], nombreCompleto);

        if (!this.inicio) {
            this.inicio = nuevoNodo;
        } else {
            let actual = this.inicio;
            let anterior = null;
            while (actual && this._compararPrioridad(tipo, actual.tipo) >= 0) {
                anterior = actual;
                actual = actual.siguiente;
            }
            if (!anterior) {
                nuevoNodo.siguiente = this.inicio;
                this.inicio = nuevoNodo;
            } else {
                anterior.siguiente = nuevoNodo;
                nuevoNodo.siguiente = actual;
            }
        }
        return this._getColaArray(); 
    }

    _compararPrioridad(tipo1, tipo2) {
        const prioridad = { 'P': 1, 'C': 2, 'N': 3 }; 
        return prioridad[tipo1] - prioridad[tipo2];
    }

    sacarCliente() {
        if (!this.inicio) return null;
        const clienteSacado = this.inicio;
        this.inicio = this.inicio.siguiente;
        return {
            atendido: clienteSacado,
            colaActual: this._getColaArray()
        };
    }

    _getColaArray() {
        let actual = this.inicio;
        const cola = [];
        while (actual) {
            cola.push({
                tipo: actual.tipo,
                numero: actual.numero,
                nombre: actual.nombreCompleto,
                display: `${actual.tipo}${actual.numero}`
            });
            actual = actual.siguiente;
        }
        return cola;
    }
}