<template>
  <NavBar :tabs='["Portfolio","Price","Trade"]' @change='changeTab' ref='nav'/>
  <!-- <keep-alive>
    <component :is='["Portfolio","Price","Trade"][currentIndex]'/>
  </keep-alive> -->

  <div v-show="currentIndex==0">
    <Portfolio />
  </div>
  <div v-show="currentIndex==1">
    <keep-alive>
      <Price @switchBuySell='switchBuySell' ref='price' />
    </keep-alive>
  </div>
  <div v-show="currentIndex==2">
    <Trade ref="trade" @changeSymbol='changeSymbol' />
  </div>
</template>

<script>
import { ref } from 'vue'
import NavBar from '../../components/navbar/NavBar'
import Portfolio from './portfolio/Portfolio'
import Price from './price/Price'
import Trade from './trade/Trade'

//导航栏逻辑
const useNavSwitchEffect = (price, trade, nav) => {
  let currentIndex = ref(0)
  const changeTab = (index) => {
    currentIndex.value = index
  }

  const switchBuySell = (val) => {
    // currentIndex.value = 2 //切换到Trade组件
    nav.value.changeTab(2)
    trade.value.switchBuySell(val)
  }

  //切换股票
  const changeSymbol = (symbol) => {
    price.value.changeSymbol(symbol)
  }

  return { currentIndex, changeTab, switchBuySell, changeSymbol }
}

export default{
  components: {
    NavBar,
    Portfolio,
    Price,
    Trade
  },
  setup(){
    const price = ref(null) //price组件
    const trade = ref(null) //trade组件
    const nav = ref(null)  //navBar组件

    const { currentIndex, changeTab, switchBuySell, changeSymbol } = useNavSwitchEffect(price, trade, nav)
    return { currentIndex, changeTab, switchBuySell, changeSymbol, price, trade, nav }
  }
}
</script>

<style lang='less' scoped></style>
