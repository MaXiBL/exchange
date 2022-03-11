<template>
  <div class="wrap-image">
    <img class="image" src="../../assets/image/temp/bg/bg_bluechip@2x_1.png"/>
  </div>
  <div class="wrap-image wrap-image2">
    <img class="image" src="../../assets/image/temp/bg/bg_bluechip@2x_2.png"/>
  </div>
  <div class="Announcement">
    <div>Announcement: </div>
    <div> Chinese user registration and IP login are prohibited </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default{
  setup(){
    // let loading = ref(true)
    // return { loading }
  }
}
</script>

<style lang='less' scoped>
.wrap-image{
  width: 100vw;
  position: relative;
  // padding-top: 1056%;
  padding-top: 400%;
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
.wrap-image2{
  padding-top: 656%;
}
.Announcement {
  width: 100vw;
  position: fixed;
  top: 1.20rem;
  left: 0;
  padding: .20rem .30rem;
  background-color: rgba(207, 77, 101, 0.2);
  div{
    font-size: .28rem;
    font-weight: 400;
    line-height: .34rem;
    color: #CF4D65;
    opacity: 1;
  }
}
</style>
