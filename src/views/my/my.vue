<template>
  <nav-bar>
    <template v-slot:center>
      <div>我的</div>
    </template>
  </nav-bar>
  <div class="wrapper">
    <scroll class="content" :proto-type-value="2"> </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/scroll";
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "my",
  components: {
    NavBar,
    Scroll,
  },
};
</script>

<style>
.content {
  height: 300px;
  background-color: red;
  overflow: hidden;
}
</style>