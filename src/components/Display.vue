<template>
  <div class="display">{{ resultado }}</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Display",
  computed: {
    ...mapGetters(["resultado"]),
  },
};
</script>

<style>
.display {
  border: 1px solid #ddd;
  border-radius: 1px;
  height: 60px;
  padding: 10px 15px 0 0;
  margin-bottom: 16px;
  text-align: right;
  font-size: 2.5rem;
  overflow-x: auto;
  transition: all 0.2s ease-in-out;
}

.display:hover {
  border: 1px solid #bbb;
  -webkit-box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
}

@media (max-width: 400px) {
  .display {
    height: 45px;
    padding: 5px 15px 0 0;
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
}
</style>
