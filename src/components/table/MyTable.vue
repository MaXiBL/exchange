<template>
    <div>
        <div class="sv">
            <table>
                <tr>
                    <th>Time</th>
                    <th>Market</th>
                    <th>Payment</th>
                    <th>Funding Rate</th>
                    <th>Position</th>
                    <th>Oracle Price</th>
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
    </div>
</template>

<script>
export default{
    name: 'MyTable'
}
</script>

<style lang='less' scoped>
.sv{
    width: 100vw;
    background: #181D21;
    overflow-x: auto;
    table{
        border-collapse: collapse;
        th{
            height: 1.40rem;
            background: #20262A;
            border: none;
            box-sizing: border-box;
            padding: 0 .40rem;
            color: #fff;
            font-size: .28rem;
        }
        td{
            height: 1.20rem;
            background: #181D21;
            font-size: .24rem;
            color: #85888A;
            box-sizing: border-box;
            border-bottom: .01rem solid #1D262B;
        }
    }
}
.green{
    color: #13A467 !important;
}
.red{
    color: #CF4D65 !important;
}
.none{
    height: 1.20rem;
    background: #181D21;
    font-size: .24rem;
    color: #85888A;
    box-sizing: border-box;
    border-bottom: .01rem solid #1D262B;
    padding-left: .40rem;
    line-height: 1.20rem;
}
</style>
