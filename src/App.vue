<template>
  <Header />
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>
  <Tabbar />
</template>

<script>
import Header from './components/header/Header'
import Tabbar from './components/tabbar/Tabbar'

export default {
  components: {
    Header,
    Tabbar
  },
  name: 'App'
}
</script>

<style lang='less' scoped>
</style>
