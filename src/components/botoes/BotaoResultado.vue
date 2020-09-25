<template>
  <div class="botao azul" v-on:click="mostrarResultado">=</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BotaoResultado",
  computed: {
    ...mapGetters(["digito"]),
  },
  methods: {
    ...mapActions(["atualizarNumeros", "atualizarDigito"]),
    mostrarResultado() {
      const naoNumeros = ["+", "-", "×", "÷", ".", "=", "C", "CE", "=/-"];

      // se resultado ainda não foi requerido
      if (this.digito !== "=") {
        // se é número válido, atualizar array de números
        if (!naoNumeros.includes(this.digito)) {
          this.atualizarNumeros(this.digito);
        }

        this.atualizarDigito(event.target.innerHTML);
      }
    },
  },
};
</script>
