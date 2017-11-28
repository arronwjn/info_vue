<template>
  <div class="sign">
    <myheader :title="title" :operaText="operaText" class="header"></myheader>
    <div class="div-1 div">
      <div>
        <i class="fa fa-mobile" aria-hidden="true" style="font-size:0.34rem"></i>
        <input type="text" placeholder="请输入您的手机号" class="type_input">
      </div>
      <div>
        <i class="fa fa-comment-o" aria-hidden="true"></i>
        <input type="text" placeholder="请输入您的密码" class="type_input">
      </div>
    </div>
    <div class="div-3">
      <input type="">
      <p>您已阅读并同意用户 <span>《注册协议》</span></p>
    </div>
    <div class="div-4" @click="forget()">忘记密码？</div>
    <div class="button">登录</div>
  </div>
</template>

<script>
  import myheader from '../components/header_1.vue'


  export default{
    name:'sign',
    data () {
      return{
        title:'登录',
        operaText:'注册'
      }
    },
    methods:{
      forget(){
        this.$router.push('forget');
      }
    },
    components:{
      myheader
    }
  }
</script>

<style scoped>
  .sign{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-color: rgb(244,245,246);
    font-size:0;
  }
  .header{
    position:fixed;
    top:0;
    left:0;
    right:0;
    border-bottom:0.005rem solid rgb(220,220,220);
  }
  .div{
    margin-top:0.65rem;
  }
  .div-1{
    background-color: #fff;
    border-bottom:0.005rem solid rgb(220,220,220);
  }
  .div-1>div{
    margin-left:0.15rem;
    padding-right:0.15rem;
    border-bottom:0.008rem solid rgb(220,220,220);
  }
  .div-1>div:last-child{
    border:none;
  }
  .div-1>div>i{
    display:inline-block;
    vertical-align: top;
    margin-top: 0.1rem;;
    width: 0.24rem;
    height: 0.24rem;
    line-height: 0.24rem;
    padding-right:0.18rem;
    text-align: center;
    font-size:0.2rem;
    color:rgb(255,160,0);
  }
  .type_input{
    display:inline-block;
    /*width: 3.21rem;*/
    height:0.44rem;
    line-height:0.19rem;
    font-size:0.16rem;
    outline: none;
    border:none;
  }
  .type_input::-webkit-input-placeholder { /* WebKit browsers */
    color: #ccc;
  }
  input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #ccc;
  }
  input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #ccc;
  }
  input:-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #ccc;
  }
  .div-3{
    display:inline-block;
    margin-left:0.41rem;
    margin-top: 0.2rem;
  }
  .div-3 p{
    font-size:0.13rem;
    color:rgb(200,201,204);
  }
  .div-3>p>span{
    color:rgb(87,150,202);
  }
  .button{
    width:3.45rem;
    height: 0.44rem;
    line-height: 0.44rem;
    margin-left:0.15rem;
    margin-top:0.2rem;
    border-radius: 1rem;
    text-align: center;
    font-size:0.16rem;
    color:#fff;
    background:-webkit-gradient(linear, 0 0, 0 bottom, from(rgb(255,160,0)), to(rgb(255, 174, 0)));
  }
  .div-4{
    display:inline-block;
    margin-left:0.57rem;
    font-size:0.13rem;
    color:rgb(121,122,127);
  }
</style>
