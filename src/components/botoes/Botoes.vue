<template>
  <div class="botoes">
    <div>
      <BotaoLimpar />
      <BotaoLimparTudo />
      <BotaoVoltar />
      <BotaoOperador operador="&divide;" />
    </div>
    <div>
      <BotaoNumero numero="7" />
      <BotaoNumero numero="8" />
      <BotaoNumero numero="9" />
      <BotaoOperador operador="&times;" />
    </div>
    <div>
      <BotaoNumero numero="4" />
      <BotaoNumero numero="5" />
      <BotaoNumero numero="6" />
      <BotaoOperador operador="-" />
    </div>
    <div>
      <BotaoNumero numero="1" />
      <BotaoNumero numero="2" />
      <BotaoNumero numero="3" />
      <BotaoOperador operador="+" />
    </div>
    <div>
      <BotaoTrocarSinal />
      <BotaoNumero numero="0" />
      <BotaoNumero numero="." />
      <BotaoResultado />
    </div>
  </div>
</template>

<script>
import BotaoLimpar from "./BotaoLimpar.vue";
import BotaoLimparTudo from "./BotaoLimparTudo.vue";
import BotaoNumero from "./BotaoNumero.vue";
import BotaoOperador from "./BotaoOperador.vue";
import BotaoResultado from "./BotaoResultado.vue";
import BotaoTrocarSinal from "./BotaoTrocarSinal.vue";
import BotaoVoltar from "./BotaoVoltar.vue";

export default {
  name: "Botoes",
  components: {
    BotaoLimpar,
    BotaoLimparTudo,
    BotaoNumero,
    BotaoOperador,
    BotaoResultado,
    BotaoTrocarSinal,
    BotaoVoltar,
  },
};
</script>

<style>
.botoes > div {
  display: flex;
  justify-content: space-between;
}
.botoes > div .botao:last-child {
  margin-right: 0;
}
.botoes > div:last-child .botao {
  margin-bottom: 0;
}

@media (max-width: 500px) {
  .botoes > div .botao:first-child {
    margin-left: 0;
  }
}

.botao {
  display: block;
  border: 1px solid transparent;
  border-radius: 1px;
  width: 80px;
  text-align: center;
  padding: 10px;
  margin-bottom: 16px;
  cursor: pointer;
  background-color: #f9f9f9;
  transition: border-color 0.2s ease-in-out, background-color 0.2s,
    box-shadow 0.2s;
  -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
}
.botao:hover {
  background-color: #f1f1f1;
  border-color: #bbb;
}
.botao:active {
  font-weight: bold;
}

.botao.cinza {
  background-color: #ddd;
}
.botao.cinza:hover {
  background-color: #ccc;
  border-color: #aaa;
}

.botao.azul {
  border-radius: 1px;
  color: #fff;
  background-color: #4d90fe;
}
.botao.azul:hover {
  background-color: #307cf9;
  border-color: #1857bb;
}

@media (max-width: 500px) {
  .botao {
    width: 100%;
    margin: 0.5rem;
  }
}

@media (max-width: 400px) {
  .botao {
    font-size: 1rem;
  }
}
</style>
