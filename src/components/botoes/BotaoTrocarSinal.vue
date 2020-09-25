<template>
  <div class="botao" v-on:click="trocarSinal">+/-</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BotaoTrocarSinal",
  computed: {
    ...mapGetters(["digito"]),
  },
  methods: {
    ...mapActions([
      "atualizarResultado",
      "atualizarDigito",
      "limparNumeros",
      "limparOperadores",
    ]),
    trocarSinal() {
      const naoNumeros = ["+", "-", "×", "÷", ".", "=", "C", "CE", "=/-"];
      let tempDigito = this.digito;

      // se resultado já foi requerido, limpar tudo
      if (tempDigito === "=") {
        this.limparNumeros();
        this.limparOperadores();
        this.atualizarDigito("0");
        this.atualizarResultado("0");
      }

      // se dígito atual é numero válido e maior que zero
      if (
        !naoNumeros.includes(tempDigito) &&
        parseFloat(tempDigito) * 1 !== 0
      ) {
        const primeiroCaracter = tempDigito.charAt(0);

        if (primeiroCaracter === "-") {
          tempDigito = tempDigito.substring(1);
        } else {
          tempDigito = "-" + tempDigito;
        }

        this.atualizarDigito(tempDigito);
        this.atualizarResultado(tempDigito);
      }
    },
  },
};
</script>
