<template>
  <div class="topD">
    <div class="topD__title">
      <img
        class="topD__title__img"
        src="../../../../assets/image/eth_big.png"
      />
      <h1 class="topD__title__h1">Ethereum</h1>
    </div>
    <div class="topD__content">
      <p class="p">
        Ethereum is a global,open-source platform for decentralized
        applications.
      </p>
      <p class="p subP">
        Ethereum is a decentralized blockchain platform foundee in 2014.Ethereum
        is an open-source project that is not owned or operated by a single
        individual. This means that anyone,anywhere can download the software
        and begin interacting with the network. Ethereum allows developers to
        make and operate smart contracts,a core piece of infrastructure for any
        decentralized application.
      </p>
      <div class="btn">
        <div class="btn__item">
          <span>Whitepaper</span>
          <img
            class="btn__item__img"
            src="../../../../assets/image/ic_share@2x.png"
          />
        </div>
        <div class="btn__item">
          <span>Website</span>
          <img
            class="btn__item__img"
            src="../../../../assets/image/ic_share@2x.png"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="tableD">
    <div class="tableD__item">
      <span class="tableD__item__name">Market Name</span>
      <span class="tableD__item__value">ETH-USD</span>
    </div>
    <div class="tableD__item">
      <span class="tableD__item__name">Tick Size</span>
      <span class="tableD__item__value">$0.1</span>
    </div>
    <div class="tableD__item">
      <span class="tableD__item__name">Step Size</span>
      <span class="tableD__item__value">0.001 ETH</span>
    </div>
    <div class="tableD__item">
      <span class="tableD__item__name">Minimum Order Size</span>
      <span class="tableD__item__value">0.001 ETH</span>
    </div>
    <div class="tableD__item">
      <span class="tableD__item__name">Maximum Leverage</span>
      <span class="tableD__item__value">25.00x</span>
    </div>
    <div class="tableD__item">
      <span class="tableD__item__name">Maintenance Margin Fraction</span>
      <span class="tableD__item__value">0.0300</span>
    </div>
    <div class="tableD__item">
      <span class="tableD__item__name">Initial Margin Fraction</span>
      <span class="tableD__item__value">0.0400</span>
    </div>
    <div class="tableD__item">
      <span class="tableD__item__name"
        >Incremental Initial Margin Fraction</span
      >
      <span class="tableD__item__value">0.0100</span>
    </div>
    <div class="tableD__item">
      <span class="tableD__item__name">Incremental Position Size</span>
      <span class="tableD__item__value">15.000 ETH</span>
    </div>
  </div>
</template>

<script>
export default{
  name: 'Details'
}
</script>

<style lang='less' scoped>
.topD {
  &__title {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 .30rem .40rem;
    &__img {
      width: .80rem;
      height: .80rem;
    }
    &__h1 {
      font-size: .44rem;
      color: #fff;
      margin-left: .28rem;
    }
  }
  &__content {
    font-size: .28rem;
    color: #fff;
    box-sizing: border-box;
    padding: 0 .30rem;
    line-height: .44rem;
    .p {
      margin-bottom: .20rem;
    }
    .subP {
      color: #a6b5be;
    }
    .btn {
      display: flex;
      align-items: center;
      padding-bottom: .60rem;
      &__item {
        width: 2.24rem;
        height: .60rem;
        border-radius: .10rem;
        background: #6b757b;
        font-size: .26rem;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: .40rem;
        &__img {
          width: .20rem;
          height: .20rem;
          margin-left: .06rem;
        }
      }
    }
  }
}
.tableD {
  box-sizing: border-box;
  padding: 0 .30rem;
  &__item {
    height: .80rem;
    box-sizing: border-box;
    border-bottom: .01rem solid #1f2428;
    display: flex;
    align-items: center;
    &__name {
      font-size: .26rem;
      color: #6b757b;
      flex: 1;
    }
    &__value {
      font-size: .26rem;
      color: #fff;
    }
  }
}
</style>