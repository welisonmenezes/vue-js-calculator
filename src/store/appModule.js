const state = {
    digito: "0",
};

const getters = {
    digito: (state) => state.digito,
};

const actions = {
    atualizaDigito({ commit }, novoDigito) {
        commit("setDigito", novoDigito);
    },
};

const mutations = {
    setDigito: (state, novoDigito) => (state.digito = novoDigito),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
