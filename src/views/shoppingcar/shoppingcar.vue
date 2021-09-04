<template>
  <nav-bar>
    <template v-slot:center>
      <div>购物车</div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "shoppingcar",
  components: {
    NavBar,
  },
};
</script>

<style>
</style>