<template>
  <div class="back-top">
    <img src="~assets/img/icon/BGL.png" alt="ToTop" />
  </div>
</template>

<script>
export default {
  name: "backTop",
  data() {
    return {};
  },
};
</script>

<style>
.back-top {
  position: fixed;
  right: 30px;
  bottom: 80px;
}

.back-top img {
  height: 43px;
  width: 43px;
}
</style>