<template>
  <div class="botao cinza" v-html="operador" v-on:click="digitarOperador"></div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BotaoOperador",
  props: {
    operador: String,
  },
  computed: {
    ...mapGetters(["digito", "numeros", "operadores"]),
  },
  methods: {
    ...mapActions([
      "atualizarNumeros",
      "atualizarOperadores",
      "trocarOperadores",
      "atualizarDigito",
    ]),
    digitarOperador() {
      const operadoresValidos = ["+", "-", "×", "÷"];
      let tempDigito = this.digito;

      // se dígito atual ainda não existe ou já é operador, operador não é necessário
      if (tempDigito === "" || operadoresValidos.includes(tempDigito)) {
        // Se digito atual for operador, permitir trocar último operador
        if (this.operadores.length === this.numeros.length) {
          const novoOperadores = [...this.operadores];
          novoOperadores[novoOperadores.length - 1] = event.target.innerHTML;
          this.trocarOperadores(novoOperadores);
        }

        return;
      }

      // se resultado ainda não foi requerido, formatar/adicionar dígito atual ao array de números
      if (tempDigito !== "=") {
        // formata corretamente números fracionais digitados
        if (
          tempDigito * 1 === 0 ||
          (tempDigito.length === 1 && tempDigito === ".")
        ) {
          tempDigito = "0";
        } else if (tempDigito[tempDigito.length - 1] === ".") {
          tempDigito += "0";
        }

        // adiciona número ao array de numeros
        this.atualizarNumeros(tempDigito);
      }

      // atualiza o dígito atual
      tempDigito = event.target.innerHTML;

      // adicionar dígito atual atualiado ao array de operadores
      this.atualizarOperadores(tempDigito);
      this.atualizarDigito(tempDigito);
    },
  },
};
</script>
