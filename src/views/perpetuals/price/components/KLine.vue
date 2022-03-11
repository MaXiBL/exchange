<template>
  <!-- 菜单栏 -->
  <div class="menu">
    <div class="menu__item" @click.self="show_option = '0'">
      D
      <img
        class="menu__item__img"
        src="../../../../assets/image/ic_label@2x.png"
      />
    </div>
    <div class="menu__item" @click.self="show_option = '1'">
      K line
      <img
        class="menu__item__img"
        src="../../../../assets/image/ic_label@2x.png"
      />
    </div>
    <div class="menu__item" @click.self="show_option = '2'">
      Indecator
      <img
        class="menu__item__img"
        src="../../../../assets/image/ic_label@2x.png"
      />
    </div>
    <div class="menu__item menu__item--flex"></div>
    <div class="menu__item">
      <img
        class="menu__item__menuImg"
        src="../../../../assets/image/ic_set@2x.png"
      />
    </div>
    <div class="menu__item">
      <img
        class="menu__item__menuImg"
        src="../../../../assets/image/ic_zoom@2x.png"
      />
    </div>

    <!-- <div class="select">
      <div class="select__center">
        <div class="row">
          <div class="select__item">
            <div class="select__item__menu">Min</div>
          </div>
          <div class="select__item">
            <div class="select__item__menu">1min</div>
          </div>
          <div class="select__item">
            <div class="select__item__menu">5min</div>
          </div>
          <div class="select__item">
            <div class="select__item__menu">15min</div>
          </div>
          <div class="select__item">
            <div class="select__item__menu">30min</div>
          </div>
        </div>
        <div class="row">
          <div class="select__item">
            <div class="select__item__menu">Hour</div>
          </div>
          <div class="select__item">
            <div class="select__item__menu">1h</div>
          </div>
          <div class="select__item">
            <div class="select__item__menu">4h</div>
          </div>
        </div>
        <div class="row">
          <div class="select__item">
            <div class="select__item__menu">Days</div>
          </div>
          <div class="select__item">
            <div class="select__item__menu">1d</div>
          </div>
        </div>
      </div>
      <div class="select__center">
          <div class="row">
            <div class="select__item">
              <div class="select__item__menu">Candles</div>
            </div>
            <div class="select__item">
              <div class="select__item__menu">Line</div>
            </div>
            <div class="select__item">
              <div class="select__item__menu">Depth</div>
            </div>
          </div>
        </div>
        <div class="select__center">
          <div class="row">
            <div class="select__item">
              <div class="select__item__menu">MACD</div>
            </div>
            <div class="select__item">
              <div class="select__item__menu">KDJ</div>
            </div>
            <div class="select__item">
              <div class="select__item__menu">BOLL</div>
            </div>
            <div class="select__item">
              <div class="select__item__menu">RSI</div>
            </div>
            <div class="select__item">
              <div class="select__item__menu">OBV</div>
            </div>
          </div>
          <div class="row">
            <div class="select__item">
              <div class="select__item__menu">VR</div>
            </div>
            <div class="select__item">
              <div class="select__item__menu">CCI</div>
            </div>
          </div>
        </div>
    </div> -->

    <div
      class="select"
      v-show="show_option"
    >
      <div class="select__center" v-if="show_option == '0'">
        <div class="row">
          <div class="select__item">
            <div class="select__item__menu">Min</div>
          </div>
          <div class="select__item">
            <div
              class="select__item__menu"
              :class="{
                'select__item__menu--active': KLine.Option.KLine.Period == 4,
              }"
              @click="changePeriod(4)"
            >
              1min
            </div>
          </div>
          <div class="select__item">
            <div
              class="select__item__menu"
              :class="{
                'select__item__menu--active': KLine.Option.KLine.Period == 5,
              }"
              @click="changePeriod(5)"
            >
              5min
            </div>
          </div>
          <div class="select__item">
            <div
              class="select__item__menu"
              :class="{
                'select__item__menu--active': KLine.Option.KLine.Period == 6,
              }"
              @click="changePeriod(6)"
            >
              15min
            </div>
          </div>
          <div class="select__item">
            <div
              class="select__item__menu"
              :class="{
                'select__item__menu--active': KLine.Option.KLine.Period == 7,
              }"
              @click="changePeriod(7)"
            >
              30min
            </div>
          </div>
        </div>
        <div class="row">
          <div class="select__item">
            <div class="select__item__menu">Hour</div>
          </div>
          <div class="select__item">
            <div
              class="select__item__menu"
              :class="{
                'select__item__menu--active': KLine.Option.KLine.Period == 8,
              }"
              @click="changePeriod(8)"
            >
              1h
            </div>
          </div>
          <div class="select__item">
            <div class="select__item__menu">4h</div>
          </div>
        </div>
        <div class="row">
          <div class="select__item">
            <div class="select__item__menu">Days</div>
          </div>
          <div class="select__item">
            <div
              class="select__item__menu"
              :class="{
                'select__item__menu--active': KLine.Option.KLine.Period == 0,
              }"
              @click="changePeriod(0)"
            >
              1d
            </div>
          </div>
        </div>
      </div>
      <div class="select__center" v-if="show_option == '1'">
        <div class="row">
          <div class="select__item">
            <div
              class="select__item__menu"
              :class="{ 'select__item__menu--active': currentType == 'k' }"
              @click="switchChart('k')"
            >
              Candles
            </div>
          </div>
          <div class="select__item">
            <div
              class="select__item__menu"
              :class="{ 'select__item__menu--active': currentType == 'm' }"
              @click="switchChart('m')"
            >
              Line
            </div>
          </div>
          <div class="select__item">
            <div
              class="select__item__menu"
              :class="{ 'select__item__menu--active': currentType == 'd' }"
              @click="switchChart('d')"
            >
              Depth
            </div>
          </div>
        </div>
      </div>
      <div class="select__center" v-if="show_option == '2'">
        <div class="row">
          <div class="select__item">
            <div
              class="select__item__menu"
              :class="{
                'select__item__menu--active':
                  KLine.Option.Windows[1].Index == 'MACD',
              }"
              @click="changeIndex('MACD')"
            >
              MACD
            </div>
          </div>
          <div class="select__item">
            <div
              class="select__item__menu"
              :class="{
                'select__item__menu--active':
                  KLine.Option.Windows[1].Index == 'KDJ',
              }"
              @click="changeIndex('KDJ')"
            >
              KDJ
            </div>
          </div>
          <div class="select__item">
            <div
              class="select__item__menu"
              :class="{
                'select__item__menu--active':
                  KLine.Option.Windows[1].Index == 'BOLL',
              }"
              @click="changeIndex('BOLL')"
            >
              BOLL
            </div>
          </div>
          <div class="select__item">
            <div
              class="select__item__menu"
              :class="{
                'select__item__menu--active':
                  KLine.Option.Windows[1].Index == 'RSI',
              }"
              @click="changeIndex('RSI')"
            >
              RSI
            </div>
          </div>
          <div class="select__item">
            <div
              class="select__item__menu"
              :class="{
                'select__item__menu--active':
                  KLine.Option.Windows[1].Index == 'OBV',
              }"
              @click="changeIndex('OBV')"
            >
              OBV
            </div>
          </div>
        </div>
        <div class="row">
          <div class="select__item">
            <div
              class="select__item__menu"
              :class="{
                'select__item__menu--active':
                  KLine.Option.Windows[1].Index == 'VR',
              }"
              @click="changeIndex('VR')"
            >
              VR
            </div>
          </div>
          <div class="select__item">
            <div
              class="select__item__menu"
              :class="{
                'select__item__menu--active':
                  KLine.Option.Windows[1].Index == 'CCI',
              }"
              @click="changeIndex('CCI')"
            >
              CCI
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 菜单的遮罩层 -->
    <div class="mask" v-show="show_option"
      @click.self="show_option = false"
      @touchstart.self="show_option = false">
    </div>
  </div>

  <div
    class="kline"
    id="kline"
    ref="kline"
    :style="{ height: chartHeight + 'px' }"
  ></div>

  <div class="loadingBox" v-loading='loading' v-show="loading"></div>
</template>

<script>
import HQChart from "hqchart";
import pako from "pako";
import * as echarts from "echarts";
// import { mapMutations } from "vuex";
import store from "../../../../store";

function DefaultData() {}
//k线图
DefaultData.GetKLineOption = function () {
  let data = {
    Type: "历史K线图", //历史K线图

    //窗口指标
    Windows: [
      { Index: "MA", Modify: false, Change: false },
      { Index: "MACD", Modify: false, Change: true },
    ],

    IsAutoUpdate: false, //是自动更新数据(不自动更新由外部更新)
    IsApiPeriod: true, //使用Api计算周期
    IsCorssOnlyDrawKLine: true,
    CorssCursorTouchEnd: true,

    //边框
    Border: {
      Left: 1,
      Right: 1, //右边间距
      Top: 25,
      Bottom: 25,
    },

    KLine: {
      Right: 1, //复权 0 不复权 1 前复权 2 后复权
      Period: 0, //周期: 0 日线 1 周线 2 月线 3 年线
      PageSize: 30,
      IsShowTooltip: false,
    },

    //子框架设置
    Frame: [
      {
        SplitCount: 3,
        IsShowLeftText: false,
        SplitType: 1,
        Custom: [{ Type: 0, Position: "right" }],
      },

      { SplitCount: 2, IsShowLeftText: false, SplitType: 1 },
      { SplitCount: 2, IsShowLeftText: false },
    ],

    ExtendChart: [
      { Name: "KLineTooltip" }, //开启手机端tooltip
    ],

    EnableScrollUpDown: true,

    DragDownload: { Day:{ Enable:true } }   //拖拽下载
  };

  return data;
};
//分时图（只要使用分时图，就需要使用jquery，并命名为$。）（没使用到的）
DefaultData.GetMinuteOption = function () {};
//深度图
DefaultData.GetDepthOption = function () {
  let data = {
    Type: "深度图", //创建图形类型
    IsAutoUpdate: false, //是自动更新数据
    AutoUpdateFrequency: 10000, //数据更新频率
    EnableScrollUpDown: true,

    MaxVolRate: 1.2,

    CorssCursorInfo: {
      HPenType: 0,
      VPenType: 1,
      IsShowTooltip: true,
    },

    //边框
    Border: {
      Left: 1, //左边间距
      Right: 40, //右边间距
      Bottom: 25, //底部间距
      Top: 1, //顶部间距
    },

    //框架设置
    Frame: {
      SplitCount: 6,
      IsShowLeftText: false,
      XLineType: 3,
    },
  };
  return data;
};

//周期枚举
var KLINE_PERIOD_ID = {
  //键是hqchart的，值是接口参数的
  0: "1day", //日线
  1: "1week", //周线
  2: "1mon", //月线
  3: "1year", //年线

  4: "1min", //1分钟
  5: "5min", //5分钟
  6: "15min", //15分钟
  7: "30min", //30分钟
  8: "60min", //60分钟

  // : '4hour'       //4小时
};

var g_KLine = { JSChart: null }; //hqchart插件的K线图
var g_echarts = null; //使用echarts创建的分时图

export default {
  name: "KLine",
  data() {
    return {
      // chartWidth: 375,
      // chartWidth: document.body.clientWidth,
      // chartHeight: 500,
      chartWidth: 0,
      chartHeight: 0,

      // Symbol: "btcusdt.BIT", //hqchart插件使用的
      // OriginalSymbol: "btcusdt", //接口参数使用的
      Symbol: "ethusdt.BIT",
      OriginalSymbol: "ethusdt",
      KLine: {
        Option: DefaultData.GetKLineOption(),
      },

      WSUrl: "ws://p_hb_ws.ratafee.nl/", //实际转发到wss://api.huobi.pro/ws
      SocketOpen: false,
      currentSub: "", //当前订阅的主题
      DepthSub: "", //深度订阅的主题

      minuteData_echarts: { minute: [] },
      labelBgColor_echarts: "rgba(14,203,129,.8)", //涨rgba(14,203,129,.8)  跌rgba(246,70,93,.8)

      DLine: {
        Option: DefaultData.GetDepthOption(),
      },

      currentType: "k", //当前图形类型  k：K线图  m：分时图  d：深度图
      yesterdayData: false, //昨日的K线1day数据
      todayData: false, //今天的k线1day数据

      show_option: false,
      loading: true,

      httpMinute: false
    };
  },
  mounted() {
    HQChart.Chart.JSConsole.Chart.Log = () => {};
    HQChart.Chart.JSConsole.Complier.Log = () => {};
    this.onSize();
    this.createKLineChart();
  },
  methods: {
    onSize() {
      // this.chartWidth = document.body.clientWidth
      // this.chartWidth = window.screen.width
      this.chartWidth = document.documentElement.clientWidth ? document.documentElement.clientWidth : 375
      this.chartHeight = 500

      var chartHeight = this.chartHeight;
      var chartWidth = this.chartWidth;

      var kline = this.$refs.kline;
      kline.style.width = chartWidth + "px";
      kline.style.height = chartHeight + "px";
      if (g_KLine.JSChart) g_KLine.JSChart.OnSize();
    },
    //创建K线图
    createKLineChart() {
      if (g_KLine.JSChart) return;

      var blackStyle = HQChart.Chart.HQChartStyle.GetStyleConfig(
        HQChart.Chart.STYLE_TYPE_ID.BLACK_ID
      );
      blackStyle.FrameTitleBGColor = "rgb(24,28,31)";
      blackStyle.TitleFont = "20px 微软雅黑";

      //K线颜色
      blackStyle.UpBarColor = "rgb(37,175,142)"; //K线上涨柱子颜色
      blackStyle.UpTextColor = blackStyle.UpBarColor; //上涨价格颜色
      blackStyle.DownBarColor = "rgb(210,73,99)"; //K线下跌柱子颜色
      blackStyle.DownTextColor = blackStyle.DownBarColor; //下跌价格颜色

      HQChart.Chart.JSChart.SetStyle(blackStyle);

      this.KLine.Option.Symbol = this.Symbol;
      let chart = HQChart.Chart.JSChart.Init(this.$refs.kline);
      this.KLine.Option.NetworkFilter = this.NetworkFilter;

      // this.KLine.Option.EventCallback = [{
      // 	event: JSCHART_EVENT_ID.ON_TITLE_DRAW,
      // 	callback: (event,data,obj)=>{}
      // }]

      // this.KLine.Option.EventCallback = [{
      //   event: 12,
      //   callback: (event,data,obj)=>{
      //     console.log('ccc')
      //   }
      // }]

      chart.SetOption(this.KLine.Option);
      g_KLine.JSChart = chart;
    },
    NetworkFilter(data, callback) {
      // 只要把周期切换到以分为单位的，就是分钟全量；其他的是日线全量
      switch (data.Name) {
        case "KLineChartContainer::ReqeustHistoryMinuteData": //分钟全量数据下载
          this.RequestHistoryMinuteData(data, callback);
          console.log("分钟全量数据");
          break;
        case "KLineChartContainer::RequestFlowCapitalData": //数字货币不会调用
          console.log("数字货币不会调用");
          break;
        case "KLineChartContainer::RequestHistoryData": //日线全量数据下载
          this.RequestHistoryData(data, callback);
          console.log("日线全量数据");
          break;
        case "MinuteChartContainer::RequestMinuteData": //当天分钟全量数据下载
          //只要把Type改为“分钟走势图”，就会执行这里
          console.log("当天分钟全量数据");
          break;
        case "DepthChartContainer::RequestDepthData":
          //只要把Type改为“深度图”，就会执行这里
          this.RequestDepthData(data, callback);
          console.log("深度图数据");
          break;
        case "KLineChartContainer::RequestDragDayData":
          // console.log('拖拽历史数据下载')
          // this.HttpHistoryData(data, callback);
          break;
      }
    },

    //日线全量数据下载
    RequestHistoryData(data, callback) {
      data.PreventDefault = true;
      let period = KLINE_PERIOD_ID[this.KLine.Option.KLine.Period];
      let message = `{"req":"market.${this.OriginalSymbol}.kline.${period}","symbol":"${this.OriginalSymbol}","period":"${period}"}`;
      this.requestWebSocket(message, (recvData) => {
        // /*
        //数据必须是kline的、当前周期的、当前股票的
        let period = KLINE_PERIOD_ID[this.KLine.Option.KLine.Period];
        if (recvData?.rep) {
          if (
            recvData?.rep?.indexOf("kline") == -1 ||
            recvData?.rep?.indexOf(this.OriginalSymbol) == -1 ||
            recvData?.rep?.indexOf(period) == -1
          ) {
            return;
          }
        } else if (recvData?.ch) {
          if (
            recvData?.ch?.indexOf("kline") == -1 ||
            recvData?.ch?.indexOf(this.OriginalSymbol) == -1 ||
            recvData?.ch?.indexOf(period) == -1
          ) {
            return;
          }
        }
        this.RecvHistoryData(recvData, callback);
        // */
      });
    },
    //接收日线全量数据
    RecvHistoryData(recvData, callback) {
      if (recvData.ping) {
        //回复服务器心跳包
        var pong = { pong: recvData.ping };
        var message = JSON.stringify(pong);
        this.ws.send(message);
      } else if (recvData?.data) {
        this.transformHqData_historyData(recvData, callback);
      } else if (recvData?.tick) {
        this.transformHqData_historyData(recvData, callback);
      }
    },
    //格式转换（日线数据转hqchart格式）
    transformHqData_historyData(recvData, callback) {
      let hqChartData = {};

      var yClose = null; //前收盘
      if (recvData.data) {
        hqChartData = {
          code: 0,
          data: [],
          name: this.OriginalSymbol,
          symbol: this.Symbol,
        };
        for (var i in recvData.data) {
          var item = recvData.data[i];
          //时间戳转换
          var dateTime = new Date();
          dateTime.setTime(item.id * 1000);
          var date =
            dateTime.getFullYear() * 10000 +
            (dateTime.getMonth() + 1) * 100 +
            dateTime.getDate();
          var time = dateTime.getHours() * 100 + dateTime.getMinutes();

          var newItem = [
            date,
            yClose,
            item.open,
            item.high,
            item.low,
            item.close,
            item.vol,
            item.amount,
          ];

          yClose = item.close;
          hqChartData.data.push(newItem);
        }

        callback(hqChartData);
        console.log(hqChartData);
      } else if (recvData.tick) {
        let item = recvData.tick;

        let dateTime = new Date();
        dateTime.setTime(item.id * 1000);
        let date =
          dateTime.getFullYear() * 10000 +
          (dateTime.getMonth() + 1) * 100 +
          dateTime.getDate();
        let time = dateTime.getHours() * 100 + dateTime.getMinutes();

        hqChartData = {
          code: 0,
          stock: [
            {
              amount: item.amount,
              date: date,
              high: item.high,
              low: item.low,
              name: this.OriginalSymbol,
              open: item.open,
              price: item.close,
              symbol: this.Symbol,
              vol: item.vol,
              yclose: null,
            },
          ],
        };

        if (g_KLine?.JSChart?.JSChartContainer?.RecvRealtimeData) {
          try {
            g_KLine?.JSChart?.JSChartContainer?.RecvRealtimeData(hqChartData);
          } catch (error) {
            //
          }
        }
      }

      this.loading = false
    },

    //分钟全量数据下载
    RequestHistoryMinuteData(data, callback) {
      data.PreventDefault = true;
      let period = KLINE_PERIOD_ID[this.KLine.Option.KLine.Period];
      let message = `{"req":"market.${this.OriginalSymbol}.kline.${period}","symbol":"${this.OriginalSymbol}","period":"${period}"}`;
      this.requestWebSocket(message, (recvData) => {
        //数据必须是kline的、当前周期的、当前股票的
        let period = KLINE_PERIOD_ID[this.KLine.Option.KLine.Period];
        if (recvData?.rep) {
          if (
            recvData?.rep?.indexOf("kline") == -1 ||
            recvData?.rep?.indexOf(this.OriginalSymbol) == -1 ||
            recvData?.rep?.indexOf(period) == -1
          ) {
            return;
          }
        } else if (recvData?.ch) {
          if (
            recvData?.ch?.indexOf("kline") == -1 ||
            recvData?.ch?.indexOf(this.OriginalSymbol) == -1 ||
            recvData?.ch?.indexOf(period) == -1
          ) {
            return;
          }
        }
        this.RecvHistoryMinuteData(recvData, callback);
      });
    },
    //接收分钟全量数据
    RecvHistoryMinuteData(recvData, callback) {
      if (recvData?.ch?.indexOf("kline") == -1) {
        return;
      }
      if (recvData?.ch?.indexOf(this.OriginalSymbol) == -1) {
        return;
      }
      let period = KLINE_PERIOD_ID[this.KLine.Option.KLine.Period];
      if (recvData?.ch?.indexOf(period) == -1) {
        return;
      }
      let hqChartData = {};
      if (recvData.ping) {
        //回复服务器心跳包
        var pong = { pong: recvData.ping };
        var message = JSON.stringify(pong);
        this.ws.send(message);
      } else if (recvData?.data) {
        this.transformHqData_historyMinuteData(recvData, callback);
      } else if (recvData?.tick) {
        this.transformHqData_historyMinuteData(recvData, callback);
      }

      if (!this.currentSub) {
        let period = KLINE_PERIOD_ID[this.KLine.Option.KLine.Period];
        let message = `{"sub":"market.${this.OriginalSymbol}.kline.${period}","symbol":"${this.OriginalSymbol}","period":"${period}"}`;
        this.currentSub = message;
        this.ws.send(message);
      }
    },
    //格式转换（分钟全量数据转hqchart格式）
    transformHqData_historyMinuteData(recvData, callback) {
      let hqChartData = {};

      var yClose = null; //前收盘
      if (recvData.data) {
        hqChartData = {
          code: 0,
          data: [],
          name: this.OriginalSymbol,
          symbol: this.Symbol,
        };

        let yClose = null; //前收盘
        for (var i in recvData.data) {
          var item = recvData.data[i];

          //时间戳转换
          var dateTime = new Date();
          dateTime.setTime(item.id * 1000);
          var date =
            dateTime.getFullYear() * 10000 +
            (dateTime.getMonth() + 1) * 100 +
            dateTime.getDate();
          var time = dateTime.getHours() * 100 + dateTime.getMinutes();

          var newItem = [
            date,
            yClose,
            item.open,
            item.high,
            item.low,
            item.close,
            item.vol,
            item.amount,
            time,
          ];

          yClose = item.close;
          hqChartData.data.push(newItem);

          callback(hqChartData);
        }
      } else if (recvData.tick) {
        hqChartData = {
          code: 0,
          data: [],
          name: this.OriginalSymbol,
          symbol: this.Symbol,
          ver: 2,
        };

        let item = recvData.tick;

        let dateTime = new Date();
        dateTime.setTime(item.id * 1000);
        let date =
          dateTime.getFullYear() * 10000 +
          (dateTime.getMonth() + 1) * 100 +
          dateTime.getDate();
        let time = dateTime.getHours() * 100 + dateTime.getMinutes();
        let newItem = [
          date,
          null,
          item.open,
          item.high,
          item.low,
          item.close,
          item.vol,
          item.amount,
          time,
        ];

        hqChartData.data.push(newItem);

        g_KLine?.JSChart?.JSChartContainer?.RecvMinuteRealtimeData(hqChartData);
      }
    },

    //请求数据
    requestWebSocket(message, callback, isForce) {
      console.log("请求数据");
      if (!this.SocketOpen) {
        this.ws = new WebSocket(this.WSUrl);

        this.ws.onopen = (event) => {
          this.SocketOpen = true;
          this.ws.send(message);

          setTimeout(() => {
            //req之后需要进行一次sub订阅
            let subMessage = '{"sub' + message.substring(5);
            this.ws.send(subMessage);

            //必须要请求并订阅k线图的1day数据
            if (
              message.indexOf("kline") == -1 ||
              message.indexOf("1day") == -1
            ) {
              let period = "1day";
              let kMessage = `{"req":"market.${this.OriginalSymbol}.kline.${period}","symbol":"${this.OriginalSymbol}","period":"${period}"}`;
              this.ws.send(kMessage);
              setTimeout(() => {
                let subMessage = '{"sub' + kMessage.substring(5);
                this.ws.send(subMessage);
              }, 10);
            }

            //必须要请求并订阅深度图数据
            if (message.indexOf("depth") == -1) {
              let depMessage = `{"req":"market.${this.OriginalSymbol}.depth.step0","symbol":"${this.OriginalSymbol}","type":"step0"}`;
              this.ws.send(depMessage);
              setTimeout(() => {
                let subMessage = '{"sub' + depMessage.substring(5);
                this.ws.send(subMessage);
              }, 10);
            }
          }, 10);
        };
      } else {
        this.ws.send(message);

        setTimeout(() => {
          //req之后需要进行一次sub订阅
          let subMessage = '{"sub' + message.substring(5);
          this.ws.send(subMessage);

          //如果是强制更新，必须要请求并订阅k线图的1day数据（股票切换后，需要强制更新）
          if (
            isForce &&
            (message.indexOf("kline") == -1 || message.indexOf("1day") == -1)
          ) {
            let period = "1day";
            let kMessage = `{"req":"market.${this.OriginalSymbol}.kline.${period}","symbol":"${this.OriginalSymbol}","period":"${period}"}`;
            this.ws.send(kMessage);
            setTimeout(() => {
              let subMessage = '{"sub' + kMessage.substring(5);
              this.ws.send(subMessage);
            }, 10);
          }

          //如果是强制更新，必须要请求并订阅深度图数据（股票切换后，需要强制更新）
          if (isForce && message.indexOf("depth") == -1) {
            let depMessage = `{"req":"market.${this.OriginalSymbol}.depth.step0","symbol":"${this.OriginalSymbol}","type":"step0"}`;
            this.ws.send(depMessage);
            setTimeout(() => {
              let subMessage = '{"sub' + depMessage.substring(5);
              this.ws.send(subMessage);
            }, 10);
          }
        }, 10);
      }

      this.ws.onmessage = async (event) => {
        let recvData = await this.blobToJson(event);
        // console.log('收到服务器消息:')
        // console.log(recvData)
        callback ? callback(recvData) : "";

        //如果是强制更新，或者昨日为空，需要重新设置昨日K线数据
        if (isForce || !this.yesterdayData) {
          if (
            recvData?.req?.indexOf("kline") != -1 &&
            recvData?.rep?.indexOf("1day") != -1 &&
            recvData?.req?.indexOf(this.OriginalSymbol) != -1
          ) {
            try {
              this.yesterdayData = recvData?.data[recvData?.data?.length - 2];
              console.log("yesterdayData:");
              console.log(this.yesterdayData);
            } catch (error) {
              //
            }
          }
        }

        //更新全局的深度图数据
        if (recvData?.ch?.indexOf("depth") != -1) {
          this.updateDepthData(recvData);
        }

        //更新今天的最新k线图数据
        if (
          recvData?.rep?.indexOf("kline") != -1 ||
          recvData?.ch?.indexOf("kline") != -1
        ) {
          this.updateTodayData(recvData);
        }
      };
    },
    //取消当前的主题订阅
    unsub(message, isForce) {
      return new Promise((resolve, reject) => {
        //执行要取消的订阅主题
        if (
          !(message.indexOf("kline") != -1 && message.indexOf("1day") != -1) &&
          !(message.indexOf("depth") != -1)
        ) {
          //如果是1day的k线图，不需要取消订阅，如果是强制更新，后面的代码会执行取消订阅
          //如果是深度数据，不需要取消订阅，如果是强制更新，后面的代码会执行取消订阅
          this.ws.send(message);
        }

        //取消k线图1day的订阅
        // if(isForce && (message.indexOf('kline')==-1 || message.indexOf('1day')==-1)){
        if (isForce) {
          let kMessage = `{"unsub":"market.${this.OriginalSymbol}.kline.1day","symbol":"${this.OriginalSymbol}","period":"1day"}`;
          this.ws.send(kMessage);
        }
        //取消深度数据订阅
        // if(isForce && (message.indexOf('depth')==-1)){
        if (isForce) {
          let depMessage = `{"unsub":"market.${this.OriginalSymbol}.depth.step0","symbol":"${this.OriginalSymbol}","type":"step0"}`;
          this.ws.send(depMessage);
        }
        setTimeout(() => {
          //这里延迟100ms的原因，是因为发送取消订阅给服务器后，需要收到服务器的取消成功消息，才是真正的取消订阅了。
          resolve();
        }, 100);
      });
    },
    //清除画布（hqchart插件的）
    clearChart() {
      if (g_KLine.JSChart) {
        g_KLine.JSChart.ChartDestory();
        g_KLine.JSChart = null;
      }

      var divKLine = document.getElementById("kline");
      while (divKLine.hasChildNodes()) {
        divKLine.removeChild(divKLine.lastChild);
      }
    },

    //切换股票
    async changeSymbol(symbol) {
      if (this.OriginalSymbol == symbol) {
        return;
      }

      let message = "";
      if (this.currentType == "k") {
        let period = KLINE_PERIOD_ID[this.KLine.Option.KLine.Period];
        message = `{"unsub":"market.${this.OriginalSymbol}.kline.${period}","symbol":"${this.OriginalSymbol}","period":"${period}"}`;
      } else if (this.currentType == "m") {
        message = `{"unsub":"market.${this.OriginalSymbol}.kline.1min","symbol":"${this.OriginalSymbol}","period":"1min"}`;
      } else if (this.currentType == "d") {
        message = `{"unsub":"market.${this.OriginalSymbol}.depth.step0","symbol":"${this.OriginalSymbol}","type":"step0"}`;
      }
      await this.unsub(message, true); //先取消当前的主题订阅
      console.log("已取消所有旧主题");

      this.OriginalSymbol = symbol;
      this.Symbol = symbol + ".BIT";

      //订阅新主题
      let newMessage = "";
      if (this.currentType == "k") {
        let period = KLINE_PERIOD_ID[this.KLine.Option.KLine.Period];
        newMessage = `{"req":"market.${this.OriginalSymbol}.kline.${period}","symbol":"${this.OriginalSymbol}","period":"${period}"}`;
      } else if (this.currentType == "m") {
        newMessage = `{"req":"market.${this.OriginalSymbol}.kline.1min","symbol":"${this.OriginalSymbol}","period":"1min"}`;
      } else if (this.currentType == "d") {
        newMessage = `{"req":"market.${this.OriginalSymbol}.depth.step0","symbol":"${this.OriginalSymbol}","type":"step0"}`;
      }

      this.requestWebSocket(newMessage, false, true); //第三个参数true，强制更新
      setTimeout(() => {
        //这里延迟的原因是，等待重新订阅了主题后，再更新当前的图
        if (this.currentType == "k") {
          g_KLine.JSChart.ChangeSymbol(this.Symbol);
        } else if (this.currentType == "m") {
          //这里分时图的更新，采取清除分时图，再重新创建分时图的方式
          this.clearEchart();
          setTimeout(() => {
            this.createMinuteByEcharts();
          }, 10);
        } else if (this.currentType == "d") {
          g_KLine.JSChart.ChangeSymbol(this.Symbol);
        }
      }, 800);
    },

    //更新全局的深度图数据
    updateDepthData(recvData) {
      if (
        recvData?.ch?.indexOf(this.OriginalSymbol) == -1 ||
        recvData?.ch?.indexOf("depth") == -1
      ) {
        return;
      }
      let obj = {};
      try {
        if (recvData?.data) {
          obj = {
            asks: recvData?.data?.asks?.slice(
              recvData?.data?.asks?.length - 6,
              recvData?.data?.asks?.length - 1
            ),
            bids: recvData?.data?.bids?.slice(
              recvData?.data?.bids?.length - 6,
              recvData?.data?.bids?.length - 1
            ),
          };
        } else if (recvData?.tick) {
          obj = {
            asks: recvData?.tick?.asks?.slice(
              recvData?.tick?.asks?.length - 6,
              recvData?.tick?.asks?.length - 1
            ),
            bids: recvData?.tick?.bids?.slice(
              recvData?.tick?.bids?.length - 6,
              recvData?.tick?.bids?.length - 1
            ),
          };
        }
        // this.update_depthData(obj); //调用全局方法
        store.commit("update_depthData", obj);
      } catch (error) {
        //
      }
    },
    //更新今天的最新k线数据
    updateTodayData(recvData) {
      //监听接受到消息的时候，已经判断过是属于kline的
      if (
        recvData?.rep?.indexOf(this.OriginalSymbol) == -1 ||
        recvData?.ch?.indexOf(this.OriginalSymbol) == -1
      ) {
        return;
      }
      if (
        recvData?.rep?.indexOf("1day") == -1 ||
        recvData?.ch?.indexOf("1day") == -1
      ) {
        return;
      }
      if (recvData?.data) {
        this.todayData = recvData?.data[recvData?.data?.length - 1];
      } else if (recvData?.tick) {
        this.todayData = recvData?.tick;
      }
      let val = {
        type: this.OriginalSymbol,
        yesterday: this.yesterdayData,
        today: this.todayData,
      };
      // this.update_digitalCurrency(val); //调用全局方法
      store.commit("update_digitalCurrency", val);
    },
    //k线图的周期切换
    async changePeriod(period) {
      this.show_option = false; //隐藏菜单

      //如果现在不是k线图，先更新k线图的周期，然后直接切换到k线图
      if (this.currentType != "k") {
        this.KLine.Option.KLine.Period = period;
        this.switchChart("k");
        return;
      }

      if (this.KLine.Option.KLine.Period == period) {
        return;
      }

      //取消当前订阅
      let message = "";
      let period1 = KLINE_PERIOD_ID[this.KLine.Option.KLine.Period];
      message = `{"unsub":"market.${this.OriginalSymbol}.kline.${period1}","symbol":"${this.OriginalSymbol}","period":"${period1}"}`;
      await this.unsub(message);
      console.log("已取消所有旧订阅");

      this.KLine.Option.KLine.Period = period;

      //订阅新主题
      let period2 = KLINE_PERIOD_ID[this.KLine.Option.KLine.Period];
      let newMessage = `{"req":"market.${this.OriginalSymbol}.kline.${period2}","symbol":"${this.OriginalSymbol}","period":"${period2}"}`;
      this.requestWebSocket(newMessage); //第三个参数true

      setTimeout(() => {
        //这里延迟的原因是，等待重新订阅了主题后，再更新k线图
        g_KLine.JSChart.ChangePeriod(period);
      }, 800);
    },
    //k线图的指标切换
    changeIndex(name) {
      this.show_option = false; //隐藏菜单

      //如果当前不是k线图，先更新k线图的指标，然后直接切换至k线图
      if (this.currentType != "k") {
        this.KLine.Option.Windows[1].Index = name;
        this.switchChart("k");
        return;
      }

      if (this.KLine.Option.Windows[1].Index == name) {
        return;
      }
      this.KLine.Option.Windows[1].Index = name;
      if (g_KLine.JSChart) g_KLine.JSChart.ChangeIndex(1, name);
    },

    //使用echarts创建分时图
    createMinuteByEcharts() {
      var chartDom = document.getElementById("kline");
      g_echarts = echarts.init(chartDom);

      let message = `{"req":"market.${this.OriginalSymbol}.kline.1min","symbol":"${this.OriginalSymbol}","period":"1min"}`;
      this.requestWebSocket(message, (recvData) => {
        this.recvHistoryMinuteData_echarts(recvData);
      });

      // g_echarts.on('datazoom', (params)=>{
      //   if(params?.batch[0]?.start==0){
      //     // console.log('最左边了')
      //     this.HttpMinuteData()
      //   }
      // })
    },
    //echarts分时图接收数据
    recvHistoryMinuteData_echarts(recvData) {
      //不是kline、不是1min、不是当前股票
      if (
        recvData?.ch?.indexOf("kline") == -1 ||
        recvData?.ch?.indexOf("1min") == -1 ||
        recvData?.ch?.indexOf(this.OriginalSymbol) == -1
      ) {
        return;
      }

      if (recvData.ping) {
        //回复服务器心跳包
        var pong = { pong: recvData.ping };
        var message = JSON.stringify(pong);
        this.ws.send(message);
      } else if (recvData?.data) {
        this.transformEchartsData_historyMinuteData(recvData);
      } else if (recvData?.tick) {
        this.transformEchartsData_historyMinuteData(recvData);
      }
    },
    //echarts分时图的数据格式转换
    transformEchartsData_historyMinuteData(recvData) {
      var stock = { minute: [] };

      if (recvData?.data) {
        if(!this.httpMinute){
          this.httpMinute = recvData
        }
        for (let i in recvData.data) {
          let item = recvData.data[i];

          //时间戳转换
          var dateTime = new Date();
          dateTime.setTime(item.id * 1000);
          var date =
            dateTime.getFullYear() * 10000 +
            (dateTime.getMonth() + 1) * 100 +
            dateTime.getDate();
          var time = dateTime.getHours() * 100 + dateTime.getMinutes();

          let minuteItem = {
            amount: item.amount,
            close: item.close,
            count: item.count,
            high: item.high,
            id: item.id,
            low: item.low,
            open: item.open,
            vol: item.vol,
            date: date,
            time: time,
          };
          stock.minute.push(minuteItem);
        }
        this.minuteData_echarts = stock;
        this.updateMinuteEcharts();

        //设置分时图的label背景色
        if (
          this.minuteData_echarts.minute[
            this.minuteData_echarts.minute.length - 1
          ].close >
          this.minuteData_echarts.minute[
            this.minuteData_echarts.minute.length - 2
          ].close
        ) {
          this.labelBgColor_echarts = "rgba(14,203,129,.8)";
        } else {
          this.labelBgColor_echarts = "rgba(246,70,93,.8)";
        }
      } else if (recvData?.tick) {
        let item = recvData.tick;

        //时间戳转换
        let dateTime = new Date();
        dateTime.setTime(item.id * 1000);
        let date =
          dateTime.getFullYear() * 10000 +
          (dateTime.getMonth() + 1) * 100 +
          dateTime.getDate();
        let time = dateTime.getHours() * 100 + dateTime.getMinutes();
        let minuteItem = {
          amount: item.amount,
          close: item.close,
          count: item.count,
          high: item.high,
          id: item.id,
          low: item.low,
          open: item.open,
          vol: item.vol,
          date: date,
          time: time,
        };

        let currentData =
          this.minuteData_echarts.minute[
            this.minuteData_echarts.minute.length - 1
          ];
        if (minuteItem?.time == currentData?.time) {
          //时间相同则替换
          let minute = this.minuteData_echarts.minute;
          minute.splice(this.minuteData_echarts.minute.length - 1, 1);
          minute.push(minuteItem);
          let minuteData_echarts = { minute: minute };
          this.minuteData_echarts = minuteData_echarts;
        } else {
          let minuteData = this.minuteData_echarts;
          minuteData.minute.push(minuteItem);
          this.minuteData_echarts = minuteData;
        }
        this.updateMinuteEcharts();

        //设置分时图的label背景色
        if (
          this.minuteData_echarts.minute[
            this.minuteData_echarts.minute.length - 1
          ].close >
          this.minuteData_echarts.minute[
            this.minuteData_echarts.minute.length - 2
          ].close
        ) {
          this.labelBgColor_echarts = "rgba(14,203,129,.8)";
        } else {
          this.labelBgColor_echarts = "rgba(246,70,93,.8)";
        }
      }
    },
    //更新echarts分时图的数据
    updateMinuteEcharts() {
      if (!g_echarts) {
        return;
      }
      g_echarts.setOption({
        title: {
          text: "",
          left: "1%",
        },
        tooltip: {
          trigger: "axis",
          formatter: (params)=>{
            /*
            // console.log(params[0]?.name) //1508
            // console.log(params[0]?.data)
            let time = params[0]?.name?.substr(0,2) + ':' + params[0]?.name?.substr(2)
            let data = params[0]?.data
            return `${time}    ${data}`
            */
            // let time = params[0]?.name?.substr(0,2) + ':' + params[0]?.name?.substr(2)
            let time = params[0]?.name?.length < 4 ? '0'+params[0]?.name : params[0]?.name
            time = time?.substr(0,2) + ':' + time?.substr(2)
            let data = params[0]?.data
            let str = time + "<br />" + data
            return str
          }
        },
        grid: {
          left: "5%",
          right: "15%",
          bottom: "5%",
          show: true,
          borderColor: "#262A2D",
        },
        xAxis: {
          data: this.minuteData_echarts.minute.map(function (item) {
            return item.time;
          }),
          axisLabel: {
            // interval: 14,
            formatter: function (value) {
              if (value?.length < 4) {
                value = "0" + value;
              }
              let val = value.substring(0, 2) + ":" + value.substring(2, 4);
              return val;
            },
          },
        },
        yAxis: {
          min: (value) => {
            return Math.floor(value.min);
          },
          max: (value) => {
            return Math.ceil(value.max);
          },
          position: "right",
          splitLine: { show: true, lineStyle: { color: "#262A2D" } },
        },
        dataZoom: [
          {
            // startValue: "1037",
            show: false
          },
          {
            show: false,
            type: "inside",
            moveOnMouseWheel: false,
            preventDefaultMouseMove: false,
          },
        ],
        series: {
          symbol: "none",
          name: "",
          type: "line",
          data: this.minuteData_echarts.minute.map(function (item) {
            return item.close;
          }),
          lineStyle: {
            width: 1,
          },
          itemStyle: {
            color: "#fff",
            borderWidth: 0,
            // normal: {
            // 	color: '#fdfdfd',
            // 	borderWidth: 5
            // }
          },
          markLine: {
            symbol: "none",
            silent: true,
            data: [
              {
                lineStyle: {
                  color: "#4D545D",
                },
                label: {
                  color: "#fff",
                  lineHeight: 26,
                  backgroundColor: this.labelBgColor_echarts,
                },
                //0ECB81文字背景色
                yAxis:
                  this.minuteData_echarts.minute[
                    this.minuteData_echarts.minute.length - 1
                  ].close,
              },
            ],
            //
          },
        },
      });
      // g_echarts.on('datazoom', (params)=>{
      //   if(params?.batch[0]?.start==0){
      //     console.log('最左边了')
      //   }
      // })
    },
    //清除echarts分时图
    clearEchart() {
      echarts.init(document.getElementById("kline")).dispose(); //销毁创建的echarts实例
    },

    //k线图、echarts分时图、深度图之间的切换
    async switchChart(next) {
      this.show_option = false; //隐藏菜单

      if (next == this.currentType) {
        return;
      }

      //取消旧订阅
      let message = "";
      if (this.currentType == "k") {
        let period = KLINE_PERIOD_ID[this.KLine.Option.KLine.Period];
        message = `{"unsub":"market.${this.OriginalSymbol}.kline.${period}","symbol":"${this.OriginalSymbol}","period":"${period}"}`;
      } else if (this.currentType == "m") {
        message = `{"unsub":"market.${this.OriginalSymbol}.kline.1min","symbol":"${this.OriginalSymbol}","period":"1min"}`;
      } else if (this.currentType == "d") {
        message = `{"unsub":"market.${this.OriginalSymbol}.depth.step0","symbol":"${this.OriginalSymbol}","type":"step0"}`;
      }
      await this.unsub(message);
      console.log("已取消旧订阅");

      //清除旧图
      if (this.currentType == "k") {
        this.clearChart();
      } else if (this.currentType == "m") {
        this.clearEchart();
      } else if (this.currentType == "d") {
        this.clearChart();
      }

      //创建新图
      if (next == "k") {
        this.chartHeight = 500;
        setTimeout(() => {
          //这里延迟的原因是先等待页面元素的高度改变后，再创建新图
          this.createKLineChart();
        }, 10);
      } else if (next == "m") {
        this.chartHeight = 400;
        setTimeout(() => {
          this.createMinuteByEcharts();
        }, 10);
      } else if (next == "d") {
        this.chartHeight = 400;
        setTimeout(() => {
          this.createDepthLineChart();
        }, 10);
      }

      this.currentType = next;
    },

    //创建深度图
    createDepthLineChart() {
      if (g_KLine.JSChart) return;
      var blackStyle = HQChart.Chart.HQChartStyle.GetStyleConfig(
        HQChart.Chart.STYLE_TYPE_ID.BLACK_ID
      );
      blackStyle.FrameTitleBGColor = "rgb(24,28,31)";
      blackStyle.TitleFont = "20px 微软雅黑";
      HQChart.Chart.JSChart.SetStyle(blackStyle);

      let chart = HQChart.Chart.JSChart.Init(this.$refs.kline);
      this.DLine.Option.Symbol = this.Symbol;
      this.DLine.Option.NetworkFilter = this.NetworkFilter;
      chart.SetOption(this.DLine.Option);
      g_KLine.JSChart = chart;
    },
    //深度图全量数据下载
    RequestDepthData(data, callback) {
      data.PreventDefault = true;
      let message = `{"req":"market.${this.OriginalSymbol}.depth.step0","symbol":"${this.OriginalSymbol}","type":"step0"}`;
      this.requestWebSocket(message, (recvData) => {
        //必须是当前股票的深度数据
        if (
          (recvData?.rep?.indexOf("depth") != -1 &&
            recvData?.rep?.indexOf(this.OriginalSymbol) != -1) ||
          (recvData?.ch?.indexOf("depth") != -1 &&
            recvData?.ch?.indexOf(this.OriginalSymbol) != -1)
        ) {
          this.RecvHistoryData_depth(recvData, callback);
        }
      });
    },
    //深度图接收数据
    RecvHistoryData_depth(recvData, callback) {
      if (recvData.ping) {
        //回复服务器心跳包
        var pong = { pong: recvData.ping };
        var message = JSON.stringify(pong);
        this.ws.send(message);
      } else if (recvData?.data) {
        this.transformHqData_depthData(recvData, callback);
      } else if (recvData?.tick) {
        this.transformHqData_depthData(recvData, callback);
      }
    },
    // 格式转换（深度全量数据转hqchart格式）
    transformHqData_depthData(recvData, callback) {
      let hqChartData = {};

      var yClose = null; //前收盘
      if (recvData?.data) {
        hqChartData = {
          code: 0,
          asks: recvData.data.asks,
          bids: recvData.data.bids,
          datatype: "update",
        };
        callback(hqChartData);
      } else if (recvData?.tick) {
        hqChartData = {
          code: 0,
          asks: recvData.tick.asks,
          bids: recvData.tick.bids,
          datatype: "update",
        };
        callback(hqChartData);
      }
    },

    // webSocket返回数据的格式转换
    blobToJson(event) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = function (e) {
          let ploydata = new Uint8Array(this.result); //e.currentTarget.result
          let msg = pako.inflate(ploydata, { to: "string" });
          var recvData = JSON.parse(msg);
          resolve(recvData);
        };
        reader.readAsArrayBuffer(event.data);
      });
    },

    //模拟hqchart的拖拽请求历史数据
    HttpHistoryData(data, callback){
      // let testData = {
      //   id: null,
      //   data: [
      //     // [20210209,null,1716.8,1919.76,1644,1767.98,819750123.1479543,468079.7603236406],
      //     // [20210210,null,1716.8,1919.76,1644,1767.98,819750123.1479543,468079.7603236406]
      //     {
      //       amount: 89549.57725649753,
      //       close: 4353.19,
      //       count: 343071,
      //       high: 4386.41,
      //       id: 1638806400,
      //       low: 4096.16,
      //       open: 4125.1,
      //       vol: 383514014.0194454
      //     },
      //     {
      //       amount: 89549.57725649753,
      //       close: 4353.19,
      //       count: 343071,
      //       high: 4386.41,
      //       id: 1638806400,
      //       low: 4096.16,
      //       open: 4125.1,
      //       vol: 383514014.0194454
      //     }
      //   ],
      //   rep: 'market.ethusdt.kline.1day',
      //   status: 'ok',
      //   ts: 1638863751027
      // }
      // this.transformHqData_historyData(testData, callback);
    },
    //模拟echarts分时图的拖拽请求历史数据
    HttpMinuteData(){
      /*
      let data = [{
        amount: 8.052787586494658,
        close: 4392.22,
        count: 102,
        high: 4395.58,
        id: 1638865740,
        low: 4392.22,
        open: 4395.57,
        vol: 35388.14323144
      },{
        amount: 8.052787586494658,
        close: 4392.22,
        count: 102,
        high: 4395.58,
        id: 1638865740,
        low: 4392.22,
        open: 4395.57,
        vol: 35388.14323144
      }]
      let testData = {
        data: data.concat(this.httpMinute.data),
        id: null,
        rep: 'market.ethusdt.kline.1min',
        status: 'ok',
        ts: 1638865760780
      }

      console.log(testData)
      this.transformEchartsData_historyMinuteData(testData);
      */
    }

    // ...mapMutations("priceStore", [
    //   "update_digitalCurrency",
    //   "update_depthData",
    // ])
    
  },
};
</script>

<style lang='less' scoped>
.kline {
  width: 100vw;
  height: 4rem;
}
.menu {
  height: 0.8rem;
  box-sizing: border-box;
  border-top: 0.01rem solid #1d262b;
  border-bottom: 0.01rem solid #1d262b;
  display: flex;
  position: relative;
  &__item {
    height: 0.8rem;
    font-size: 0.28rem;
    color: #6b757b;
    box-sizing: border-box;
    padding: 0 0.3rem;
    box-sizing: border-box;
    border-right: 0.01rem solid #1d262b;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &--flex {
      flex: 1;
    }
    &__img {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 0.06rem;
      height: 0.06rem;
    }
    &__menuImg {
      width: 0.4rem;
      height: 0.4rem;
    }
    &__disable {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(255, 255, 255, 0.1);
    }
  }
  .select {
    position: absolute;
    left: 0;
    top: 0.8rem;
    width: 100vw;
    background: rgba(0, 0, 0, 0.3);
    // z-index: 994;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    &__center {
      width: 100%;
      background: #282e33;
      box-sizing: border-box;
      padding: 0 0.3rem;
      .row {
        height: 1.2rem;
        box-sizing: border-box;
        border-bottom: 0.01rem solid #1d262b;
        display: flex;
        align-items: center;
        .select__item {
          min-width: 20%;
          display: flex;
          justify-content: center;
          &__menu {
            height: 0.6rem;
            font-size: 0.28rem;
            color: #a6b5be;
            border-radius: 0.1rem;
            line-height: 0.6rem;
            min-width: 1.2rem;
            box-sizing: border-box;
            padding: 0 0.2rem;
            &--active {
              background: #20262a;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
.mask{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  background: rgba(0,0,0,0.5);
  z-index: 999;
}
.loadingBox{
  width: 100vw;
  height: calc(100vh - 3.20rem);
  position: fixed;
  top: 2.08rem;
  left: 0;
  z-index: 999;
}
</style>
