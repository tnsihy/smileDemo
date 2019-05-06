<template>
  <div class="goods-info">
    <div class="goods-image">
      <img v-lazy="goodsImage" width="80%">
    </div>
    <div class="goods-name">{{goodsName}}</div>
    <div class="goods-price">￥{{goodsPrice | moneyFilter}}</div>
  </div>
</template>

<script>
// 热卖商品组件
import { toMoney } from "../filter/MoneyFilter.js";
export default {
  props: ["goodsImage", "goodsName", "goodsPrice"],
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  }
};
</script>

<style scoped>
.goods-info {
  font-size: 12px;
  text-align: center;
  /* box-sizing: border-box;
  -webkit-box-sizing: border-box; */
}
.goods-name {
  padding: 0 8px;
  overflow: hidden;
  /* 将多余字体省略表示 */
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>