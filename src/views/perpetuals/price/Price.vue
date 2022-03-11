<template>
  <div class="price">
    <NavSymbol @change='changeSymbol' />
    <div class="moneyBox">
      <div
        class="moneyBox__left"
        :class="{
          'moneyBox__left--red':
            digitalCurrency[digitalCurrency.currentType].chg.indexOf('-') == 0,
        }"
      >
        <h1 class="bigMoney">
          {{ digitalCurrency[digitalCurrency.currentType].close }}
        </h1>
        <div class="rateMoney">
          <span class="rateMoney__item">{{
            digitalCurrency[digitalCurrency.currentType].chg
          }}</span>
          <span class="rateMoney__item">{{
            digitalCurrency[digitalCurrency.currentType].chgPrice
          }}</span>
        </div>
      </div>
      <div class="moneyBox__right">
        <div class="moneyBox__right__item">
          <span>高</span>
          <span class="moneyBox__right__item__money">${{
            digitalCurrency[digitalCurrency.currentType].yesterday.high
          }}</span>
        </div>
        <div class="moneyBox__right__item">
          <span>低</span>
          <span class="moneyBox__right__item__money">${{
            digitalCurrency[digitalCurrency.currentType].yesterday.low
          }}</span>
        </div>
        <div class="moneyBox__right__item">
          <span>开</span>
          <span class="moneyBox__right__item__money">{{
            digitalCurrency[digitalCurrency.currentType].open
          }}</span>
        </div>
      </div>
    </div>
    <!-- k线图 -->
    <KLine ref='kline'/>
    <div class="nav">
      <div
        class="nav__item"
        :class="{ 'nav__item--active': show_content == '0' }"
        @click="show_content = '0'"
      >
        Book
      </div>
      <div
        class="nav__item"
        :class="{ 'nav__item--active': show_content == '1' }"
        @click="show_content = '1'"
      >
        Trades
      </div>
      <div
        class="nav__item"
        :class="{ 'nav__item--active': show_content == '2' }"
        @click="show_content = '2'"
      >
        Funding
      </div>
      <div
        class="nav__item"
        :class="{ 'nav__item--active': show_content == '3' }"
        @click="show_content = '3'"
      >
        Details
      </div>
    </div>
    <keep-alive>
      <component :is="['Book','Trades','Funding','Details'][show_content]"/>
    </keep-alive>
  </div>
  <div class="btBtn">
    <div class="btBtn__item btBtn__item__left" @click="switchBuySell('buy')">Buy</div>
    <div class="btBtn__item btBtn__item__right" @click="switchBuySell('sell')">Sell</div>
  </div>
</template>

<script>
import { ref, toRefs } from "vue";
import { useStore } from "vuex";
import KLine from './components/KLine'
import NavSymbol from "../../../components/navbar/NavSymbol.vue";
import Book from './components/Book'
import Trades from './components/Trades'
import Funding from './components/Funding'
import Details from './components/Details'

//导航栏切换逻辑
const useNavEffect = (kline, context) => {
  let show_content = ref(0)

  //股票切换
  const changeSymbol = (symbol) => {
    kline.value.changeSymbol(symbol)
  }

  //买或卖
  const switchBuySell = (val) => {
    context.emit('switchBuySell',val)
  }

  let loading = ref(true)

  return { show_content, changeSymbol, switchBuySell, loading }
}

export default {
  emits: ['switchBuySell'],
  components: {
    KLine,
    NavSymbol,
    Book,
    Trades,
    Funding,
    Details
  },
  setup(props, context) {
    console.log('sss')
    const store = useStore();
    const { digitalCurrency } = toRefs(store.state.priceStore);

    const kline = ref(null) //kline组件

    const { show_content, changeSymbol, switchBuySell, loading } = useNavEffect(kline, context)
    return { digitalCurrency, kline, show_content, changeSymbol, switchBuySell, loading };
  },
};
</script>

<style lang='less' scoped>
.price {
  box-sizing: border-box;
  padding-bottom: 1.2rem;
}
.moneyBox {
  display: flex;
  height: 1.8rem;
  box-sizing: border-box;
  padding: 0 0.3rem;
  align-items: center;
  &__left {
    // height: 100%;
    flex: 1;
    .bigMoney {
      font-size: 0.56rem;
      color: #13a467;
      font-weight: 600;
      margin-bottom: 0.1rem;
    }
    .rateMoney {
      font-size: 0.28rem;
      color: #13a467;
      &__item {
        margin-right: 0.2rem;
      }
    }
  }
  &__left--red {
    .bigMoney {
      color: #cf4d65;
    }
    .rateMoney {
      color: #cf4d65;
    }
  }
  &__right {
    &__item {
      font-size: 0.24rem;
      color: #a6b5be;
      text-align: right;
      margin-bottom: 0.12rem;
      &__money {
        margin-left: 0.26rem;
        display: inline-block;
        min-width: 1.1rem;
      }
    }
  }
}
.nav {
  width: 100vw;
  height: 1.00rem;
  background: #20262a;
  white-space: nowrap;
  position: sticky;
  // top: 1.58rem; 
  top: 2.08rem; //1.2 0.88
  left: 0;
  z-index: 899;
  overflow-x: auto;
  margin-bottom: .30rem;
  &__item {
    height: 1.00rem;
    box-sizing: border-box;
    // padding: 0 30rem;
    width: 20%;
    line-height: 1.00rem;
    text-align: center;
    font-size: .32rem;
    color: #fff;
    font-weight: 600;
    display: inline-block;
    border-bottom: .01rem solid #20262a;
    transition: all 0.5s;
    &--active {
      color: #4da2fa;
      border-bottom: .01rem solid #4da2fa;
    }
  }
}
.btBtn {
  width: 100vw;
  height: 1.2rem;
  background: #20262a;
  position: fixed;
  left: 0;
  bottom: 1.12rem;
  z-index: 998;
  display: flex;
  justify-content: center;
  align-items: center;
  &__item {
    width: 3.2rem;
    height: 0.8rem;
    border-radius: 0.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.32rem;
    color: #fff;
    background: #13a467;
  }
  &__item__left {
    margin-right: 0.28rem;
  }
  &__item__right {
    background: #cf4d65;
  }
}
</style>
