export const user = {
  state: () => ({
    //用户的钱包地址
    walletAddress: {
      type: JSON.parse(localStorage.getItem('walletAddress'))?.type ? JSON.parse(localStorage.getItem('walletAddress'))?.type : '', //类型
      address: JSON.parse(localStorage.getItem('walletAddress'))?.address ? JSON.parse(localStorage.getItem('walletAddress'))?.address : ''  //地址
    }
  }),
  mutations: {
    setWalletAddress(state, val){
      state.walletAddress = val
      localStorage.setItem('walletAddress', JSON.stringify(val))
    }
  }
}
