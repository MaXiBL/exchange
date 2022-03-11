<template>
  <BackNav title='I am investor'/>
  <NavBar :tabs='["Active","Ended"]' ref='nav' @change='changeTab'/>
  <div v-show="currentIndex==0">
    <InvestList/>
  </div>
  <div v-show="currentIndex==1">
    <InvestList status='end'/>
  </div>
</template>

<script>
import { ref } from 'vue'
import NavBar from '../../../components/navbar/NavBar'
import InvestList from './components/InvestList'

//导航栏逻辑
const useNavSwitchEffect = () => {
  let currentIndex = ref(0)
  const changeTab = (index) => {
    console.log(index)
    currentIndex.value = index
  }

  return { currentIndex, changeTab }
}

export default{
  components: {
    NavBar,
    InvestList
  },
  setup(){
    const { currentIndex, changeTab } = useNavSwitchEffect()
    return { currentIndex, changeTab }
  }
}
</script>

<style scoped lang='less'></style>
