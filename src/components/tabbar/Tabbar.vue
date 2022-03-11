<template>
  <div class="tabbar" :class="{'tabbar--none':currentIndex==-1}">
    <router-link v-for="(item, index) in tabs" :key='item.text' :to='item.to'
      class="item">
      <img class="item__img" :src="require(`../../assets/image/tabbar/${item.icon}${index==currentIndex ? 'press' : 'normal'}@2x.png`)"/>
      <span class="item__title">{{item.text}}</span>
    </router-link>
  </div>
  <div class="placeholder" :class="{'placeholder--none':currentIndex==-1}"></div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
export default{
  name: 'Tabbar',
  setup(){
    //根据路由计算当前下标值
    const countIndexByRoute = (path) => {
      if(path=='/'){
        return 0
      }else if(path.match('/perpetuals$')){
        return 1
      }else if(path.match('/invest$')){
        return 2
      }else if(path.match('/lending$')){
        return 3
      }else if(path.match('/about$')){
        return 4
      }else{
        return -1
      }
    }
    
    let route = useRoute()

    let val = countIndexByRoute(route.path)
    let currentIndex = ref(val)

    watch(route, (newValue, old)=>{
      let path = newValue.path
      currentIndex.value = countIndexByRoute(path)
    })

    const tabs = [
      { icon: 'ic_bluechip_', text: 'Bluechip', to: {name: 'Bluechip'} },
      { icon: 'ic_perpetuals_', text: 'Perpetuals', to: {name: 'Perpetuals'} },
      { icon: 'ic_invest_', text: 'Invest', to: {name: 'Invest'} },
      { icon: 'ic_lending_', text: 'Lending', to: {name: 'Lending'} },
      { icon: 'ic_about_', text: 'About', to: {name: 'About'} }
    ]

    return { tabs, currentIndex }
  }
}
</script>

<style lang='less' scoped>
.tabbar{
  width: 100vw;
  height: 1.12rem;
  background: #181C1F;
  box-sizing: border-box;
  border-top: .01rem solid rgba(166,181,190,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 900;
  &--none{
    height: 0;
    overflow: hidden;
  }
  .item{
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: .2rem;
    color: #A6B5BE;
    &__img{
      width: 0.56rem;
      height: 0.56rem;
      margin-bottom: .02rem;
    }
  }
  a{
    text-decoration: none;
  }
  .router-link-active{
    color: #4DA2FA;
  }
}
.placeholder{
  width: 100%;
  height: 1.12rem;
  &--none{
    height: 0;
    overflow: hidden;
  }
}
</style>
