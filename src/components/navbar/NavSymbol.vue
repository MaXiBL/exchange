<template>
    <div class="navSymbol">
        <div class="box1">
            <div class="box1__menu" @click="show_ethOrBtc=!show_ethOrBtc">
                <span class="box1__menu__title">
                    {{digitalCurrency.currentType=='btcusdt' ? 'BTC/USDT' : 'ETH/USDT'}}
                </span>
                <img class="box1__menu__img2" src="../../assets/image/drop.png" :class="{'box1__menu__img2--rotate':show_ethOrBtc}"
                />
            </div>
            <span class="box1__money" v-show="showPrice"
              :class="{'box1__money--red':digitalCurrency[digitalCurrency.currentType].chg.indexOf('-') == 0}">
              {{digitalCurrency[digitalCurrency.currentType].close}}
            </span>
        </div>
        <transition name='slide-fade'>
        <div class="select" :class="{'select--show':show_ethOrBtc}">
          <div class="select__item" @click="changeSymbol('ethusdt')">
            <img class="select__item__img" src="../../assets/image/eth@2x.png" />
            <div class="select__item__titleBox">
              <span class="select__item__titleBox__title">Ethereum</span>
              <span class="select__item__titleBox__subTitle">ETH-USD</span>
            </div>
            <span class="select__item__money">{{digitalCurrency.ethusdt.close}}</span>
            <div class="select__item__btn">{{digitalCurrency.ethusdt.chg}}</div>
          </div>
          <div class="select__item" @click="changeSymbol('btcusdt')">
            <img class="select__item__img" src="../../assets/image/eth@2x.png" />
            <div class="select__item__titleBox">
              <span class="select__item__titleBox__title">Bitcoin</span>
              <span class="select__item__titleBox__subTitle">BTC-USD</span>
            </div>
            <span class="select__item__money">{{digitalCurrency.btcusdt.close}}</span>
            <div class="select__item__btn">{{digitalCurrency.btcusdt.chg}}</div>
          </div>
        </div>
        </transition>
        <!-- bz2是用于做关闭效果的遮罩层 -->
        <!-- <div class="bz2"></div>  -->
    </div>
</template>

<script>
import { ref, toRefs } from 'vue'
import { useStore } from 'vuex'

//切换股票
const useSymbolEffect = (context) => {
  const show_ethOrBtc = ref(false)

  const changeSymbol = (symbol) => {
    context.emit('change',symbol)
    show_ethOrBtc.value = false
  }
  return {  show_ethOrBtc, changeSymbol }
}

export default{
    name: 'NavSymbol',
    props: ['showPrice'],
    setup(props, context){
      const store = useStore()
      const { digitalCurrency } = toRefs(store.state.priceStore)

      const { changeSymbol, show_ethOrBtc } = useSymbolEffect(context)
      return { digitalCurrency, show_ethOrBtc, changeSymbol }
    }
}
</script>

<style lang='less' scoped>
.navSymbol{
  position: relative;
}
.box1{
    height: 1.16rem;
    background: #181C1F;
    box-sizing: border-box;
    padding: 0 .30rem;
    border-bottom: .01rem solid #1C2429;
    display: flex;
    align-items: center;
    &__menu{
        display: flex;
        align-items: center;
        height: 100%;
        &__img{
            width: .40rem;
            height: .40rem;
            margin-right: .20rem;
        }
        &__title{
            font-size: .40rem;
            color: #fff;
            // margin-right: 20rem;
            margin-right: .10rem;
        }
        &__img2{
            // width: 36rem;
            // height: 36rem;
            width: .40rem;
            height: .40rem;
            &--rotate{
                transform: rotate(180deg);
            }
        }
    }
    &__money{
        flex: 1;
        text-align: right;
        font-size: .32rem;
        color: #13a467;
        &--red{
          color: #CF4D65;
        }
    }
}
.bz2{
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
}
.select{
  width: 100vw;
  position: absolute;
  left: 0;
  z-index: 998;
  height: 0;
  overflow: hidden;
  transition: all 0.5s;
  &--show{
    height: 2.9rem;
  }
  &__item{
    display: flex;
    align-items: center;
    height: 1.45rem;
    box-sizing: border-box;
    padding: 0 .30rem;
    background: #282E33;
    border-bottom: .01rem solid #1D262B;
    &__img{
      width: .48rem;
      height: .48rem;
      margin-right: .16rem;
    }
    &__titleBox{
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      color: #fff;
      &__title{
        font-size: .28rem;
        font-weight: 500;
        margin-bottom: .08rem;
        margin-top: .26rem;
      }
      &__subTitle{
        font-size: .40rem;
        color: #8F9295;
        transform-origin: 0 0;
        transform: scale(0.5, 0.5);
      }
    }
    &__money{
      flex: 1;
      font-size: .28rem;
      color: #13A467;
      text-align: center;
    }
    &__btn{
      min-width: 1.20rem;
      height: .46rem;
      border-radius: .04rem;
      color: #fff;
      font-size: .24rem;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 0 .16rem;
      background: #13A467;
    }
    &--red{
      .select__item__money{
          color: #CF4D65;
      }
      .select__item__rate{
          background: #CF4D65;
      }
    }
  }
}
</style>
