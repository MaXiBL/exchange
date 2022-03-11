<template>
  <div class="sxNav">
    <div class="sv">
      <div class="item" v-for="(item, index) in tabs" :key='index'
        :class='{"item--active":activeTab==index}'
        @click="changeTab(index)">
        {{item}}
      </div>
    </div>
  </div>
  <div class="placeholder"></div>
</template>

<script>
export default{
  name: 'NavBar',
  props: {
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
.sxNav{
  width: 100%;
  height: .88rem;
  position: fixed;
  // top: 0;
  left: 0;
  z-index: 999;
  background: #181C1F;
  .sv{
    width: 100%;
    height: 100%;
    display: flex;
    white-space: nowrap;
    align-items: center;
    // position: relative;
    .item{
      display: inline-block;
      vertical-align: bottom;
      box-sizing: border-box;
      height: 100%;
      min-width: 1.40rem;
      padding: 0 .30rem;
      font-size: .36rem;
      color: #fff;
      text-align: center;
      line-height: .80rem;
      border-bottom: .02rem solid rgba(0,0,0,0);
      transition: all 0.5s;
      // position: relative;
      top: 0;
      &--active{
        color: #4DA2FA;
        border-bottom: .02rem solid #4DA2FA;
      }
    }
  }
}
.placeholder{
  height: .88rem;
}
</style>
