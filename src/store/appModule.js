const retornarResultadoGeral = (numeros, operadores) => {
    let resultado = numeros[0];

    numeros.forEach((numero, index) => {
        if (operadores[index-1]) { 
            resultado = retornarResultadoIndividual(operadores[index-1], resultado, numero);
        }
    });

    try {
        return resultado.toFixed(6) * 1;
    } catch (error) {
        console.log(error);
    }

    return resultado;
};


const retornarResultadoIndividual = (operador, numero1, numero2) => {
    let resultado;

    if (operador === '÷') {
        resultado = (numero1 === undefined) ? numero2 : parseFloat(numero1) / parseFloat(numero2);
    }
    if (operador === '×') {
        resultado = (numero1 === undefined) ? numero2 : parseFloat(numero1) * parseFloat(numero2);
    }
    if (operador === '-') {
        resultado = (numero1 === undefined) ? numero2 : parseFloat(numero1) - parseFloat(numero2);
    }
    if (operador === '+') {
        resultado = (numero1 === undefined) ? numero2 : parseFloat(numero1) + parseFloat(numero2);
    }

    return resultado;
};

const state = {
    digito: "0",
    resultado: "0",
    historico: "",
    numeros: [],
    operadores: []
};

const getters = {
    digito: (state) => state.digito,
    resultado: (state) => state.resultado,
    historico: (state) => state.historico,
    numeros: (state) => state.numeros,
    operadores: (state) => state.operadores,
};

const actions = {
    atualizarDigito({ commit }, novoDigito) {
        commit("setDigito", novoDigito);
        commit("updateHistorico");
    },
    atualizarResultado({ commit }, novoResultado) {
        commit("setResultado", novoResultado);
    },
    atualizarNumeros({ commit }, novoNumero) {
        commit("pushNumero", novoNumero);
        commit("updateHistorico");
    },
    limparNumeros({ commit }) {
        commit("clearNumeros");
        commit("updateHistorico");
    },
    atualizarOperadores({ commit }, novoOperador) {
        commit("pushOperador", novoOperador);
        commit("updateHistorico");
    },
    trocarOperadores({ commit }, novosOperadores) {
        commit("changeOperadores", novosOperadores);
        commit("updateHistorico");
    },
    limparOperadores({ commit }) {
        commit("clearOperadores");
        commit("updateHistorico");
    },
    atualizarHistorico({ commit }) {
        commit("updateHistorico");
    }
};

const mutations = {
    setDigito: (state, novoDigito) => (state.digito = novoDigito),
    setResultado: (state, novoResultado) => (state.resultado = novoResultado),
    pushNumero: (state, novoNumero) => (state.numeros = [...state.numeros, novoNumero]),
    clearNumeros: (state) => (state.numeros = []),
    pushOperador: (state, novoOperador) => (state.operadores = [...state.operadores, novoOperador]),
    changeOperadores: (state, novosOperadores) => (state.operadores = novosOperadores),
    clearOperadores: (state) => (state.operadores = []),
    updateHistorico: (state) => {
        let numeroMostrado = '';

        state.numeros.forEach((numero, index) => {
            numeroMostrado += numero;

            if (state.operadores[index]) {
                numeroMostrado += state.operadores[index];
            }
        });

        state.historico = numeroMostrado;

        let resultadoCalculado = retornarResultadoGeral(state.numeros, state.operadores);

        if (resultadoCalculado === undefined) {
            state.resultado = "0";
        } else {
            state.resultado = resultadoCalculado;
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};
