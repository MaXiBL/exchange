<template>
  <div class="list" :class="{'list--end':status=='end'}">
    <div class="item" @click="toInvestDetail">
      <img class="labelImg labelImg--active" src="../../../../assets/image/label1.png"/>
      <img class="labelImg labelImg--end" src="../../../../assets/image/label1_end.png"/>
      <div class="title" @click="toInvestDetail">Market Maker: Zozy</div>
      <div class="box2">
        <div class="box2__item">
          <p class="box2__item__line">Total Staked</p>
          <p class="box2__item__line">$7,262.323</p>
        </div>
        <div class="box2__item box2__item__right">
          <p class="box2__item__line">Market-making APY</p>
          <div class="box2__item__line box2__item__line__flex">
            <span class="rate">20.88%</span>
            <div class="btnActive">Active</div>
          </div>
        </div>
      </div>
      <div class="box3">
        <div class="box3__item">
          <span>Start date</span>
          <p class="box3__item__key">30 May 2021 21:00 UTC</p>
        </div>
        <div class="box3__item">
          <span>End date</span>
          <p class="box3__item__key">17 Dec 2021 22:00 UTC</p>
        </div>
        <div class="box3__item">
          <span class="highlightTitle">Your state</span>
          <p class="box3__item__key">100.00 USDT</p>
        </div>
        <div class="box3__item">
          <span class="highlightTitle">Your state</span>
          <p class="box3__item__key">10.00 USDT</p>
        </div>
        <div class="box3__item">
          <span>Total unrealized reward</span>
          <p class="box3__item__key">30.000.00 USDT</p>
        </div>
        <div class="box3__item">
          <span>Total yield</span>
          <p class="box3__item__key">100.000.00 USDT/ <span style="color:#63B557">15%</span></p>
        </div>
      </div>
      <div class="pline">Remaining: <span class="highlightText">100</span>/1000</div>
      <div class="pline">Closing date: 10Aug 2021 22:00 UTC</div>
      <div class="mainBtn mainBtn--active" @click.stop="show_dialogInvest">Stack</div>
      <div class="mainBtn mainBtn--end">Stack</div>
    </div>

    <div class="item" @click="toInvestDetail">
      <img class="labelImg" src="../../../../assets/image/label1.png"/>
      <div class="title">Market Maker: Zozy</div>
      <div class="box2">
        <div class="box2__item">
          <p class="box2__item__line">Total Staked</p>
          <p class="box2__item__line">$7,262.323</p>
        </div>
        <div class="box2__item box2__item__right">
          <p class="box2__item__line">Market-making APY</p>
          <div class="box2__item__line box2__item__line__flex">
            <span class="rate">20.88%</span>
            <div class="btnActive">Active</div>
          </div>
        </div>
      </div>
      <div class="box3">
        <div class="box3__item">
          <span>Start date</span>
          <p class="box3__item__key">30 May 2021 21:00 UTC</p>
        </div>
        <div class="box3__item">
          <span>End date</span>
          <p class="box3__item__key">17 Dec 2021 22:00 UTC</p>
        </div>
        <div class="box3__item">
          <span class="highlightTitle">Your state</span>
          <p class="box3__item__key">100.00 USDT</p>
        </div>
        <div class="box3__item">
          <span class="highlightTitle">Your state</span>
          <p class="box3__item__key">10.00 USDT</p>
        </div>
        <div class="box3__item">
          <span>Total unrealized reward</span>
          <p class="box3__item__key">30.000.00 USDT</p>
        </div>
        <div class="box3__item">
          <span>Total yield</span>
          <p class="box3__item__key">100.000.00 USDT/ <span style="color:#63B557">15%</span></p>
        </div>
      </div>
      <div class="pline">Remaining: <span class="highlightText">100</span>/1000</div>
      <div class="pline">Closing date: 10Aug 2021 22:00 UTC</div>
      <div class="mainBtn" @click.stop="show_dialogInvest">Stack</div>
    </div>

    <div class="item" @click="toInvestDetail">
      <img class="labelImg" src="../../../../assets/image/label1.png"/>
      <div class="title">Market Maker: Zozy</div>
      <div class="box2">
        <div class="box2__item">
          <p class="box2__item__line">Total Staked</p>
          <p class="box2__item__line">$7,262.323</p>
        </div>
        <div class="box2__item box2__item__right">
          <p class="box2__item__line">Market-making APY</p>
          <div class="box2__item__line box2__item__line__flex">
            <span class="rate">20.88%</span>
            <div class="btnActive">Active</div>
          </div>
        </div>
      </div>
      <div class="box3">
        <div class="box3__item">
          <span>Start date</span>
          <p class="box3__item__key">30 May 2021 21:00 UTC</p>
        </div>
        <div class="box3__item">
          <span>End date</span>
          <p class="box3__item__key">17 Dec 2021 22:00 UTC</p>
        </div>
        <div class="box3__item">
          <span class="highlightTitle">Your state</span>
          <p class="box3__item__key">100.00 USDT</p>
        </div>
        <div class="box3__item">
          <span class="highlightTitle">Your state</span>
          <p class="box3__item__key">10.00 USDT</p>
        </div>
        <div class="box3__item">
          <span>Total unrealized reward</span>
          <p class="box3__item__key">30.000.00 USDT</p>
        </div>
        <div class="box3__item">
          <span>Total yield</span>
          <p class="box3__item__key">100.000.00 USDT/ <span style="color:#63B557">15%</span></p>
        </div>
      </div>
      <div class="pline">Remaining: <span class="highlightText">100</span>/1000</div>
      <div class="pline">Closing date: 10Aug 2021 22:00 UTC</div>
      <div class="mainBtn" @click.stop="show_dialogInvest">Stack</div>
    </div>
  </div>
  <!-- 投资额输入框 -->
  <div>
    <el-dialog v-model="dialogInvestVisible">
      <p class="title__dialog">Please input amount to stake</p>
      <el-input placeholder="USDT" class="el__input"/>
      <div class="wrapBtn">
        <el-button color="#0079FE" plain>Cancel</el-button>
        <el-button color="#0079FE" style="color: white">Ok</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
// 投资逻辑
const investEffect = () => {

  let dialogInvestVisible = ref(false)
  const show_dialogInvest = () => {
    dialogInvestVisible.value = true
  }

  // 进入详情
  const router = useRouter()
  const toInvestDetail = () => {
    // router.push({ path: '/investDetail' })
  }

  return { dialogInvestVisible, show_dialogInvest, toInvestDetail }
}

export default{
  name: 'investList',
  props: {
    status: {
      type: String,
      default: ''  //end
    }
  },
  setup(){
    const { dialogInvestVisible, show_dialogInvest, toInvestDetail } = investEffect()
    return { dialogInvestVisible, show_dialogInvest, toInvestDetail }
  }
}
</script>

<style scoped lang='less'>
.list{
  width: 100vw;
  box-sizing: border-box;
  padding: .20rem .30rem 0;
  .item{
    width: 100%;
    border-radius: .04rem;
    background: #20262A;
    box-sizing: border-box;
    padding: .30rem .20rem;
    position: relative;
    margin-bottom: .30rem;
    .labelImg{
      width: .86rem;
      height: 1.10rem;
      position: absolute;
      top: -0.2rem;
      right: .08rem;
    }
    .labelImg--end{
      display: none;
    }
    .title{
      font-size: .36rem;
      color: #4DA2FA;
      margin-bottom: .16rem;
    }
    .box2{
      width: 100%;
      display: flex;
      &__item{
        flex: 1;
        font-size: .32rem;
        color: #fff;
        &__line{
          margin-bottom: .14rem;
        }
        &__line__flex{
          width: 100%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          .rate{
            font-size: .32rem;
            color: #68C95A;
          }
          .btnActive{
            width: 1.00rem;
            height: .40rem;
            border-radius: .04rem;
            background: #68C95A;
            font-size: .24rem;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: .20rem;
          }
        }
      }
      &__item__right{
        text-align: right;
      }
    }
    .box3{
      width: 100%;
      border-radius: .04rem;
      background: #181C1F;
      box-sizing: border-box;
      padding: .30rem .20rem .20rem;
      margin-bottom: .20rem;
      &__item{
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: .10rem;
        font-size: .28rem;
        color: #fff;
        .highlightTitle{
          color: #FFB060;
        }
        &__key{
          flex: 1;
          text-align: right;
        }
      }
    }
    .pline{
      font-size: .28rem;
      color: #fff;
      margin-bottom: .12rem;
      .highlightText{
        color: #FFB060;
      }
    }
    .mainBtn{
      width: 100%;
      height: .72rem;
      border-radius: .10rem;
      background: #0079FE;
      font-size: .32rem;
      color: #fff;
      text-align: center;
      line-height: .72rem;
      margin-top: .30rem;
    }
    .mainBtn--end{
      background: #BDC3C7 !important;
      display: none;
    }
  }
}
::v-deep{
  .el-overlay{
    .el-dialog{
      width: 6.90rem !important;
      margin-top: 30vh;
    }
  }
  .el-button{
    width: 2.80rem;
  }
}
.title__dialog{
  font-size: .40rem;
  color: #1D2025;
  margin-bottom: .60rem;
}
.el__input{
  margin-bottom: .60rem;
}
.wrapBtn{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.list--end{
  .btnActive{
    background: #BDC3C7 !important;
    color: #fff;
  }
  .mainBtn--active{
    display: none !important;
  }
  .mainBtn--end{
    display: block !important;
  }
  .labelImg--active{
    display: none !important;
  }
  .labelImg--end{
    display: block !important;
  }
}
</style>
