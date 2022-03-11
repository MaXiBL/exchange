<template>
  <div class="header">
    <img class="logo" src="../../assets/image/logo.png"/>
    <div style="flex:1"></div>
    <div class="button" @click="handleClick" v-if="!walletAddress.address">Connect Wallet</div>
    <div class="walletAddress" v-else @click="handleClick">
      <img class="walletAddress__img" src="../../assets/image/wallet/ic_metaMask@2x.png"/>
      <div class="walletAddress__text">{{walletAddress.address}}</div>
    </div>
  </div>
  <!-- placeholder占位符，因为这个Header组件是固定定位，不占位的 -->
  <div class="placeholder"></div>

  <transition name='slide-fade'>
    <Wallet v-show="show_wallet" @hide='hideWallet'/>
  </transition>
</template>

<script>
import { ref, toRefs, onMounted } from 'vue'
import Wallet from '../wallet/Wallet'
import { useStore } from 'vuex'

//钱包逻辑
const useWalletEffect = () => {
  const show_wallet = ref(false)
  const hideWallet = () => {
    show_wallet.value = false
  }
  const openWallet = () => {
    show_wallet.value = true
  }
  const handleClick = () => {
    if(show_wallet.value){
      show_wallet.value = false
    }else{
      show_wallet.value = true
    }
  }

  return { show_wallet, hideWallet, openWallet, handleClick }
}

export default{
  name: 'Header',
  components: {
    Wallet
  },
  setup(){
    onMounted(()=>{
      // let a = localStorage.getItem('walletAddress')
      // console.log('mmm')
      // console.log(a.address)
    })
    const store = useStore()
    const { walletAddress } = toRefs(store.state.user)
    const { show_wallet, hideWallet, openWallet, handleClick } = useWalletEffect()
    return { show_wallet, hideWallet, openWallet, handleClick, walletAddress }
  }
}
</script>

<style lang='less' scoped>
.header{
  width: 100%;
  height: 1.20rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;;
  padding: 0 .30rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: #181C1F;
  .logo{
    width: 1.74rem;
    height: .58rem;
  }
  .button{
    width: 2.32rem;
    height: .56rem;
    background: #4DA2FA;
    border-radius: .10rem;
    font-size: .24rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .walletAddress{
    width: 1.80rem;
    height: 100%;
    display: flex;
    align-items: center;
    &__img{
      width: .40rem;
      height: .40rem;
      margin-right: .10rem;
    }
    &__text{
      width: calc(100% - 0.5rem);
      font-size: .12rem;
      color: #fff;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
.placeholder{
  width: 100%;
  height: 1.20rem;
  background: rgba(0,0,0,0);
}
.slide-fade-enter-active {transition: all .3s ease;}
.slide-fade-leave-active {transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);}
.slide-fade-enter, .slide-fade-leave-to{transform: translateX(5px);opacity: 0;}
</style>
