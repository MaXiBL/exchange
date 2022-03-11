<template>
  <div class="wrap">
    <div class="sv">
      <div class="item" v-for="(item, index) in tabs" :key='index' @click="changeTab(index)"
        :class="{'item--active': activeTab==index}">
        {{item}}
      </div>
    </div>
  </div>
  <div class="placeholder"></div>
</template>

<script>
export default {
  props:{
    isTop: {
      type: Number,
      default: 0
    },
    tabs: {
      type: Array
    }
  },
  emits: ['change'],
  data(){
    return{
      activeTab: 0
    }
  },
  methods:{
    changeTab(index){
      this.activeTab = index
      this.$emit('change',index)
    }
  }
}
</script>

<style lang='less' scoped>
.wrap{
  width: 100%;
  position: fixed;
  left: 0;
  // top: 0;
  z-index: 998;
  .sv{
    width: 100%;
    height: 1.10rem;
    box-sizing: border-box;
    padding-top: .28rem;
    padding-left: .30rem;
    background: #181C1F;
    display: flex;
    white-space: nowrap;
    .item{
      display: inline-block;
      height: .54rem;
      box-sizing: border-box;
      padding: 0 .24rem;
      border-radius: .10rem;
      background: #0F1215;
      font-size: .24rem;
      color: #fff;
      line-height: .54rem;
      margin-right: .16rem;
      &--active{
        color: #4DA2FA;
      }
    }
  }
}
.placeholder{
  width: 100vw;
  height: 1.10rem;
}
</style>
