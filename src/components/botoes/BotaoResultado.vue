<template>
  <div class="botao azul" v-on:click="mostrarResultado">=</div>
</template>

<script>
export default {
  name: "BotaoResultado",
  methods: {
    mostrarResultado: () => {
      console.log("BotaoResultado Click Handler.", event);
    },
  },
};
</script>
