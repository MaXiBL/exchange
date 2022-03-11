let pako = require('pako')
export const priceStore = {
  state: () => ({
    digitalCurrency: {
      currentType: 'btcusdt', //当前类型ethusdt
      btcusdt: {
        high: '$0',
        low: '$0',
        open: '$0',
        close: '$0',
        chg: '0%',      // 涨跌幅=(今日收盘价-昨日收盘价)/昨日收盘价*100% // (57979.32 - 56161.55) / 56161.55 = 3.24
        chgPrice: '$0', // 上涨或下跌的金额  今日收盘价-昨日收盘价
        // price: 'S0',     // 成交价
        yesterday: {},
        today: {}
      },
      ethusdt: {
        high: '$0',
        low: '$0',
        open: '$0',
        close: '$0',
        chg: '0%',      // 涨跌幅=(今日收盘价-昨日收盘价)/昨日收盘价*100% // (57979.32 - 56161.55) / 56161.55 = 3.24
        chgPrice: '$0', // 上涨或下跌的金额  今日收盘价-昨日收盘价
        price: 'S0',     // 成交价
        yesterday: {},
        today: {}
      }
    },
    depthData: {
      asks: [],
      bids: []
    }
  }),
  mutations: {
    //更新digitalCurrency， val：{type:'btcusdt',yesterday:{},today:{}}
    update_digitalCurrency(state, val){
      try {
      state.digitalCurrency.currentType = val.type

      //计算涨跌幅
      let chg = ((val.today.close - val.yesterday.close).toFixed(2) / (val.yesterday.close.toFixed(2)) * 100).toFixed(2)
      //计算上涨或下跌的金额
      let chgPrice = (val.today.close - val.yesterday.close).toFixed(2)

      state.digitalCurrency[val.type] = {
        // high: `$${val.today.high.toString().replace(/(?=\B(?:\d{3})+\b)(\d{3}(?:\.\d+$)?)/g,',$1')}`,
        // low: `$${val.today.low.toString().replace(/(?=\B(?:\d{3})+\b)(\d{3}(?:\.\d+$)?)/g,',$1')}`,
        // open: `$${val.today.open.toString().replace(/(?=\B(?:\d{3})+\b)(\d{3}(?:\.\d+$)?)/g,',$1')}`,
        high: state.digitalCurrency[val.type].high,
        low: state.digitalCurrency[val.type].low,
        open: state.digitalCurrency[val.type].open,
        close: `$${val.today.close.toString().replace(/(?=\B(?:\d{3})+\b)(\d{3}(?:\.\d+$)?)/g,',$1')}`,
        chg: `${chg}%`,
        chgPrice: `$${chgPrice.toString().replace(/(?=\B(?:\d{3})+\b)(\d{3}(?:\.\d+$)?)/g,',$1')}`,
        yesterday: val.yesterday,
        today: val.today
      }
      //一天的最高价、开盘价、最低价是不会变化的，只更新一次即可
      if(state.digitalCurrency[val.type].high=='$0'){
        state.digitalCurrency[val.type].high = `$${val.today.high.toString().replace(/(?=\B(?:\d{3})+\b)(\d{3}(?:\.\d+$)?)/g,',$1')}`;
        state.digitalCurrency[val.type].low = `$${val.today.low.toString().replace(/(?=\B(?:\d{3})+\b)(\d{3}(?:\.\d+$)?)/g,',$1')}`;
        state.digitalCurrency[val.type].open = `$${val.today.open.toString().replace(/(?=\B(?:\d{3})+\b)(\d{3}(?:\.\d+$)?)/g,',$1')}`;
      }

      } catch (error) {
        //
      }
    },
    //更新depthData
    update_depthData(state, val){
      if(val?.asks?.length>0){
        state.depthData = val
      }
    }
  }
}
