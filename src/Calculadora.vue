<template>
  <div>
    <Forkme />
    <div class="calculadora">
      <Header />
      <Historico />
      <Display />
      <Botoes />
    </div>
  </div>
</template>

<script>
import Forkme from "./components/Forkme.vue";
import Header from "./components/Header.vue";
import Historico from "./components/Historico.vue";
import Display from "./components/Display.vue";
import Botoes from "./components/botoes/Botoes.vue";

export default {
  name: "Calculadora",
  components: {
    Forkme,
    Header,
    Historico,
    Display,
    Botoes,
  },
};
</script>

<style>
.calculadora {
  background: #ffffff;
  width: 100%;
  max-width: 454px;
  padding: 16px;
  margin: 30px 0;
  border-radius: 1px;
  overflow: hidden;
  -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
}

@media (max-width: 500px) {
  .calculadora {
    margin: 20px 10px;
  }
}
</style>
