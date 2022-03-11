<template>
  <div class="sv">
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
    <div class="none">You have no past funding payments.</div>
  </div>
</template>

<script>
export default {
  name: "Payments",
};
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
