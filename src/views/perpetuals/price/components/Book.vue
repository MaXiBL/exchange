<template>
  <div class="sv">
    <table>
      <tr>
        <th>
          <div class="wrap__th">
            <span class="th__title">Size</span>
            <div class="th__label">ETH</div>
          </div>
        </th>
        <th>
          <div class="wrap__th">
            <span class="th__title">Price</span>
            <div class="th__label">USD</div>
          </div>
        </th>
        <th>
          <div class="wrap__th">
            <span class="th__title">Mine</span>
          </div>
        </th>
      </tr>
      <tr>
        <td>180.420</td>
        <td>3225.5</td>
        <td>-</td>
      </tr>
      <tr>
        <td>180.420</td>
        <td>3225.5</td>
        <td>-</td>
      </tr>
      <tr>
        <td>180.420</td>
        <td>3225.5</td>
        <td>-</td>
      </tr>
      <tr>
        <td>180.420</td>
        <td>3225.5</td>
        <td>-</td>
      </tr>
    </table>
    <table class="table2">
      <tr>
        <th>Spread</th>
        <th>1.4</th>
        <th>0.05%</th>
      </tr>
      <tr>
        <td>180.420</td>
        <td>3225.5</td>
        <td>-</td>
      </tr>
      <tr>
        <td>180.420</td>
        <td>3225.5</td>
        <td>-</td>
      </tr>
      <tr>
        <td>180.420</td>
        <td>3225.5</td>
        <td>-</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Book",
};
</script>

<style lang='less' scoped>
.sv {
  width: 100vw;
  white-space: nowrap;
  overflow-x: auto;
  // display: flex;
  background: #181c1f;
  box-sizing: border-box;
  padding-top: .30rem;
  table {
    border-collapse: collapse;
    th {
      min-width: 2.50rem;
      box-sizing: border-box;
      padding: 0 .40rem .20rem;
      .wrap__th {
        display: flex;
        align-items: center;
        justify-content: center;
        .th__title {
          font-size: .24rem;
          color: #6b757b;
        }
        .th__label {
          background: #20262a;
          font-size: .20rem;
          color: #a6b5be;
          border-radius: .04rem;
          display: flex;
          justify-content: center;
          align-items: center;
          height: .32rem;
          margin-left: .06rem;
        }
      }
    }
    td {
      height: .40rem;
      line-height: .40rem;
      font-size: .24rem;
      color: #fff;
      text-align: center;
    }
  }
  .table2 {
    height: .80rem;
    box-sizing: border-box;
    margin-top: .20rem;
    th {
      color: #6b757b;
      font-size: .02rem;
      padding-top: .20rem;
      border-top: .01rem solid #1c2125;
      border-bottom: .01rem solid #1c2125;
    }
  }
}
</style>