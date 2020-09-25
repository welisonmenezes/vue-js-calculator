<template>
  <div class="header">
    <img :src="logo" alt="Logo" />
    Vue Js Calculator
  </div>
</template>

<script>
import logo from "../assets/logo.png";

export default {
  name: "Header",
  data: function () {
    return {
      logo,
    };
  },
};
</script>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin-bottom: 16px;
}
.header img {
  width: 30px;
  height: 30px;
  margin-right: 1rem;
}
</style>