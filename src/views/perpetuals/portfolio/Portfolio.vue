<template>
  <NavBar2 :tabs='["Overview","Positions","Orders","Fees","History"]' @change='changeTab'/>
  <keep-alive>
    <component :is='["Overview","Positions","Orders","Fees","History"][currentIndex]' />
  </keep-alive>
</template>

<script>
import { ref } from 'vue'
import NavBar2 from '../../../components/navbar/NavBar2'
import Overview from './components/Overview'
import Positions from './components/Positions'
import Orders from './components/Orders'
import Fees from './components/Fees'
import History from './components/History'

//导航栏切换逻辑
const useNavSwitchEffect = () => {
  let currentIndex = ref(0)
  const changeTab = (index) => {
    currentIndex.value = index
  }
  return { currentIndex, changeTab }
}

export default{
  components: {
    NavBar2,
    Overview,
    Positions,
    Orders,
    Fees,
    History
  },
  setup(){
    const { currentIndex, changeTab } = useNavSwitchEffect()
    return { currentIndex, changeTab } 
  }
}
</script>

<style lang='less' scoped></style>
