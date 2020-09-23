<template>
  <div class="botao">{{ numero }}</div>
</template>

<script>
export default {
  name: "BotaoNumero",
  props: {
    numero: String,
  },
};
</script>
