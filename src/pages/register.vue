<template>
  <div class="register">
    <div class="register_index" >
      <myheader :title="detailTitle" class="header"></myheader>
      <div class="div-1 div">
        <div>
          <i class="fa fa-mobile" aria-hidden="true" style="font-size:0.34rem"></i>
          <input type="text" placeholder="请输入您的手机号" class="type_input">
        </div>
        <div>
          <i class="fa fa-comment-o" aria-hidden="true"></i>
          <input type="text" placeholder="请输入验证码" class="type_input">
          <div class="getcode">获取验证码</div>
        </div>
      </div>
      <div class="div-2 div-1">
        <div>
          <i class="fa fa-mobile" aria-hidden="true" style="font-size:0.34rem"></i>
          <input type="text" placeholder="请输入您的密码" class="type_input">
        </div>
        <div>
          <i class="fa fa-comment-o" aria-hidden="true"></i>
          <input type="text" placeholder="确认您的密码" class="type_input"  v-model="confimPas">
        </div>
      </div>
      <div class="div-3">
        <input type="">
        <p>您已阅读并同意用户 <span>《注册协议》</span></p>
      </div>
      <div class="button" @click="next()" :class="{active:showButton}">下一步</div>
    </div>
    <transition name="slide-right">
      <!--<keep-alive>-->
        <div class="improve_info" v-if="infoShow">
          <div class="header">
            <div class="icon"><i class="fa fa-angle-left" aria-hidden="true" @click="back()"></i></div>
            <div class="title">
              {{infoTitle}}
            </div>
            <div class="operating"></div>
          </div>
          <info></info>
        </div>
      <!--</keep-alive>-->
    </transition>
  </div>
</template>

<script>
  const myheader = resolve => require(['../components/header_1.vue'], resolve);
  const Info = resolve => require(['../components/improve_information.vue'], resolve);

  export default{
    name:'register',
    data () {
      return {
        detailTitle:'游客注册',
        infoTitle:'完善信息',
        infoShow:false,
        confimPas:''
      }
    },
    methods:{
      next(){
        this.infoShow=true;
      },
      back(){
        this.infoShow=false;
      }
    },
    computed:{
      showButton(){
        if(this.confimPas){
          return true;
        }else{
          return false;
        }
      }
    },
    components:{
      myheader,
      Info,
    }
  }
</script>

<style scoped>
  .register{
    width:100%;
    height:100%;
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
    height: 0.44rem;
    line-height: 0.44rem;
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
    vertical-align: middle;
    height:0.34rem;
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
  .getcode{
    display: inline-block;
    float: right;
    width:0.9rem;
    height:0.3rem;
    line-height: 0.3rem;
    vertical-align: top;
    margin-top:0.07rem;
    border-radius: 1rem;
    background-color: rgb(255,179,26);
    text-align: center;
    font-size:0.13rem;
    color:#fff;
  }
  .div-2{
    margin-top:0.2rem;
  }
  .div-3{
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
    background-color: #b1b1b1;
  }
  .active{
    background-color: rgb(255,160,0);
  }
  /*完善信息页面切换动画*/

  .improve_info{
    position: fixed;
    top:0;
    width:100%;
    height: 100%;
    transition: all .5s  ease;
  }
  /*.slide-right-enter, .slide-right-leave-active {*/
    /*opacity: 0;*/
    /*-webkit-transform: translate(-50px, 0);*/
    /*transform: translate(-50px, 0);*/
  /*}*/
  .slide-right-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }
  /*完善信息header*/
  .header{
    display:flex;
    justify-content:space-between;
    align-item:center;
    width: 100%;
    height:0.44rem;
    font-size:0;
    background:-webkit-gradient(linear, 0 0, 0 bottom, from(rgb(248,247,244)), to(rgb(255, 255, 255)));
    background-color: rgb(248,247,244);
  }
  .header>div{
    width:33.3%;
  }
  .icon{
    display:inline-block;
    line-height:0.44rem;
    vertical-align: top;
  }
  .icon i{
    padding:0 0.15rem;
    height:0.44rem;
    line-height:0.44rem;
    color:rgb(220,220,220);
    font-size:0.35rem;
  }
  .title{
    display:inline-block;
    text-align: center;
    vertical-align: middle;
    line-height:0.44rem;
    letter-spacing:-0.004px;
    font-size:0.16rem;
    color:rgb(93,94,102);
    font-family: "SFUIDisplay-Regular" ! important;
    font-weight:500;
  }
</style>
