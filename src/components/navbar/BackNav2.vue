<template>
  <div class="back">
    <div class="back__icon" @click="back">
      <img class="img-back" src="../../assets/image/icon_back.png" />
    </div>
    <div class="back__title">{{title}}</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default{
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup(){
    const router = useRouter()
    const back = () => { router.back() }
    return { back }
  }
}
</script>

<style lang="less" scoped>
.back{
  width: 100vw;
  height: 1.20rem;
  background: #181C1F;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 .30rem;
  &__icon{
    width: 1.20rem;
    height: 100%;
    display: flex;
    align-items: center;
    .img-back{
      width: .18rem;
      height: .34rem;
    }
  }
  &__title{
    width: calc(100% - 1.20rem);
    box-sizing: border-box;
    padding: 0 1.20rem 0 0;
    font-size: .36rem;
    color: #fff;
    text-align: center;
  }
}
</style>
