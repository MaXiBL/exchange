<template>
  <div class="box1">
    <div class="box1__line">
      <div class="box1__line__item" style="color: #4b9ff6" @click="toMakerList">
        Market Maker: Zoey
      </div>
      <div class="box1__line__item box1__line__item-right"></div>
    </div>
    <div class="box1__line">
      <div class="box1__line__item">Start date</div>
      <div class="box1__line__item box1__line__item-right">
        30 May 2021 21:00 UTC
      </div>
    </div>
    <div class="box1__line">
      <div class="box1__line__item">End date</div>
      <div class="box1__line__item box1__line__item-right">
        17 Dec 2021 22:00 UTC
      </div>
    </div>
    <div class="box1__line">
      <div class="box1__line__item">Wallet address:</div>
    </div>
    <div class="box1__line--single">
      0xsd2565656sds20xz2d23sd0xsdsddvvz3d2s6a
    </div>
  </div>
  <div class="box2">
    <div class="box2Inner">
      <div class="chart" id="chart" ref='chartRef' style="width:6.3rem;height:5rem"></div>
      <div class="box2__subBox">
        <div class="box2__subBox__line">
          <div class="box2__subBox__line__item" style="font-size: 0.32rem">
            Total Staked
          </div>
          <div
            class="box2__subBox__line__item--right"
            style="font-size: 0.32rem"
          >
            Market-making APY
          </div>
        </div>
        <div class="box2__subBox__line">
          <div
            class="box2__subBox__line__item"
            style="color: #4da2fa; font-size: 0.5rem"
          >
            $7.262.323
          </div>
          <div
            class="box2__subBox__line__item--right"
            style="color: #68c95a; font-size: 0.32rem"
          >
            20.88%
          </div>
        </div>
        <div class="box2__subBox__line">
          <div class="box2__subBox__line__item">Total unrealized reward</div>
          <div class="box2__subBox__line__item--right">30.000.00 USDT</div>
        </div>
        <div class="box2__subBox__line">
          <div class="box2__subBox__line__item">Total yield</div>
          <div class="box2__subBox__line__item--right">
            100.000.00 USDT/<span style="color: #68c95a">15%</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="titleBar">Launch status</div>
  <div class="textBlock">Time expired</div>

  <div class="titleBar">Launch status</div>
  <div class="box3">
    <div class="gezi">
      <div class="gezi__item">
        <span class="gezi__item__title">Amount of own</span>
        <span class="gezi__item__content">10.000 USDT</span>
      </div>
      <div class="gezi__item">
        <span class="gezi__item__title">Total collect</span>
        <span class="gezi__item__content">90.000 USDT</span>
      </div>
      <div class="gezi__item">
        <span class="gezi__item__title">Current collected</span>
        <span class="gezi__item__content">90.000 USDT</span>
      </div>
      <div class="gezi__item">
        <span class="gezi__item__title">Remaining collect</span>
        <span class="gezi__item__content">0.0</span>
      </div>
    </div>
    <div class="box2__subBox">
      <div class="box2__subBox__line">
        <div class="box2__subBox__line__item">Start time of collecting</div>
        <div class="box2__subBox__line__item box2__subBox__line__item--right">
          30 May 2021 21:00 UTC
        </div>
      </div>
      <div class="box2__subBox__line">
        <div class="box2__subBox__line__item">End time of collecting</div>
        <div class="box2__subBox__line__item box2__subBox__line__item--right">
          30 May 2021 21:00 UTC
        </div>
      </div>
    </div>
  </div>

  <div class="titleBar">How to allocate yield</div>
  <div
    class="textBlock"
    style="font-size: 0.28rem; color: #ffb060; line-height: 0.38rem"
  >
    If yield is under 2% in the period,all yield is allocated to investors. If
    yield is above 2% in the period,the above part is allocated to market maker
    and investor as 7:3.
  </div>

  <div class="titleBar">Strategy introduce</div>
  <div class="textBlock" style="font-size: 0.28rem; line-height: 0.38rem">
    Policy descriptionPolicy descriptionPolicy descriptionPolicy
    descriptionPolicy descriptionPolicy descriptionPolicy descriptionPolicy
    descriptionPolicy description
  </div>

  <div class="titleBar">Team introduce</div>
  <div class="textBlock" style="font-size: 0.28rem; line-height: 0.38rem">
    Team Introduction descriptionTeam Introduction descriptionTeam Introduction
    descriptionTeam Introduction descriptionTeam Introduction description
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive, onMounted, ref } from "vue";
import * as echarts from "echarts";

const makerEffect = () => {
  // 进入做市商的项目列表
  const router = useRouter();
  const toMakerList = () => {
    router.push("/makerList");
  };

  return { toMakerList };
};

//折线图相关逻辑
const chartEffect = (chartRef) => {
  let myChart = reactive(null);

  const createChart = () => {
    myChart = echarts.init(chartRef.value)
    console.log(myChart)
    var app = {};
    var option;

    option = {
      title: {
        text: "Yield curve(USDT)",
        textStyle: {
          color: "#4E9DE9",
          fontSize: 14,
        },
      },
      tooltip: {
        trigger: "axis",
      },
      // legend: {
      //     data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
      //     icon: 'circle',
      //     right: 0,
      //     textStyle: {
      //         color: '#fff'
      //     }
      // },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      // toolbox: {
      //     feature: {
      //         saveAsImage: {}
      //     }
      // },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
        axisLabel: {
          textStyle: {
            color: "#C5D0DD",
            fontSize: 12
          },
        },
        axisLine: {
          // show: false
        },
        axisTick: {
          // lineStyle: {
          //     opacity: 0
          // }
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "#E3E3E3",
            fontSize: 14
          },
        },
        splitLine: {
          lineStyle: {
            color: '#C5D0DD'
          }
        }
      },
      series: [
        {
          name: "盈利",
          type: "line",
          stack: "总量",
          data: [120, 132, 101, 134, 90, 230, 210],
          itemStyle: {
            normal: {
              color: "#fff",
              lineStyle: {
                color: '#4E9DE9'
              }
            },
          },
          smooth: true,
          showSymbol: false,
        },
      ],
    };

    if (option && typeof option === "object") {
      myChart.setOption(option);
    }
  };

  return { myChart, createChart }
};

export default {
  setup() {
    const chartRef = ref(null)

    const { toMakerList } = makerEffect();
    const { myChart, createChart } = chartEffect(chartRef)

    onMounted(()=>{
      createChart() //创建折线图
    })
    
    return { chartRef, toMakerList };
  },
};
</script>

<style lang="less" scoped>
.box1 {
  width: 100vw;
  box-sizing: border-box;
  padding: 0.38rem 0.5rem;
  &__line {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 0.2rem;
    &__item {
      font-size: 0.32rem;
      color: #fff;
    }
    &__item-right {
      flex: 1;
      text-align: right;
      color: #c5d0dd;
      font-size: 0.28rem;
    }
  }
  &__line--single {
    font-size: 0.28rem;
    color: #6b757b;
    width: 100%;
    margin-bottom: 0.1rem;
  }
}
.box2 {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.3rem;
  margin-bottom: 0.2rem;
  .box2Inner {
    width: 100%;
    background: #20262a;
    box-sizing: border-box;
    border-radius: 0.1rem;
    padding: 0.3rem 0.28rem;
    .chart {
      height: 5rem;
    }
    .box2__subBox {
      width: 100%;
      background: #181c1f;
      border-radius: 0.1rem;
      box-sizing: border-box;
      padding: 0.3rem 0.2rem;
      &__line {
        display: flex;
        align-items: center;
        margin-bottom: 0.14rem;
        font-size: 0.28rem;
        color: #fff;
        &__item--right {
          flex: 1;
          text-align: right;
        }
      }
    }
  }
}
.titleBar {
  width: 100%;
  font-size: 0.36rem;
  color: #fff;
  height: 0.8rem;
  line-height: 0.8rem;
  box-sizing: border-box;
  padding: 0 0.3rem;
}
.textBlock {
  margin: 0 0.3rem 0.2rem;
  width: calc(100% - 0.6rem);
  border-radius: 0.1rem;
  background: #20262a;
  font-size: 0.32rem;
  color: #a6b5be;
  box-sizing: border-box;
  padding: 0.3rem 0.2rem;
}
.box3 {
  width: calc(100% - 0.6rem);
  margin: 0 0.3rem 0.2rem;
  background: #20262a;
  border-radius: 0.1rem;
  box-sizing: border-box;
  padding: 0.3rem 0.2rem;
  .gezi {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    &__item {
      width: 50%;
      display: flex;
      flex-direction: column;
      font-size: 0.24rem;
      color: #fff;
      box-sizing: border-box;
      &__title {
        color: #a6b5be;
        margin-bottom: 0.2rem;
      }
      &__content {
        color: #4da2fa;
        font-size: 0.32rem;
        margin-bottom: 0.4rem;
      }
    }
    &__item:nth-child(2n) {
      text-align: right;
    }
  }
  .box2__subBox {
    width: 100%;
    box-sizing: border-box;
    padding: 0.3rem 0.14rem 0.1rem;
    border-radius: 0.1rem;
    background: #181c1f;
    font-size: 0.28rem;
    color: #fff;
    &__line {
      display: flex;
      align-items: center;
      margin-bottom: 0.2rem;
      &__item--right {
        color: #c5d0dd;
        font-size: 0.24rem;
        flex: 1;
        text-align: right;
      }
    }
  }
}
</style>
