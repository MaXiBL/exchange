<template>
  <div class="wrap-image">
    <img class="image" src="../../assets/image/temp/bg/bg_lending@2x.png"/>
  </div>
  <div class="sv">
    <img class="sv__img" src="../../assets/image/temp/markets@2x.png" />
  </div>
</template>

<script></script>

<style lang='less' scoped>
.wrap-image{
  width: 100vw;
  position: relative;
  padding-top: 198%;
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
    width: 24.00rem;
    height: 16.90rem;
  }
}
</style>
