<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
</script>

<style scoped>
#tab-bar {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  z-index: 9;
  background-color: rgba(100, 100, 100, 0.2);
  box-shadow: 0px -2px 1px rgba(100, 100, 100, 0.2);
}
</style>