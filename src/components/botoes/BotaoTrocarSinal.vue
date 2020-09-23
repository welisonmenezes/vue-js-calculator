<template>
  <div class="botao" v-on:click="trocarSinal">+/-</div>
</template>

<script>
export default {
  name: "BotaoTrocarSinal",
  methods: {
    trocarSinal: () => {
      console.log("BotaoTrocarSinal Click Handler.", event);
    },
  },
};
</script>
