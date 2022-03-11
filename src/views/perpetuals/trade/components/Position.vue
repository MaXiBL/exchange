<template>
  <div class="wrap">
    <div class="topBox">
      <h1 class="topBox__h1">ETH-USD</h1>
      <span class="topBox__h2">Sell 10X</span>
      <div class="topBox__btn">Close Position</div>
    </div>
    <div class="tableC">
      <div class="tableC__item">
        <div class="tableC__item__key">Average Open</div>
        <div class="tableC__item__value">790.1 USD</div>
      </div>
      <div class="tableC__item">
        <div class="tableC__item__key">Average Close</div>
        <div class="tableC__item__value">800.0 USD</div>
      </div>
      <div class="tableC__item">
        <div class="tableC__item__key">Net Funding</div>
        <div class="tableC__item__value">-</div>
      </div>
      <div class="tableC__item">
        <div class="tableC__item__key">Liquidation Price</div>
        <div class="tableC__item__value">900.1 USD</div>
      </div>
      <div class="tableC__item">
        <div class="tableC__item__key">Unrezlized P&amp;L</div>
        <div class="tableC__item__value">0.0 USD</div>
      </div>
      <div class="tableC__item">
        <div class="tableC__item__key">Realized P&amp;L</div>
        <div class="tableC__item__value">0.8 USD</div>
      </div>
      <div class="tableC__item">
        <div class="tableC__item__key">Open Interest</div>
        <div class="tableC__item__value">20.00 ETH</div>
      </div>
      <div class="tableC__item">
        <div class="tableC__item__key">Leverage</div>
        <div class="tableC__item__value">1.12 X</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Position",
};
</script>

<style lang='less' scoped>
.topBox {
  height: 1.00rem;
  background: #20262a;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 .30rem;
  &__h1 {
    font-size: .36rem;
    color: #fff;
    font-weight: 500;
    margin-right: .20rem;
  }
  &__h2 {
    font-size: .28rem;
    color: #cd4f66;
    flex: 1;
  }
  &__btn {
    min-width: 1.40rem;
    height: .56rem;
    box-sizing: border-box;
    padding: 0 .20rem;
    border-radius: .10rem;
    background: #282e33;
    text-align: center;
    line-height: .56rem;
    color: #a6b5be;
    font-size: .24rem;
  }
}
.tableC {
  background: #121619;
  box-sizing: border-box;
  padding: .20rem .30rem;
  &__item {
    display: flex;
    align-items: center;
    font-size: .24rem;
    color: #a6b5be;
    margin-bottom: .22rem;
    &__key {
      flex: 1;
    }
  }
}
.topBox2 {
  height: 1.20rem;
  background: #20262a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 .30rem;
  position: relative;
  &__titleBox {
    display: flex;
    align-items: center;
  }
  &__time {
    font-size: .20rem;
    color: #a6b5be;
    margin-top: .08rem;
  }
  .topBox__btn {
    position: absolute;
    right: .30rem;
  }
}
.divider {
  height: .40rem;
  background: #181c1f;
}
.greenColor {
  color: #13a467 !important;
}
</style>
