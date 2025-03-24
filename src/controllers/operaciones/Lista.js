import { Nodo } from './Nodo';

export class ListaEnlazada {
    constructor() {
        this.cima = null;
    }

    push(valor) {
        const nuevoNodo = new Nodo(valor);
        nuevoNodo.siguiente = this.cima;
        this.cima = nuevoNodo;
    }

    pop() {
        if (this.estaVacia()) {
            return null;
        }
        const valor = this.cima.valor;
        this.cima = this.cima.siguiente;
        return valor;
    }

    peek() {
        return this.cima ? this.cima.valor : null;
    }

    estaVacia() {
        return this.cima === null;
    }
}