<template>
  <div class="header">
    <img :src="logo" alt="Logo" />
    <h1>Vue Js <span>Calculator</span></h1>
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
.header h1 {
  font-size: 16px;
  font-weight: normal;
}
.header img {
  width: 30px;
  height: 30px;
  margin-right: 1rem;
}

@media (max-width: 500px) {
  .header h1 {
    line-height: 14px;
  }
  .header span {
    display: block;
  }
}
</style>