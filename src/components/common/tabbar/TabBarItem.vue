<template>
  <div class="tab-bar-item">
    <!-- 插槽系统类似于传参,某组件有两个插槽就代表这个组件在被调用时可以在其内部写(传入)两个html元素 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    <!-- 插槽slot最终会被app.vue里传入的html元素替换,在插槽上写样式类的东西不会生效,所以用div来包裹,利用样式继承性来完成样式修改 -->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      /*限制传入值的类型:String;
        activeColor属性默认值:red; */
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      /* isActive: true, */
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
      /* indexOf检索需要检索的字符串,第一个参数是目标字符串,第二个是开始检索的位置(整数,省略则从头开始检索) */
    },
    /* style=的值为activeStyle返回的对象 */
    activeStyle() {
      /* 依据isActive检索当前tab-bar-item是否处于活跃状态,如是返回{ color: this.activeColor }否则返回空对象 */
      /* activeColor是注册在props中的属性,在此处由父组件来传入颜色值 */
      return this.isActive ? { color: this.activeColor } : {};
      /* :style="isActive ? { color: this.activeColor } : {}" 
      将v-bind里该写的写到计算属性里==>>  
      activeStyle() {return this.isActive ? { color: this.activeColor } : {}; }*/
    },
  },
};
</script>

<style scoped>
.active {
  color: aqua;
}
</style>