<template>
<div class="sv">
    <table>
      <tr>
          <th v-for="(item, index) in captionList" :key='index'>&nbsp;&nbsp;&nbsp;{{ item.value }}&nbsp;&nbsp;&nbsp;</th>
      </tr>
      <tr>
            <td v-if="Market" class="market">
                <div>
                    <img src="../../assets/image/btc.png" alt="">
                </div>
                <div>
                    <p>Ethereum</p>
                    <p>ETH-USD</p>
                </div>
            </td>
            <td v-if="IndexPrice" class="index_price">$39.070.13</td>
            <td v-if="h24Change" class="24h_change">
                <p class="red">5.44%</p>
                <p class="green">4.08%</p>
            </td>
            <td v-if="h1Funding" class="1h_funding">
                <p class="green">
                    0.000920%
                </p>
            </td>
            <td v-if="OpenInterest" class="open_interest">
                <p>89.71 BTC</p>
                <p>$3.524.058.85</p>
            </td>
      </tr>
    </table>
    <div class="none">You have no Markets.</div>
</div>
</template>
<script lang='TS'>
import { ref, toRefs, reactive, onMounted } from 'vue'
export default {
    components: {

    },
    props: ['captionList', 'api'],
    setup(props, context) {
        let showhidden = reactive({
            "Market": false,
            "IndexPrice": false,
            "h24Change": false,
            "h1Funding": false,
            "OpenInterest": false
        })
        props.captionList.map((item) => {
            if (item.value === "Market") showhidden.Market = true
            if (item.value === "IndexPrice") showhidden.IndexPrice = true
            if (item.value === "24hChange") showhidden.h24Change = true
            if (item.value === "1hFunding") showhidden.h1Funding = true
            if (item.value === "OpenInterest") showhidden.OpenInterest = true
        })
        console.log(props.captionList, props.api)
        return {
            ...toRefs(showhidden)
        }
    }
}
</script>
<style lang='less' scoped>
.sv {
  width: 100vw;
  background: #181d21;
  overflow-x: auto;
  table {
    border-collapse: collapse;
    th {
      height: 1.4rem;
      background: #20262a;
      border: none;
      box-sizing: border-box;
      padding: 0 0.4rem;
      color: #fff;
      font-size: 0.28rem;
    }
    td {
      height: 1.2rem;
      background: #181d21;
      font-size: 0.24rem;
      color: #85888a;
      box-sizing: border-box;
      border-bottom: 0.01rem solid #1d262b;
      text-align: center;
      position: relative;
    }
    .market{
      &>div {
          display: inline-block;
      }
      &>div:first-child {
          width: .48rem;
          height: 100%;
          margin-right: .16rem;
          line-height: 1.2rem;
          margin-left: .2rem;
          position: absolute;
          top: 0;
          left: 0;
          img {
              width: .48rem;
              height: .48rem;
              position: absolute;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
          }
      }
      &>div:last-child {
          color: #fff;
          height: 100%;
          margin-left: .25rem;
          p:first-child {
              font-size: .24rem;
              margin-top: 0.3rem;
          }
          p:last-child {
              font-size: .2rem;
              transform: scale(.84);
          }
      }
    }
    .open_interest {
        p:first-child {
            color: #fff;
        }
    }
  }
}
.green {
  color: #13a467 !important;
}
.red {
  color: #cf4d65 !important;
}
.none {
  height: 1.2rem;
  background: #181d21;
  font-size: 0.24rem;
  color: #85888a;
  box-sizing: border-box;
  border-bottom: 0.01rem solid #1d262b;
  padding-left: 0.4rem;
  line-height: 1.2rem;
}
</style>