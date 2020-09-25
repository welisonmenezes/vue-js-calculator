<template>
  <div class="botao cinza" v-on:click="limparDigitoAtual">CE</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BotaoLimpar",
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
    limparDigitoAtual() {
      if (this.digito === "=") {
        this.limparNumeros();
        this.limparOperadores();
        this.atualizarDigito("0");
        this.atualizarResultado("0");
      } else {
        this.atualizarDigito("0");
        this.atualizarResultado("0");
      }
    },
  },
};
</script>
