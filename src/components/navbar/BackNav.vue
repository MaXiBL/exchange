<template>
  <div class="back" :class="{'back--fullW':fullW}">
    <div @click="back" class="back__inner">
      <img class="img-back" src="../../assets/image/icon_back.png" />
      <span>{{title}}</span>
    </div>
  </div>
  <!-- <div class="template"></div> -->
</template>

<script>
import { useRouter } from 'vue-router'
export default{
  props: {
    title: {
      type: String,
      default: 'back'
    },
    fullW: {
      type: Boolean,
      default: false
    }
  },
  setup(){
    const router = useRouter()
    const back = () => { router.back() }
    return {back}
  }
}
</script>

<style scoped lang='less'>
.back{
  width: 50vw;
  // height: .56rem;
  height: 1.20rem;
  font-size: .36rem;
  color: #fff;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 .30rem;
  position: fixed;
  top: 0;
  z-index: 999;
  background: #181C1F;
  &--fullW{
    width: 100vw;
  }
  .back__inner{
    display: flex;
    align-items: center;
    .img-back{
      width: .18rem;
      height: .34rem;
      margin-right: .20rem;
    }
  }
}
.template{
  height: .56rem;
}
</style>
