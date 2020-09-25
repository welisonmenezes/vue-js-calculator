<template>
  <div class="botao cinza" v-on:click="limparTudo">C</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BotaoLimparTudo",
  methods: {
    ...mapActions([
      "atualizarResultado",
      "atualizarDigito",
      "limparNumeros",
      "limparOperadores",
    ]),
    limparTudo() {
      this.limparNumeros();
      this.limparOperadores();
      this.atualizarDigito("0");
      this.atualizarResultado("0");
    },
  },
};
</script>
