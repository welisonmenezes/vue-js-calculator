<template>
  <div class="botao cinza" v-on:click="limparDigitoAtual">CE</div>
</template>

<script>
export default {
  name: "BotaoLimpar",
  methods: {
    limparDigitoAtual: () => {
      console.log("BotaoLimpar Click Handler.", event);
    },
  },
};
</script>
