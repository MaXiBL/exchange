<template>
  <div class="wrap-box">
    <div class="box">
      <div class="a">Portfolio Value</div>
      <div class="b">$0.00</div>
      <div class="num">
        <p></p>
        <p>$0.00(0.00%)</p>
        <p>Past Week</p>
      </div>
      <div class="dian">
        <div>
          <p>Margin Usage</p>
          <p>_</p>
        </div>
        <div>
          <p>Free Collateral</p>
          <p>_</p>
        </div>
        <div>
          <p>Leverage</p>
          <p>_</p>
        </div>
        <div>
          <p>Buying Power</p>
          <p>_</p>
        </div>
      </div>
      <div class="font">
        Connect your Ethereum wallet todeposit funds & start trading.
      </div>
      <div class="btn">Connect wallet</div>
      <!-- <div class="btn" v-if="!connectAddressId" @click.stop="handleSwitchPurse()">Connect wallet</div>
      <div class="WithdrawalsDeposit" v-else>
        <div @click="WithdrawalsDeposit('Withdraw')">Withdrawals</div>
        <div @click="WithdrawalsDeposit('Deposit')">Deposit</div>
      </div> -->
    </div>
  </div>
  <div class="pTitle">Markets</div>
  <data-table :captionList='captionList' :api='api' ></data-table>

</template>

<script>
import dataTable from '../../../../components/datatable/dataTable.vue'
import { ref } from 'vue'
let gainList = () => {
    let captionList = [
        {
            value: 'Market'
        },
        {
            value: 'IndexPrice'
        },
        {
            value: '24hChange'
        },
        {
            value: '1hFunding'
        },
        {
            value: 'OpenInterest'
        }
    ]
    let api = {
        url: ''
    }
    return {
        captionList, api
    }
}
export default {
    components: {
        dataTable
    },
    setup() {
        const { captionList, api } = gainList()
        return {
            captionList,
            api
        }
    }
}
</script>

<style lang='less' scoped>
.wrap-box{
  width: 100vw;
  box-sizing: border-box;
  padding: 0 .30rem;
}
.box {
  margin: 0.6rem auto;
  // width: 6.9rem;
  width: 100%;
  box-sizing: border-box;
  background: #20262a;
  border-radius: 0.1rem;
  padding: 0.6rem 0.4rem 0.7rem 0.4rem;
  .a {
    font-size: 0.28rem;
    font-weight: 400;
    line-height: 0.36rem;
    color: #a6b5be;
  }

  .b {
    font-size: 0.52rem;
    font-weight: 600;
    line-height: 0.92rem;
    color: #ffffff;
    opacity: 1;
  }

  .dian {
    font-size: 0.28rem;
    font-weight: 400;
    line-height: 0.36rem;
    color: #a6b5be;

    div {
      display: inline-block;
      width: 50%;
      margin-bottom: 0.36rem;
    }
  }

  .btn {
    width: 100%;
    height: 1rem;
    border: 0.02rem solid #4da2fa;
    opacity: 1;
    border-radius: 0.1rem;
    font-size: 0.36rem;
    font-weight: 500;
    line-height: 1rem;
    color: #4da2fa;
    opacity: 1;
    text-align: center;
  }

  .font {
    width: 100%;
    font-size: 0.28rem;
    font-weight: 400;
    line-height: 0.44rem;
    color: #a6b5be;
    opacity: 1;
    margin: 0.4rem 0;
  }

  .WithdrawalsDeposit {
    display: flex;
    justify-content: space-between;

    div {
      // width: 320rpx;
      width: 3rem;
      height: 0.8rem;
      line-height: 0.8rem;
      text-align: center;
      background: #4da2fa;
      opacity: 1;
      border-radius: 0.1rem;
      font-size: 0.32rem;
      font-family: PingFang SC;
      font-weight: 600;
      color: #ffffff;
      opacity: 1;
    }
  }

  .num {
    display: flex;

    font-size: 0.28rem;
    font-weight: 400;
    line-height: 0.36rem;
    color: #a6b5be;
    margin-bottom: 0.6rem;

    p:nth-child(2) {
      color: #23d5b3;
      margin-right: 0.1rem;
    }
  }
}
</style>
