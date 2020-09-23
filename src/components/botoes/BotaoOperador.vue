<template>
  <div class="botao cinza" v-html="operador"></div>
</template>

<script>
export default {
  name: "BotaoOperador",
  props: {
    operador: String,
  },
};
</script>
