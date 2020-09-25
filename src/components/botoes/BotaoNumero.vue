<template>
  <div class="botao" v-on:click="digitarNumero">{{ numero }}</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { operadoresValidos } from '../../utils/Util';

export default {
  name: "BotaoNumero",
  props: {
    numero: String,
  },
  computed: {
    ...mapGetters(["resultado", "digito"]),
  },
  methods: {
    ...mapActions([
      "atualizarResultado",
      "atualizarDigito",
      "limparNumeros",
      "limparOperadores",
    ]),
    digitarNumero() {
      let tempDigito = this.digito;

      // permitir apenas um ponto (.) no dígito atual
      if (tempDigito.includes(".") && event.target.innerHTML === ".") return;

      if (tempDigito === "=") {
        // se o resultado já foi requerido, limpar tudo
        this.limparNumeros();
        this.limparOperadores();
        tempDigito = event.target.innerHTML;
      } else {
        // se dígito atual é operador, seta-o como zero
        if (operadoresValidos.includes(tempDigito)) {
          tempDigito = "0";
        }

        // atualiza o dígito atual, se zero, atribui, senão, concatena
        if (tempDigito === "0") {
          tempDigito = event.target.innerHTML;
        } else {
          tempDigito += event.target.innerHTML;
        }
      }

      if (
        event.target.innerHTML === "." &&
        (tempDigito === "0" || tempDigito === ".")
      ) {
        tempDigito = "0" + event.target.innerHTML;
      }

      this.atualizarDigito(tempDigito);
      this.atualizarResultado(tempDigito);
    },
  },
};
</script>
