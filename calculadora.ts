class Calculadora {
    sumar(numero1: number, numero2: number): number {
        return numero1 + numero2;
    }

    restar(numero1: number, numero2: number): number {
        return numero1 - numero2;
    }

    multiplicar(numero1: number, numero2: number): number {
        return numero1 * numero2;
    }

    dividir(numero1: number, numero2: number): number {
        if (numero2 === 0) {
            throw new Error('No es posible dividir por cero');
        }
        return numero1 / numero2;
    }
}

// Instancia de la calculadora
const calculadora = new Calculadora();

// Función para manejar la entrada del usuario y mostrar el resultado
function performCalculation(): void {
    const numero1: number = parseFloat((<HTMLInputElement>document.getElementById('input1')).value);
    const numero2: number = parseFloat((<HTMLInputElement>document.getElementById('input2')).value);

    const resultDiv: HTMLElement | null = document.getElementById('result');

    if (resultDiv !== null) {
        try {
            const resultado: string = `
                Suma: ${calculadora.sumar(numero1, numero2)} <br>
                Resta: ${calculadora.restar(numero1, numero2)} <br>
                Multiplicación: ${calculadora.multiplicar(numero1, numero2)} <br>
                División: ${calculadora.dividir(numero1, numero2)}
            `;
            resultDiv.innerHTML = resultado;
        } catch (error) {
            resultDiv.innerHTML = `<p class="error">${error.message}</p>`;
        }
    } else {
        console.error('No se encontró el elemento con id "result"');
    }
}
