<template>
  <div class="botao cinza" v-on:click="voltarDigito">&larr;</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { operadoresValidos } from '../../utils/Util';

export default {
  name: "BotaoVoltar",
  computed: {
    ...mapGetters(["digito"]),
  },
  methods: {
    ...mapActions(["atualizarResultado", "atualizarDigito"]),
    voltarDigito() {
      let tempDigito = this.digito;

      // se resultado já foi requerido, faça nada
      if (tempDigito === "=") {
        return;
      }

      // se dígito atual não for um operador
      if (!operadoresValidos.includes(tempDigito)) {
        tempDigito = tempDigito.slice(0, -1);

        if (tempDigito.length < 1) {
          tempDigito = "0";
        }

        this.atualizarDigito(tempDigito);
        this.atualizarResultado(tempDigito);
      }
    },
  },
};
</script>
