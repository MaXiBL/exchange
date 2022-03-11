<template>
  <div class="list">
    <div class="item">
      <div class="item__line">
        <div class="item__line__per" style="color:#FFB060">Period II</div>
        <div class="item__line__per item__line__per--right">
          <div class="label">Ended</div>
        </div>
      </div>
      <div class="item__line">
        <div class="item__line__per">Market-making APY</div>
        <div class="item__line__per item__line__per--right" style="color:#68C95A">20.88%</div>
      </div>
      <div class="item__line">
        <div class="item__line__per">Start date</div>
        <div class="item__line__per item__line__per--right">30 May 2021 21:00 UTC</div>
      </div>
      <div class="item__line">
        <div class="item__line__per">End date</div>
        <div class="item__line__per item__line__per--right">17 Dec 2021 22:00 UTC</div>
      </div>
      <div class="item__line">
        <div class="item__line__per">Total skated</div>
        <div class="item__line__per item__line__per--right">5.689.345 USDT</div>
      </div>
      <div class="item__line">
        <div class="item__line__per">Total yield</div>
        <div class="item__line__per item__line__per--right">100.000.00 USDT/ 15%</div>
      </div>
    </div>

    <div class="item">
      <div class="item__line">
        <div class="item__line__per" style="color:#FFB060">Period II</div>
        <div class="item__line__per item__line__per--right">
          <div class="label">Ended</div>
        </div>
      </div>
      <div class="item__line">
        <div class="item__line__per">Market-making APY</div>
        <div class="item__line__per item__line__per--right" style="color:#68C95A">20.88%</div>
      </div>
      <div class="item__line">
        <div class="item__line__per">Start date</div>
        <div class="item__line__per item__line__per--right">30 May 2021 21:00 UTC</div>
      </div>
      <div class="item__line">
        <div class="item__line__per">End date</div>
        <div class="item__line__per item__line__per--right">17 Dec 2021 22:00 UTC</div>
      </div>
      <div class="item__line">
        <div class="item__line__per">Total skated</div>
        <div class="item__line__per item__line__per--right">5.689.345 USDT</div>
      </div>
      <div class="item__line">
        <div class="item__line__per">Total yield</div>
        <div class="item__line__per item__line__per--right">100.000.00 USDT/ 15%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'MakerProList'
}
</script>

<style scoped lang='less'>
.list{
  width: 100vw;
  box-sizing: border-box;
  padding: .30rem;
  .item{
    width: 100%;
    background: #20262A;
    border-radius: .10rem;
    box-sizing: border-box;
    padding: .20rem;
    margin-bottom: .20rem;
    &__line{
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: .26rem;
      font-size: .32rem;
      color: #fff;
      &__per{
        .label{
          width: .90rem;
          height: .32rem;
          border-radius: .8rem;
          background: #BDC3C7;
          font-size: .12rem;
          color: #fff;
          text-align: center;
          line-height: .32rem;
        }
      }
      &__per--right{
        flex: 1;
        text-align: right;
        font-size: .28rem;
        color: #C5D0DD;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>
