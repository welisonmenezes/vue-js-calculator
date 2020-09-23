<template>
  <div class="botao" v-on:click="digitarNumero">{{ numero }}</div>
</template>

<script>
export default {
  name: "BotaoNumero",
  props: {
    numero: String,
  },
  methods: {
    digitarNumero: () => {
      console.log("BotaoNumero Click Handler.", event);
    },
  },
};
</script>
