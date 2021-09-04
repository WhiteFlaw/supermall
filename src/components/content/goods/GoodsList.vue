<template>
  <div class="goods-list">
    <goods-list-item v-for="item in good" :goods-item="item" />
    <!-- 把GoodsListItem里props的goodsItem绑定到这里,
    使其能拿到GoodsList的props里goods的值,
    而且是以goods的单个数组元素的形式拿过去;  -->
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      /* 此处对Home传来的goods数据进行限制 */
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: var(--color-background);
  padding: 2px;
}
</style>