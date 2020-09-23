<template>
  <div class="botao cinza" v-html="operador" v-on:click="digitarOperador"></div>
</template>

<script>
export default {
  name: "BotaoOperador",
  props: {
    operador: String,
  },
  methods: {
    digitarOperador: () => {
      console.log("BotaoOperador Click Handler.", event);
    },
  },
};
</script>
