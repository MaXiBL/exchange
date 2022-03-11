<template>
  <div class="trade">
    <NavSymbol :showPrice="true" @change='changeSymbol' />

    <div class="box2">
      <div class="box2__left">
        <div class="bsbtn">
          <div
            class="bsbtn__btc"
            :class="{ 'bsbtn__btc--active': buyOrSell == 'buy' }"
            @click="buyOrSell = 'buy'"
          >
            Buy
          </div>
          <div
            class="bsbtn__usdt"
            :class="{ 'bsbtn__usdt--active': buyOrSell == 'sell' }"
            @click="buyOrSell = 'sell'"
          >
            Sell
          </div>
        </div>

        <el-select v-model="selectValue" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <!-- <div class="wrapInput">
          <image
            class="selectImg"
            src="../../static/images/trade/ic_drop.png"
          />
          <picker
            class="picker"
            :value="index_list"
            :range="list"
            range-key="name"
            id="limitOrMarket"
            @change="pickerChange"
          >
            <div class="option">{{ list[index_list].name }}</div>
          </picker>
        </div> -->

        <div class="wrapTitle" v-show="selectValue == '0'">Limit</div>
        <div class="wrapInput" v-show="selectValue == '0'">
          <!-- <input class="input" value="0.0000" /> -->
          <div class="input">
            <el-input placeholder="please input" v-model="usdMoney"/>
          </div>
          <div class="wrapInput__rbtn">USD</div>
        </div>

        <div class="wrapTitle">Size</div>
        <div class="wrapInput">
          <!-- <input class="input" value="0.0000" /> -->
          <div class="input">
            <el-input placeholder="please input" v-model="ethMoney"/>
          </div>
          <div class="wrapInput__rbtn">ETH</div>
        </div>

        <div class="wrapTitle" v-show="selectValue == '1'">
          Leverage<span class="wrapTitle__sub">Up To 25X</span>
        </div>
        <div class="leverage" v-show="selectValue == '1'">
          <div class="leverage__show">0.00X</div>
          <div class="leverage__choose">2X</div>
          <div class="leverage__choose">5X</div>
          <div class="leverage__choose">10X</div>
        </div>

        <div class="table">
          <div class="table__item">
            <span class="table__item__name">Buying Power</span>
            <span class="table__item__value">$1,233.74</span>
          </div>
          <div class="table__item">
            <span class="table__item__name">Cost</span>
            <span class="table__item__value">$49.35</span>
          </div>
          <div class="table__item">
            <span class="table__item__name">Margin Usage</span>
            <span class="table__item__value">0.02%</span>
          </div>
          <div class="table__item">
            <span class="table__item__name">Account leverage</span>
            <span class="table__item__value">-</span>
          </div>
        </div>
        <div class="table">
          <div class="table__item">
            <div class="table__item__name">
              <span>Fee</span>
              <div class="name__label">Taker</div>
            </div>
            <span class="table__item__value">-</span>
          </div>
          <div class="table__item">
            <span class="table__item__name">Total</span>
            <span class="table__item__value">$67,686.95</span>
          </div>
          <div class="table__button" v-show="selectValue == '0'"
            >Place limit order</div
          >
          <div class="table__button" v-show="selectValue == '1'"
            >Place market order</div
          >
        </div>
      </div>
      <div class="box2__right">
        <div class="wrapSelect">
          <span>1 Decimal places</span>
          <img
            class="select__img"
            src="../../../assets/image/ic_drop.png"
          />
        </div>
        <div class="table2">
          <div class="table2__colName">
            <span class="table2__colName__left">Price</span>
            <span>Size</span>
          </div>
          <div class="table2__item" v-for="(item,index) in depthData.asks" :key='index'>
            <span class="table2__item__name">{{item[0]?.toFixed(2)}}</span>
            <span class="table2__item__value">{{item[1]?.toFixed(2)}}</span>
          </div>
        </div>
        <div class="colTable">
          <span class="colTable__item">Spread</span>
          <span class="colTable__item">1.4</span>
          <span class="colTable__item">0.05%</span>
        </div>
        <div class="table2">
          
          <div class="table2__item" v-for="(item,index) in depthData.bids" :key='index'>
            <span class="table2__item__name table2__item__name--green"
              >{{item[0]?.toFixed(2)}}</span
            >
            <span class="table2__item__value">{{item[1]?.toFixed(2)}}</span>
          </div>
          
        </div>
        <div class="table2 table3" :class="{ 'table3--more': more_table }">
          <div class="table2__item">
            <span class="table2__item__name">Index Price</span>
            <span class="table2__item__value">$44,568.14</span>
          </div>
          <div class="table2__item">
            <span class="table2__item__name">Oracle Price</span>
            <span class="table2__item__value">$44,568.35</span>
          </div>
          <div class="table2__item">
            <span class="table2__item__name">24h Change</span>
            <span class="table2__item__value">5.35%</span>
          </div>
          <div class="table2__item">
            <span class="table2__item__name">Next Funding</span>
            <span class="table2__item__value">00:32:34</span>
          </div>
          <div class="table2__item">
            <span class="table2__item__name">Open Interest</span>
            <span class="table2__item__value">3,385.02ETH</span>
          </div>
          <div class="table2__item">
            <span class="table2__item__name">1h Funding</span>
            <span class="table2__item__value">0.000888%</span>
          </div>
          <div class="table2__item">
            <span class="table2__item__name">24h Volume</span>
            <span class="table2__item__value">$3,991,882.062</span>
          </div>
          <div class="table2__item">
            <span class="table2__item__name">24h Trades</span>
            <span class="table2__item__value">284,487</span>
          </div>
        </div>
        <div class="moreBox" @click="more_table = !more_table">
          <div class="moreBox__line"></div>
          <img
            class="moreBox__img"
            :class="{ 'moreBox__img--reverse': more_table }"
            src="../../../assets/image/ic_drop.png"
          />
          <div class="moreBox__line"></div>
        </div>
      </div>
    </div>

    <div class="nav">
      <div
        class="nav__item"
        :class="{ 'nav__item--active': show_content == '0' }"
        @click="show_content = '0'"
      >
        Position
      </div>
      <div
        class="nav__item"
        :class="{ 'nav__item--active': show_content == '1' }"
        @click="show_content = '1'"
      >
        Order
      </div>
      <div
        class="nav__item"
        :class="{ 'nav__item--active': show_content == '2' }"
        @click="show_content = '2'"
      >
        Fills
      </div>
      <div
        class="nav__item"
        :class="{ 'nav__item--active': show_content == '3' }"
        @click="show_content = '3'"
      >
        Payments
      </div>
    </div>

    <keep-alive>
      <component :is='["Position","Order","Fills","Payments"][show_content]' />
    </keep-alive>

  </div>
</template>

<script>
import { ref, toRefs } from 'vue'
import NavSymbol from "../../../components/navbar/NavSymbol.vue";
import Position from './components/Position'
import Order from './components/Order'
import Fills from './components/Fills'
import Payments from './components/Payment'
import { useStore } from 'vuex'

const useBuySellEffect = () => {
  const buyOrSell = ref('buy')
  const switchBuySell = (val) => {
    buyOrSell.value = val
  }

  const show_content = ref(0)

  const more_table = ref(false)
  return { buyOrSell, more_table, show_content, switchBuySell }
}

const useSelectEffect = () => {
  const options = ref([{value: '0', label: 'Limit'},{value: '1', label: 'Market'}])
  let selectValue = ref('0')

  let usdMoney = ref('0.000')
  let ethMoney = ref('0.000')

  return {options, selectValue, usdMoney, ethMoney}
}

export default{
  name: 'Trade',
  emits: ['changeSymbol'],
  components: {
    NavSymbol,
    Position,
    Order,
    Fills,
    Payments
  },
  setup(props, context){
    const store = useStore()
    const { depthData } = toRefs(store.state.priceStore)

    const { buyOrSell, more_table, show_content, switchBuySell } = useBuySellEffect()

    const { options, selectValue, usdMoney, ethMoney } = useSelectEffect()

    //切换股票
    const changeSymbol = (symbol) => {
      context.emit('changeSymbol',symbol)
    }

    return { buyOrSell, more_table, depthData, show_content, switchBuySell, options, selectValue, usdMoney, ethMoney, changeSymbol }
  }
}
</script>

<style lang='less' scoped>
.box2 {
  display: flex;
  box-sizing: border-box;
  padding: .40rem 0 .40rem .30rem;
  color: #fff;
  &__left {
    width: 4.40rem;
    .bsbtn {
      width: 100%;
      height: .60rem;
      background: #0d1012;
      border-radius: .10rem;
      display: flex;
      font-weight: 400;
      margin-bottom: .28rem;
      &__btc,
      &__usdt {
        height: .60rem;
        flex: 1;
        font-size: .28rem;
        color: #a6b5be;
        text-align: center;
        line-height: .60rem;
        transition: all 0.3s;
      }
      &__btc {
        border-radius: .10rem 0 0 .10rem;
        &--active {
          background: #13a467;
          color: #fff;
        }
      }
      &__usdt {
        border-radius: 0 .10rem .10rem 0;
        &--active {
          background: #cf4d65;
          color: #fff;
        }
      }
    }
    .wrapInput {
      width: 100%;
      height: .80rem;
      border-radius: .10rem;
      background: #0d1012;
      position: relative;
      display: flex;
      align-items: center;
      font-size: .28rem;
      color: #fff;
      box-sizing: border-box;
      padding: 0 .20rem;
      margin-bottom: .28rem;
      position: relative;
      .selectImg {
        width: .16rem;
        height: .12rem;
        position: absolute;
        top: .36rem;
        right: .20rem;
        z-index: 1;
      }
      .input {
        width: calc(100% - 1.00rem);
        height: 100%;
        display: flex;
        align-items: center;
        font-size: .28rem;
        color: #fff;
      }
      &__rbtn {
        width: 1.00rem;
        height: .80rem;
        border-radius: 0 .10rem .10rem 0;
        background: #282e33;
        text-align: center;
        line-height: .80rem;
        position: absolute;
        top: 0;
        right: 0;
        font-size: .24rem;
      }
    }
    .wrapTitle {
      width: 100%;
      height: .80rem;
      display: flex;
      align-items: center;
      font-size: .28rem;
      color: #fff;
      box-sizing: border-box;
      padding: 0 .20rem;
      margin-bottom: .06rem;
      &__sub {
        font-size: .24rem;
        color: #a6b5be;
        margin-left: .08rem;
      }
    }
    .table {
      width: 100%;
      border-radius: .10rem;
      background: #0d1012;
      box-sizing: border-box;
      padding: .40rem 0 .20rem;
      margin-bottom: .28rem;
      &__item {
        display: flex;
        align-items: center;
        font-size: .24rem;
        color: #fff;
        padding-bottom: .20rem;
        padding-left: .20rem;
        padding-right: .20rem;
        &__name {
          color: #a6b5be;
          flex: 1;
          display: flex;
          align-items: center;
          .name__label {
            box-sizing: border-box;
            padding: 0 .10rem;
            border-radius: .04rem;
            background: #20262a;
            color: #a6b5be;
            font-size: .20rem;
            text-align: center;
            line-height: .28rem;
            margin-left: .08rem;
          }
        }
      }
      &__button {
        width: 100%;
        height: .80rem;
        border-radius: .10rem;
        background: #282e33;
        font-size: .32rem;
        color: #a6b5be;
        text-align: center;
        line-height: .80rem;
        margin-bottom: -.20rem;
      }
    }
  }
  &__right {
    flex: 1;
    .wrapSelect {
      display: flex;
      align-items: center;
      font-size: .20rem;
      color: #aeb9c6;
      box-sizing: border-box;
      padding: 0 .20rem;
      margin-bottom: .20rem;
      .select__img {
        width: .16rem;
        height: .12rem;
        margin-left: .08rem;
      }
    }
    .table2 {
      box-sizing: border-box;
      padding: 0 .20rem;
      margin-bottom: .20rem;
      &__colName {
        height: .60rem;
        font-size: .20rem;
        color: #9ea3ae;
        display: flex;
        align-items: center;
        &__left {
          flex: 1;
        }
      }
      &__item {
        display: flex;
        align-items: center;
        height: .50rem;
        font-size: .20rem;
        color: #9ea3ae;
        position: relative;
        &__name {
          flex: 1;
          color: #cf4d65;
          &--green {
            color: #13a467;
          }
        }
      }
    }
    .moreBox {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .moreBox__line {
        width: .96rem;
        height: .01rem;
        background: #1c252a;
      }
      .moreBox__img {
        width: .16rem;
        height: .12rem;
        margin: 0 .08rem;
        &--reverse {
          transform: rotate(180deg);
        }
      }
    }
    .colTable {
      height: .10rem;
      margin-left: .20rem;
      height: .50rem;
      box-sizing: border-box;
      border: .02rem solid #1d262b;
      border-right: none;
      border-radius: .10rem;
      font-size: .16rem;
      color: #a6b5be;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: .06rem;
      margin-bottom: .20rem;
      &__item {
        margin-right: .20rem;
      }
    }
    .table3 {
      height: 2.00rem;
      overflow-y: hidden;
      .table2__item {
        position: relative;
        &__name {
          position: absolute;
          top: 0;
          left: 0;
          color: #6b757b;
          font-size: .40rem;
          transform-origin: 0 0;
          transform: scale(0.5, 0.5);
          line-height: .50rem;
        }
        &__value {
          position: absolute;
          top: 0;
          right: 0;
          color: #aeb9c6;
          font-size: .36rem;
          transform-origin: 100% 0;
          transform: scale(0.5, 0.5);
          line-height: .50rem;
          margin-top: .04rem;
        }
      }
      &--more {
        height: auto;
      }
    }
  }
}
.leverage {
  height: .10rem;
  display: flex;
  height: .80rem;
  margin-bottom: .28rem;
  &__show {
    height: 100%;
    flex: 1;
    border-radius: .10rem;
    background: #0d1012;
    font-size: .28rem;
    color: #a6b5be;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 .20rem;
  }
  &__choose {
    margin-left: .16rem;
    border-radius: .10rem;
    background: #282e33;
    font-size: .24rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0 .20rem;
  }
}
.nav {
  height: 1.00rem;
  background: #20262a;
  white-space: nowrap;
  // display: flex;
  position: sticky;
  // top: .88rem;
  top: 2.08rem;
  left: 0;
  z-index: 899;
  overflow-x: auto;
  margin-bottom: .30rem;
  &__item {
    height: 1.00rem;
    box-sizing: border-box;
    padding: 0 .30rem;
    line-height: 1.00rem;
    text-align: center;
    font-size: .32rem;
    color: #fff;
    font-weight: 600;
    display: inline-block;
    border-bottom: .01rem solid #20262a;
    transition: all 0.5s;
    &--active {
      color: #4da2fa;
      border-bottom: .01rem solid #4da2fa;
    }
  }
}
::v-deep{
  .el-select{
    width: 100%;
  }
  .el-input__inner{
    background: #0D1012;
    border: none;
    color: #fff;
    font-size: .14rem;
  }
  .wrapInput{
    .el-input__inner{
      padding: 0;
    }
  }
}
</style>
