import { ListaEnlazada } from './Lista.js';

export class PosfijaUtils {
    static convertirAPosfija(expresion) {
        const precedencia = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3, '(': 0 };
        const asociatividad = { '+': 'L', '-': 'L', '*': 'L', '/': 'L', '^': 'R' };

        const operadores = new ListaEnlazada();
        const salida = new ListaEnlazada();
        const regex = /(\d+|\+|\-|\*|\/|\^|\(|\))/g
        const tokens = expresion.match(regex);

        tokens.forEach(token => {
            if (!isNaN(token)) {
                salida.push(token);
            } else if (token === '(') {
                operadores.push(token);
            } else if (token === ')') {
                while (!operadores.estaVacia() && operadores.peek() !== '(') {
                    salida.push(operadores.pop());
                }
                operadores.pop();
            } else {
                while (
                    !operadores.estaVacia() &&
                    precedencia[operadores.peek()] >= precedencia[token] &&
                    (asociatividad[token] === 'L' || operadores.peek() !== '^')
                ) {
                    salida.push(operadores.pop());
                }
                operadores.push(token);
            }
        });

        while (!operadores.estaVacia()) {
            salida.push(operadores.pop());
        }

        const resultado = [];
        while (!salida.estaVacia()) {
            resultado.unshift(salida.pop());
        }

        return resultado.join(' ');
    }

    static evaluarPosfija(expresionPosfija) {
        const pila = new ListaEnlazada();
        const tokens = expresionPosfija.split(' ');

        tokens.forEach(token => {
            if (!isNaN(token)) {
                pila.push(parseFloat(token));
            } else {
                const b = pila.pop();
                const a = pila.pop();
                switch (token) {
                    case '+':
                        pila.push(a + b);
                        break;
                    case '-':
                        pila.push(a - b);
                        break;
                    case '*':
                        pila.push(a * b);
                        break;
                    case '/':
                        pila.push(a / b);
                        break;
                    case '^':
                        pila.push(Math.pow(a, b));
                        break;
                    default:
                        throw new Error(`Operador desconocido: ${token}`);
                }
            }
        });

        return pila.pop();
    }
}