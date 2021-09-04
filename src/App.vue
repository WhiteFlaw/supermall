<template>
  <div id="app">
    <!--  <router-view />  -->
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "/assets/css/base.css";
/* assets前面要加"/"不然会报错This dependency was not found: -!../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?
?ref--6-oneOf-1-1!../../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/stylePostLoader.js!
../../../node_modules/postcss-loader/src/index.js??ref--6-oneOf-1-2!./normalize.css in
 ./node_modules/@vue/cli-service/node_modules/css-loader/dist/cj,这并不是未安装css-loader/style-loader造成 */
</style>
