<template>
  <BackNav title='' />
  <div class="wrap">
    <el-form ref='formRef' :model="form">
      <el-form-item label="Name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Amount of own">
        <el-input v-model="form.amount"></el-input>
      </el-form-item>
      <el-form-item label="Total collect">
        <el-input v-model="form.totalCollect"></el-input>
      </el-form-item>
      <el-form-item label="Start time of collecting">
        <el-date-picker
          v-model="form.date1"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="End time of collecting">
        <el-date-picker
          v-model="form.date2"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="End time of market making">
        <el-date-picker
          v-model="form.date3"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        ></el-date-picker>
      </el-form-item>
      <div class="title">How to allocate yield</div>
      <div class="wrapBox">
        <div class="itemF">
          <span>Total revenue less than</span>
          <el-input v-model="form.rate1"></el-input>
          <span>%,</span>
        </div>
        <div class="itemF">Market makers do not participate in distribution.</div>
        <div class="itemF">
          <span>Total revenue above</span>
          <el-input v-model="form.rate2"></el-input>
          <span>%,</span>
        </div>
        <div class="itemF">
          <span>Market maker acquisition</span>
          <el-input v-model="form.rate3"></el-input>
          <span>%,</span>
        </div>
        <div class="itemF">
          <span>Total revenue above</span>
          <el-input v-model="form.rate4"></el-input>
          <span>%.</span>
        </div>
      </div>
      <el-form-item label="Market making strategy description">
        <el-input v-model="form.desc" type="textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive } from 'vue-demi'
export default{
  setup(){
    const form = reactive({
      name: '',
      amount: '',
      totalCollect: '',
      date1: '',
      date2: '',
      date3: '',
      rate1: '',
      rate2: '',
      rate3: '',
      rate4: '',
      desc: ''
    })

    return { form }
  }
}
</script>

<style scoped lang='less'>
.wrap{
  width: 100vw;
  box-sizing: border-box;
  padding: .30rem .30rem 0;
}
::v-deep{
  .el-form-item{
    display: block;
  }
  .el-form-item__label{
    font-size: .32rem;
    color: #fff;
  }
  .el-input__inner{
    background: #20262A;
    border: .01rem solid #808890;
  }
  .el-form-item__content{
    line-height: .80rem;
  }
  .el-input{
    line-height: .80rem;
  }
  .el-input__inner{
    line-height: .80rem;
    height: .80rem;
  }
}
.title{
  font-size: .32rem;
  color: #fff;
  margin-bottom: .16rem;
}
.wrapBox{
  width: 100%;
  box-sizing: border-box;
  border-radius: .10rem;
  background: #20262A;
  padding: .20rem .10rem;
  margin-bottom: .30rem;
  .itemF{
    width: 100%;
    display: flex;
    align-items: center;
    font-size: .28rem;
    color: #A6B5BE;
    margin-bottom: .20rem;
  }
}
::v-deep{
  .itemF{
    .el-input{
      line-height: .46rem;
      width: 1.30rem;
      margin: 0 .20rem;
      .el-input__inner{
        line-height: .46rem;
        height: .46rem;
      }
    }
  }
  .el-textarea__inner{
    background: #20262A;
    border: none;
  }
}
.test{
  width: 100vw;
  height: 5rem;
  //background: url("preview/%E9%A1%B5%E9%9D%A2-%EF%BC%88%E4%BF%AE%E6%94%B9%EF%BC%89-11-%E9%A6%96%E9%A1%B5.png?1641816409119") 0% 0% / 375px 663px no-repeat rgb(255, 255, 255);
}
</style>
