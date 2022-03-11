<template>
  <BackNav2 title='I am market maker'/>
  <NavBar :tabs='["Active","History"]' ref='nav' @change='changeTab'/>
  <div v-show="currentIndex==0">
    <MakerProDetail/>
    <div class="addBtn">
      <el-button type="primary" @click="toCreate">Launch one round collect</el-button>
    </div>
  </div>
  <div v-show="currentIndex==1">
    <MakerProList/>
  </div>
</template>

<script>
import NavBar from '../../../components/navbar/NavBar'
import MakerProDetail from './components/makerProDetail'
import MakerProList from './components/makerProList'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

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
    MakerProDetail,
    MakerProList
  },
  setup(){
    const { currentIndex, changeTab } = useNavSwitchEffect()

    //创建
    const router = useRouter()
    const toCreate = () => {
      router.push({ path: '/createMakerPro' })
    }

    return { currentIndex, changeTab, toCreate }
  }
}
</script>

<style scoped lang='less'>
.addBtn{
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: .50rem;
}
</style>
