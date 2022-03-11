<template>
  <div class="box-btn">
    <router-link class="btn__item" style="background: #FFAF27;" to='Investor'>I'm investor</router-link>
    <router-link class="btn__item" to='Maker'>I'm market maker</router-link>
  </div>
  <div class="wrap-image">
    <img class="image" src="../../assets/image/temp/bg/bg_invest@2x.png"/>
  </div>
  <div class="sv">
    <img class="sv__img" src="../../assets/image/temp/leaderboard.png" />
  </div>
</template>

<script></script>

<style lang='less' scoped>
.box-btn{
  background: #181C1F;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: .70rem .56rem;
  .btn__item{
    width: 2.80rem;
    height: .80rem;
    border-radius: .10rem;
    // border: .01rem solid #4DA2FA;
    font-size: .28rem;
    color: #fff;
    line-height: .80rem;
    text-align: center;
    // background: #FFAF27;
    background: #575EFF;
  }
  a{
    text-decoration: none;
  }
}
.wrap-image{
  width: 100vw;
  position: relative;
  padding-top: 577%;
  overflow: hidden;
  .image{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #181C1F;
  }
}
.sv{
  width: 100vw;
  overflow-x: auto;
  &__img{
    width: 21.56rem;
    height: 16.10rem;
  }
}
</style>
