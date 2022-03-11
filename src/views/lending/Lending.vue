<template>
  <BackNav title='Lending'></BackNav>
  <div class="btns">
    <router-link class="btn1" to='Borrow'>
      <div class="img-btn1"></div>
      <span class="title-btn1">Borrow</span>
    </router-link>
    <div class="btn1">
      <div class="img-btn1"></div>
      <span class="title-btn1">Supply </span>
    </div>
    <div class="btn1">
      <div class="img-btn1"></div>
      <span class="title-btn1">Transfer</span>
    </div>
    <div class="btn2">
      <div class="img-btn2"></div>
      <span class="title-btn2">Swap(via Borrow<br/>account)</span>
    </div>
    <div class="btn2">
      <div class="img-btn2"></div>
      <span class="title-btn2">Swap(via Wallet)</span>
    </div>
  </div>
  <div class="titleBar">How to allocate yield</div>
  <div class="box-chart">
    <div class="chart" id="chart" ref='chartRef' style="width:6.3rem;height:5rem"></div>
  </div>
  <div class="titleBar">Total Supply Amount(USDT)</div>
  <div class="box-chart">
    <div class="chart" id="chart2" ref='chartRef2' style="width:6.3rem;height:5rem"></div>
  </div>
  <div class="titleBar">Statistics</div>
  <div class="box-table">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="Asset"/>
      <el-table-column prop="borrowAmount" label="borrow amount"/>
      <el-table-column prop="supplyAmount" label="supply amount" />
      <el-table-column prop="supplyRate" label="supply rate" />
      <el-table-column prop="borrowRate" label="borrow rate" />
      <el-table-column prop="ratio" label="utility ratio" />
    </el-table>
  </div>
  <div class="titleBar">Avg Supply rate</div>
  <div class="box-table">
    <el-table :data="tableData1" style="width: 100%">
      <el-table-column prop="name" label="Asset"/>
      <el-table-column prop="24h" label="24h"/>
      <el-table-column prop="7d" label="7d" />
      <el-table-column prop="30d" label="30d" />
    </el-table>
  </div>
  <div class="titleBar">Avg Brorrow rate</div>
  <div class="box-table">
    <el-table :data="tableData1" style="width: 100%">
      <el-table-column prop="name" label="Asset"/>
      <el-table-column prop="24h" label="24h"/>
      <el-table-column prop="7d" label="7d" />
      <el-table-column prop="30d" label="30d" />
    </el-table>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import * as echarts from "echarts";

//折线图相关逻辑
const chartEffect = (chartRef, chartRef2) => {
  let myChart = reactive(null);
  const createChart = () => {
    myChart = echarts.init(chartRef.value)
    console.log(myChart)
    var app = {};
    var option;

    option = {
      title: {
        show: false,
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

  let myChart2 = reactive(null);
  const createChart2 = () => {
    myChart2 = echarts.init(chartRef2.value)
    var app = {};
    var option;

    option = {
      title: {
        show: false,
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
      myChart2.setOption(option);
    }
  }

  return { myChart, createChart, createChart2 }
};

export default{
  setup(){
    const chartRef = ref(null)
    const chartRef2 = ref(null)

    const { myChart, createChart, createChart2 } = chartEffect(chartRef, chartRef2)

    onMounted(()=>{
      createChart() //创建折线图
      createChart2()
    })

    const tableData = [
      {
        name: 'USDT',
        borrowAmount: '8.00%',
        supplyAmount: '10.00%',
        supplyRate: '35.00%',
        borrowRate: '35.00%',
        ratio: ''
      },
      {
        name: 'ETH'
      },
      {
        name: 'BTC'
      }
    ]

    const tableData1 = [
      {
        name: 'USDT',
        '24h': '10.00%',
        '7d': '11.55%',
        '30d': '11.88%'
      },
      {
        name: 'ETH'
      },
      {
        name: 'BTC'
      }
    ]
    
    return { chartRef, chartRef2, tableData, tableData1 };
  }
}
</script>

<style lang='less' scoped>
.btns{
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: .60rem .30rem .50rem;
  a{
    text-decoration: none;
  }
  .btn1{
    width: 33.3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: .28rem;
    color: #fff;
    .img-btn1{
      width: 1.00rem;
      height: 1.00rem;
      margin-bottom: .20rem;
      background: #4DA2FA;
      border-radius: 50%;
    }
    .title-btn1{
      margin-bottom: .40rem;
    }
  }
  .btn2{
    width: calc(50% - .05rem);
    height: 1.00rem;
    border-radius: .20rem;
    background: #20262A;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .20rem;
    color: #fff;
    box-sizing: border-box;
    .img-btn2{
      width: .48rem;
      height: .48rem;
      margin-right: .12rem;
      border-radius: 50%;
      background: pink;
    }
  }
  .btn2:nth-child(2n){
    margin-right: .10rem;
  }
}
.box-chart{
  width: 6.90rem;
  border-radius: .10rem;
  background: #20262A;
  margin: 0 auto;
  box-sizing: border-box;
  padding: .30rem;
  margin-bottom: .20rem;
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
.box-table{
  width: 6.90rem;
  border-radius: .10rem;
  background: #20262A;
  margin: 0 auto;
  box-sizing: border-box;
  margin-bottom: .20rem;
}
::v-deep{
  .el-table{
    font-size: .24rem;
    color: #A6B5BE;
    .el-table__cell{
      background: #20262A;
    }
  }
  .el-table--striped .el-table__body tr.el-table__row--striped td.el-table__cell{
    background: #20262A;
  }
  .el-table td.el-table__cell, .el-table th.el-table__cell.is-leaf{
    border-bottom: .005rem solid #0F1215;
  }
  .el-table::before {
    height: 0px;
  }
}
</style>
