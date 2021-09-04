<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "scroll",
  props: {
    protoTypeValue: {
      //可从该组件被调用处传值:":proto-type-value="3";
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      scroll: {
        type: Object,
        default() {
          return {};
        },
      },
    };
  },
  mounted() {
    //在Vue里准确具体的拿到某个元素,给需要拿到的元素添加ref属性,利用this.$refs.refname来获取
    //如果ref是绑定在组件上,比如<tab-bar ref="tabbar" />那么拿到的会是一个组件对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      protoType: this.protoTypeValue,
      //在BSver2.0后click属性默认值为true,即可触发非默认可点击元素的点击事件;
      observeDOM: true,
      //去查一下文档里的observeDOM属性作用;
    });
    this.scroll.on("scroll", (position) => {
      /* 传入position */
      this.$emit("scroll", position);
      //$emit自定义一个事件用以触发Home.vue的methods里的contentScroll函数,使得Home.vue中能拿到position
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>

<style>
</style>