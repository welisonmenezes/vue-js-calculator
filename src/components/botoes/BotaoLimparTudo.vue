<template>
  <div class="botao cinza" v-on:click="limparTudo">C</div>
</template>

<script>
export default {
  name: "BotaoLimparTudo",
  methods: {
    limparTudo() {
      console.log("BotaoLimparTudo Click Handler.", event);
    },
  },
};
</script>
