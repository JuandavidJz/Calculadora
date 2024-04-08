var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.sumar = function (numero1, numero2) {
        return numero1 + numero2;
    };
    Calculadora.prototype.restar = function (numero1, numero2) {
        return numero1 - numero2;
    };
    Calculadora.prototype.multiplicar = function (numero1, numero2) {
        return numero1 * numero2;
    };
    Calculadora.prototype.dividir = function (numero1, numero2) {
        if (numero2 === 0) {
            throw new Error('No es posible dividir por cero');
        }
        return numero1 / numero2;
    };
    return Calculadora;
}());
// Instancia de la calculadora
var calculadora = new Calculadora();
// Función para manejar la entrada del usuario y mostrar el resultado
function performCalculation() {
    var numero1 = parseFloat(document.getElementById('input1').value);
    var numero2 = parseFloat(document.getElementById('input2').value);
    var resultDiv = document.getElementById('result');
    if (resultDiv !== null) {
        try {
            var resultado = "\n                Suma: ".concat(calculadora.sumar(numero1, numero2), " <br>\n                Resta: ").concat(calculadora.restar(numero1, numero2), " <br>\n                Multiplicaci\u00F3n: ").concat(calculadora.multiplicar(numero1, numero2), " <br>\n                Divisi\u00F3n: ").concat(calculadora.dividir(numero1, numero2), "\n            ");
            resultDiv.innerHTML = resultado;
        }
        catch (error) {
            resultDiv.innerHTML = "<p class=\"error\">".concat(error.message, "</p>");
        }
    }
    else {
        console.error('No se encontró el elemento con id "result"');
    }
}
