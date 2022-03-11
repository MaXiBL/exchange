<template>
  <div class="wallet" @click.self="hide">
    <div class="box" v-if="!walletAddress.address">
      <h1>Digital wallets</h1>
      <div class="menu" @click="connectWallet">
        <img class="menu__icon" src="../../assets/image/wallet/ic_metaMask@2x.png" />
        <span class="menu__title">MetaMask</span>
        <img class="menu__access" src="../../assets/image/wallet/bt_back@2x.png" />
      </div>
      <div class="menu" @click="connectWallet_wc">
        <img class="menu__icon" src="../../assets/image/wallet/ic_walletConnect@2x.png" />
        <span class="menu__title">WalletConnect</span>
        <img class="menu__access" src="../../assets/image/wallet/bt_back@2x.png" />
      </div>
      <div class="menu">
        <img class="menu__icon" src="../../assets/image/wallet/ic_imToken@2x.png" />
        <span class="menu__title">imToken</span>
        <img class="menu__access" src="../../assets/image/wallet/bt_back@2x.png" />
      </div>
      <div class="menu">
        <img class="menu__icon" src="../../assets/image/wallet/ic_tokenPocket@2x.png" />
        <span class="menu__title">TokenPocket</span>
        <img class="menu__access" src="../../assets/image/wallet/bt_back@2x.png" />
      </div>
    </div>
    <div class="box box2" v-else>
      <h1>Wallet</h1>
      <div class="rect">
        <img class="rect__img" src="../../assets/image/wallet/ic_metaMask@2x.png" />
        <span class="rect__span1">MetaMask</span>
      </div>
      <div class="rect copy" @click="copyWalletAddress" :data-clipboard-text="walletAddress.address">
        <span class="rect__walletAddress">{{walletAddress.address.substr(0,6)+'......'+walletAddress.address.substr(walletAddress.address.length-5)}}</span>
        <img class="rect__rightImg" src="../../assets/image/wallet/ic_copy@2x.png" />
      </div>
      <div class="button" @click="brokenLink">Broken Link</div>
    </div>
  </div>
</template>

<script>
import { ref, toRefs } from 'vue'
import { useStore } from 'vuex'
import Web3 from 'web3'
import ClipboardJS from "clipboard"
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { showTip } from '../../utils/utils'

//隐藏与显示的逻辑
const useShowEffect = (context) => {
  const hide = () => {
    context.emit('hide')
  }
  return { hide }
}

//连接钱包的逻辑
const useConnectWalletEffect = (hide) => {
  const store = useStore()

  //连接钱包（metamask钱包）
  const web3 = ref(false)
  // 旧的，不使用
  const connectWallet2 = async () => {
    if(window.ethereum){
      // console.log('有装metamask插件')
      if(!web3?.value){
        web3.value = new Web3(window.ethereum)
      }

      //连接
      await window.ethereum.enable()

      console.log('hhh:')
      console.log(window.ethereum.isConnected())

      //获取metamask的账户
      web3.value.eth.getAccounts((err, accs)=>{
        let address = accs[0]
        let val = {
          name: 'metamask',
          address: address
        }
        store.commit('setWalletAddress', val)

        hide()
      })

      /*
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      let val = {
        name: 'metamask',
        address: account
      }
      store.commit('setWalletAddress', val)

      hide()

      ethereum.on('accountsChanged', function (accounts) {
        // Time to reload your interface with accounts[0]!
      });
      */

    }else{
      console.log('没有安装metamask')
    }
  }
  const connectWallet = async () => {
    if(window.ethereum){
      // console.log('有装metamask插件')
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      let val = {
        name: 'metamask',
        address: account
      }
      store.commit('setWalletAddress', val)

      hide()

      // window.ethereum.on('accountsChanged', function (accounts) {
      //   // Time to reload your interface with accounts[0]!
      // });

    }else{
      console.log('没有安装metamask')
    }
  }

  //连接钱包（walletConnect的方式）
  const connectWallet_wc = async () => {
    // hide()
    const connector = new WalletConnect({
      bridge: "https://bridge.walletconnect.org", // Required
      qrcodeModal: QRCodeModal,
    });
    
    // Check if connection is already established
    if (!connector.connected) {
      // create new session
      connector.createSession();
    }
    
    connector.on("session_update", (error, payload) => {
      if (error) {
        throw error;
      }

      // Get updated accounts and chainId
      const { accounts, chainId } = payload.params[0];
    });

    connector.on("disconnect", (error, payload) => {
      if (error) {
        throw error;
      }

      // Delete connector
    });

  }

  //复制钱包地址
  const copyWalletAddress = () => {
    let clipboard = new ClipboardJS('.copy')
    clipboard.on('success', e=>{
      showTip('Replicating Success')
      console.log('复制成功')
      clipboard.destroy()
    })
    clipboard.on('error', e=>{
      console.log('该浏览器不支持自动复制')
      clipboard.destroy()
    })
  }

  //断开连接
  const brokenLink = () => {
    localStorage.setItem('walletAddress','')
    let val = {
      type: '',
      address: ''
    }
    store.commit('setWalletAddress', val)

    hide()
  }

  return { connectWallet, copyWalletAddress, brokenLink, connectWallet_wc }
}

export default {
  name: 'Wallet',
  setup(props, context){
    const store = useStore()
    const { walletAddress } = toRefs(store.state.user)

    const { hide } = useShowEffect(context)

    const { connectWallet, copyWalletAddress, brokenLink, connectWallet_wc } = useConnectWalletEffect(hide)

    return { hide, connectWallet, walletAddress, copyWalletAddress, brokenLink, connectWallet_wc }
  }
}
</script>

<style lang='less' scoped>
.wallet{
  position: fixed;
  top: 1.2rem;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: calc(100vh - 1.20rem);
  background: rgba(24,28,31,.8);
  display: flex;
  justify-content: center;
  align-items: center;
  .box{
    width: 6.70rem;
    height: 7.20rem;
    border-radius: .10rem;
    background: #fff;
    box-sizing: border-box;
    padding: .70rem .70rem 0;
    h1{
      font-size: .48rem;
      font-weight: 600;
      color: #161516;
      margin-bottom: .80rem;
    }
    .menu{
      width: 100%;
      height: .70rem;
      background: #4DA2FA;
      font-size: .28rem;
      color: #fff;
      box-sizing: border-box;
      padding: 0 .40rem;
      border-radius: .10rem;
      display: flex;
      align-items: center;
      margin-bottom: .38rem;
      &__icon{
        width: .34rem;
        height: .34rem;
        margin-right: .40rem;
      }
      &__title{
        flex: 1;
      }
      &__access{
        width: .33rem;
        height: .26rem;
      }
    }
    .rect{
      width: 100%;
      height: .7rem;
      box-sizing: border-box;
      border: .02rem solid #f4f4f4;
      border-radius: .10rem;
      margin-bottom: .2rem;
      display: flex;
      align-items: center;
      padding: 0 .2rem;
      &__img{
        width: .34rem;
        height: .34rem;
        margin-right: .10rem;
        font-size: .28rem;
        color: #6B757B;
      }
      &__span1{
        font-weight: 500;
      }
      &__walletAddress{
        width: calc(100% - .68rem);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &__rightImg{
        width: .28rem;
        height: .28rem;
        margin-left: .40rem;
      }
    }
    .button{
      width: 100%;
      height: .7rem;
      border-radius: .10rem;
      background: #CF4D65;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: .28rem;
      color: #fff;
      margin-top: .70rem;
    }
  }
  .box2{
    height: 5.66rem;
  }
}
</style>
