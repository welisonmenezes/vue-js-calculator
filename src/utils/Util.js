export const operadoresValidos = ["+", "-", "×", "÷"];

export const naoNumeros = operadoresValidos.concat([".", "=", "C", "CE", "=/-"]);

export const posicionarScrollbar = () => {
    const $display = document.querySelector(".display"),
        $historico = document.querySelector(".historico");

    $display.scrollLeft = $display.scrollWidth;
    $historico.scrollLeft = $historico.scrollWidth;
};

export const retornarResultadoGeral = (numeros, operadores) => {
    let resultado = numeros[0];

    numeros.forEach((numero, index) => {
        if (operadores[index - 1]) {
            resultado = retornarResultadoIndividual(operadores[index - 1], resultado, numero);
        }
    });

    try {
        let res = parseFloat(resultado);
        res = res.toFixed(6);
        res = parseFloat(res) * 1;
        return res.toString();
    } catch (error) {
        console.log(error);
    }

    return resultado;
};

export const retornarResultadoIndividual = (operador, numero1, numero2) => {
    let resultado;

    if (operador === "÷") {
        resultado = numero1 === undefined ? numero2 : parseFloat(numero1) / parseFloat(numero2);
    }
    if (operador === "×") {
        resultado = numero1 === undefined ? numero2 : parseFloat(numero1) * parseFloat(numero2);
    }
    if (operador === "-") {
        resultado = numero1 === undefined ? numero2 : parseFloat(numero1) - parseFloat(numero2);
    }
    if (operador === "+") {
        resultado = numero1 === undefined ? numero2 : parseFloat(numero1) + parseFloat(numero2);
    }

    return resultado;
};
