<template>
  <NavBar2 :tabs='["Trades","Transfers","Funding"]' @change='changeTab'/>
  <div class="sv" v-show="currentIndex==0">
    <table>
      <tr>
        <th>Time</th>
        <th>Market</th>
        <th>Side</th>
        <th>Amount/Filled</th>
        <th>Total/Fee</th>
        <th>Type</th>
        <th>Liquidity</th>
      </tr>
      <!-- <tr>
                    <td>08-12 11:57:58</td>
                    <td>ETH-USD</td>
                    <td class="red">-$0.0004</td>
                    <td>10%</td>
                    <td>0.000</td>
                    <td>1.000</td>
      </tr> -->
    </table>
    <div class="none">You have no trade history.</div>
  </div>
  <div class="sv" v-show="currentIndex==1">
    <table>
      <tr>
        <th>Time</th>
        <th>Action</th>
        <th>Status</th>
        <th>Amount/Fee</th>
        <th>Transaction</th>
      </tr>
      <!-- <tr>
                    <td>08-12 11:57:58</td>
                    <td>ETH-USD</td>
                    <td class="red">-$0.0004</td>
                    <td>10%</td>
                    <td>0.000</td>
                    <td>1.000</td>
      </tr> -->
    </table>
    <div class="none">You have no transfers history.</div>
  </div>
  <div class="sv" v-show="currentIndex==2">
    <table>
      <tr>
        <th>Time</th>
        <th>Market</th>
        <th>Payment</th>
        <th>Funding&nbsp;Rate</th>
        <th>Position</th>
        <th>Oracle&nbsp;Price</th>
      </tr>
      <!-- <tr>
                    <td>08-12 11:57:58</td>
                    <td>ETH-USD</td>
                    <td class="red">-$0.0004</td>
                    <td>10%</td>
                    <td>0.000</td>
                    <td>1.000</td>
      </tr> -->
    </table>
    <div class="none">You have no funding history.</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import NavBar2 from '../../../../components/navbar/NavBar2'

//导航栏切换逻辑
const useNavSwitchEffect = () => {
  let currentIndex = ref(0)
  const changeTab = (index) => {
    currentIndex.value = index
  }
  return { currentIndex, changeTab }
}

export default{
  components: {
    NavBar2
  },
  setup(){
    const { currentIndex, changeTab } = useNavSwitchEffect()
    return { currentIndex, changeTab } 
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
