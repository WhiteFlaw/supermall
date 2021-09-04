<template>
  <tab-bar>
    <router-link to="/">
      <tab-bar-item activeColor="rgba(4, 39, 238, 0.856)">
        <template v-slot:item-icon>
          <img src="~assets/img/icon/Brightness.png" />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/icon/Brightness2.png" />
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
    </router-link>

    <router-link to="/category">
      <tab-bar-item activeColor="rgba(4, 39, 238, 0.856)">
        <template v-slot:item-icon>
          <img src="~assets/img/icon/Gear.png" />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/icon/Gear2.png" />
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
    </router-link>

    <router-link to="/shoppingcar">
      <tab-bar-item activeColor="rgba(4, 39, 238, 0.856)">
        <template v-slot:item-icon>
          <img src="~assets/img/icon/unlock.png" />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/icon/Lock.png" />
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
    </router-link>

    <router-link to="/my">
      <tab-bar-item activeColor="rgba(4, 39, 238, 0.856)">
        <template v-slot:item-icon>
          <img src="~assets/img/icon/Task.png" />
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/img/icon/Task2.png" />
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </router-link>
  </tab-bar>
  <router-view />
  <!--     <router-view />确实就是占位的东西,它在哪,router-link指向的页面内容就会显示在哪 -->
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
a {
  flex: 1;
  text-align: center;
  text-decoration: none;
  color: aqua;
  font-size: 12px;
  letter-spacing: 1px;
}
</style>