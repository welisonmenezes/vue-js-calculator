<template>
  <div class="botao" v-on:click="digitarNumero">{{ numero }}</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BotaoNumero",
  props: {
    numero: String,
  },
  methods: {
    ...mapActions(["atualizaDigito"]),
    digitarNumero() {
      this.atualizaDigito(event.target.innerHTML);
    },
  },
};
</script>
