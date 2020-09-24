<template>
  <div class="historico">{{ historico }}</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Historico",
  computed: {
    ...mapGetters(["historico"]),
  },
};
</script>

<style>
.historico {
  height: 20px;
  font-size: 0.9rem;
  background-color: #fff;
  margin-bottom: 16px;
  border-color: #bbb;
  padding: 0.5rem;
  text-align: right;
  word-break: keep-all;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
}

.historico:hover {
  -webkit-box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
}
</style>
