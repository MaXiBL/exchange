<template>
  <BackNav title='Your Borrow'/>
  <div class="totalShow">
    <span>Total Balance</span>
    <span class="totalShow__money">$10000000.0000</span>
  </div>
  <div class="box-select1">
    <el-select v-model="value" placeholder="Select">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      >
      </el-option>
    </el-select>
  </div>
  <div class="box1">
    <div class="box1__th">
      <span class="box1__th__left">Asset</span>
      <span>USDT</span>
    </div>
    <div class="box1__td">
      <span class="box1__td__left">Balance / Value</span>
      <span>58824 / $58824.18</span>
    </div>
    <div class="box1__td">
      <span class="box1__td__left">Borrows / Value</span>
      <span>58824 / $58824.18</span>
    </div>
    <div class="box1__td">
      <span class="box1__td__left">Borrow Rate(APR)</span>
      <span class="box1__td__rate">8.21%</span>
    </div>
    <div class="subBox1">
      <div class="subBox1__td">
        <span>Maintenance collateral ratio</span>
        <span class="subBox1__td__bigText subBox1__td__bigText--fff">150%</span>
      </div>
      <div class="subBox1__td">
        <span>Interest pay method</span>

        <span class="subBox1__td__bigText"><span class="subBox1__td__smallT">day by day</span>0.5% / Day</span>
      </div>
      <div class="subBox1__td">
        <span>Interest payed</span>
        <span class="subBox1__td__bigText"><span class="subBox1__td__smallT">500.0000BTC</span>35Days</span>
      </div>
    </div>
    <div class="btnBox1">
      <div class="btnBox1__item">Deposit</div>
      <div class="btnBox1__item" style="background: #E04545">Borrow</div>
      <div class="btnBox1__item" style="background: #68C95A">Repay</div>
      <div class="btnBox1__item" style="background: #EDB12B">Withdraw Funds</div>
    </div>
  </div>
  <div class="box1">
    <div class="box1__th">
      <span class="box1__th__left">Asset</span>
      <span>BTC</span>
    </div>
    <div class="box1__td">
      <span class="box1__td__left">Balance / Value</span>
      <span>58824 / $58824.18</span>
    </div>
    <div class="box1__td">
      <span class="box1__td__left">Borrows / Value</span>
      <span>58824 / $58824.18</span>
    </div>
    <div class="box1__td">
      <span class="box1__td__left">Borrow Rate(APR)</span>
      <span class="box1__td__rate">8.21%</span>
    </div>
    <div class="subBox1">
      <div class="subBox1__td">
        <span>Maintenance collateral ratio</span>
        <span class="subBox1__td__bigText subBox1__td__bigText--fff">150%</span>
      </div>
      <div class="subBox1__td">
        <span>Interest pay method</span>

        <span class="subBox1__td__bigText"><span class="subBox1__td__smallT">day by day</span>0.5% / Day</span>
      </div>
      <div class="subBox1__td">
        <span>Interest payed</span>
        <span class="subBox1__td__bigText"><span class="subBox1__td__smallT">500.0000BTC</span>35Days</span>
      </div>
    </div>
    <div class="btnBox1">
      <div class="btnBox1__item">Deposit</div>
      <div class="btnBox1__item" style="background: #E04545">Borrow</div>
      <div class="btnBox1__item" style="background: #68C95A">Repay</div>
      <div class="btnBox1__item" style="background: #EDB12B">Withdraw Funds</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default{
  setup(){
    const value = ref('')
    const options = [
      {
        value: 'Option1',
        label: 'All',
      },
      {
        value: 'Option2',
        label: 'USDT'
      },
      {
        value: 'Option3',
        label: 'BTC'
      },
      {
        value: 'Option4',
        label: 'ETH'
      }
    ]

    return { options, value }
  }
}
</script>

<style lang='less' scoped>
.totalShow{
  width: 100vw;
  height: 1.00rem;
  box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 .30rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: .36rem;
  color: #4DA2FA;
  &__money{
    font-size: .28rem;
    color: #FFB060;
  }
}
.box-select1{
  width: calc(100vw - .60rem);
  height: .80rem;
  box-sizing: border-box;
  margin: 0 .30rem .20rem;
  background: #1D2025;
  border-radius: .10rem;
}
::v-deep{
  .el-select{
    width: 100%;
    line-height: .80rem;
    .el-input{
      line-height: .80rem;
      .el-input__inner{
        background: #1D2025;
        font-size: .30rem;
        color: #fff;
        border: none;
      }
    }
  }
}
.box1{
  width: calc(100vw - .60rem);
  margin: 0 .30rem .40rem;
  background: #1D2025;
  border-radius: .10rem;
  box-sizing: border-box;
  padding: 0 .20rem;
  &__th{
    height: .90rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .34rem;
    color: #fff;
    box-sizing: border-box;
    border-bottom: .02rem solid #181C1F;
    &__left{
      color: #FFB060;
    }
  }
  &__td{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: .80rem;
    font-size: .28rem;
    color: #C5D0DD;
    box-sizing: border-box;
    &__rate{
      color: #FF3E3E;
    }
    &__left{
      color: #fff;
      font-size: .32rem;
    }
  }
  .subBox1{
    width: 100%;
    background: #181C1F;
    border-radius: .10rem;
    box-sizing: border-box;
    padding: .30rem .20rem;
    &__td{
      width: 100%;
      height: .80rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: .28rem;
      color: #fff;
      &__bigText{
        font-size: .32rem;
        color: #C5D0DD;
        &--fff{
          color: #fff;
        }
      }
      &__smallT{
        font-size: .20rem;
        color: #6B757B;
        margin-right: .10rem;
      }
    }
  }
  .btnBox1{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: .40rem .30rem;
    &__item{
      width: 2.60rem;
      height: .66rem;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: .28rem;
      color: #fff;
      background: #307ADE;
      margin-bottom: .30rem;
      border-radius: .20rem;
    }
    &__item:nth-child(2n){
      margin-left: .60rem;
    }
  }
}
</style>
