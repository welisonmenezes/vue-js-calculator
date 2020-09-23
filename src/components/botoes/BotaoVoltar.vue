<template>
  <div class="botao cinza" v-on:click="voltarDigito">&larr;</div>
</template>

<script>
export default {
  name: "BotaoVoltar",
  methods: {
    voltarDigito: () => {
      console.log("BotaoVoltar Click Handler.", event);
    },
  },
};
</script>
