<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :proto-type-value="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- scroll.vue里的$emit自定义事件scroll触发methods里的contentScroll事件 -->
      <!-- v-bind传值时不加":"也能传过去,但是会不管三七二十一的传送字符串类型; -->
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control class="tab-control" :titles="['流行', '新款', '精选']" />
      <good-list :goods="goods['pop'].list" />
      <!--把goodsList里props的goods绑定到此处,向goodsList传data()中请求到的goods;-->
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <!-- 需要监听组件的原生事件时,必须给对应的事件加.native,否则就用@事件(麻烦) -->
  </div>
</template>

<script>
//只有在某个模块被使用export default导出之后才能不加大括号直接引入
//拿取存储着请求结果的getHomeMultidata()函数;
import { getHomeMultidata, getHomeGoods } from "@/network/home";
import NavBar from "components/common/navbar/NavBar";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/featureView.vue";
import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goods/GoodsList";
import scroll from "components/common/scroll/scroll";
import BackTop from "components/content/backTop/BackTop";
export default {
  name: "Home",
  components: {
    NavBar,
    RecommendView,
    FeatureView,
    TabControl,
    GoodList,
    scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      isShowBackTop: true,
    };
  },
  created() {
    //一般在项目中create()里只写主要逻辑,(只调用某函数而不是写函数);
    //this:当前的组件对象;
    this.HomeMultidata();
    //this必须写,这样才能调用到methods里的最外层getHomeMultidata();
    //页面一创建马上就调用getHomeMultidata()请求数据;
    this.HomeGoods("pop");
    this.HomeGoods("new");
    this.HomeGoods("sell");
    //此處貌似是爲了給Home.vue底部的getHomeGoods()傳參type,傳參data()中有兩個參數的對象;
    //函数写在methods里,created()只管调用即可;
  },
  methods: {
    HomeMultidata() {
      //response是一个局部变量,在函数执行完就被销毁,必须将其赋值给result来保存;
      getHomeMultidata().then((response) => {
        //这里的banner和recommends都被从数据里取出来传到了data()里;
        this.banners = response.data.banner;
        this.recommends = response.data.recommend.list;
        /* 函数调用 ->函数体压入函数栈(保存函数调用过程中所有变量) */
        /* 函数调用结束后 -> 弹出函数栈(内存回收掉函数中所有的变量,),如果需要再调用,
           变量会重新创建然后压入函数栈 */
      });
    },
    HomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((response) => {
        this.goods[type].list.push(...response.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
        //这里调用scroll的methods里的finsihPullUp(),
        //连锁调用BS包里的finishPullUp方法;
      });
    },
    backClick() {
      this.$refs.scroll.scrollTo();
      //调用scroll.vue里的方法scrollTo()
      //scrollTo(x, y, time, easing, extraTrasfrom, isSilent)
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  /* 100 viewport height 100%视口高度,即100%可视界面的高度 */
  position: relative;
}

.home-nav {
  background-color: rgba(100, 100, 100, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: aqua;
  z-index: 9;
  /* 这里不加z-index会导致首页导航栏被压在商品下; */
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}

.content {
  margin-top: 44px;
  height: calc(100% - 98px);
}
</style>