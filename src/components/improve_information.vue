<template>
  <div class="info">
    <div class="div-1 div">
      <div>
        <label>姓</label>
        <input type="text"  class="type_input">
      </div>
      <div>
        <label>名</label>
        <input type="text"  class="type_input">
      </div>
      <div style="border:none" id="popup">
        <group style="border:none">
          <popup-radio title="性别" :options="options2" v-model="option2" placeholder="请选择" style="margin-top:0" class="popu"></popup-radio>
        </group>
      </div>
      <div style="border:none" id="popup">
        <group style="border:none">
          <popup-radio title="所在地" :options="options1" v-model="option1" placeholder="请选择" style="margin-top:0" class="popu popu2"></popup-radio>
        </group>
      </div>
    </div>
    <div class="div-1 div-2 div">
      <div>
        <label>邮箱</label>
        <input type="text"  class="type_input" placeholder="请输入邮箱">
      </div>
      <div>
        <label>所在单位</label>
        <input type="text"  class="type_input" placeholder="请输入单位名称">
      </div>
      <div>
        <label>职务</label>
        <input type="text"  class="type_input" placeholder="请输入职务名称">
      </div>
      <div style="border:none" id="popup">
        <group style="border:none">
          <popup-radio title="学历" :options="options1" v-model="option1" placeholder="请选择" style="margin-top:0" class="popu popu2"></popup-radio>
        </group>
      </div>
    </div>
    <div class="div-1 div-2 div">
      <div style="border:none" id="popup">
        <group style="border:none">
          <popup-radio title="感兴趣的行业" :options="options1" v-model="option1" placeholder="请选择" style="margin-top:0" class="popu"></popup-radio>
        </group>
      </div>
      <div style="border:none" id="popup">
        <group style="border:none">
          <popup-radio title="感兴趣的话题" :options="options1" v-model="option1" placeholder="请选择" style="margin-top:0" class="popu popu2"></popup-radio>
        </group>
      </div>
    </div>
    <div class="button">提交</div>
  </div>
</template>

<script>
  import myheader from './header_1.vue';
  import { Group, PopupRadio } from 'vux';


  export default{
    name:'info',
    data () {
      return{
        option2: '',
        option1: '',
        options2: [
          {
          key: 'A',
          value: '男'
          }, {
          key: 'B',
          value: '女'
          }
        ],
        options1: [
          {
            key: 'A',
            value: 'label A'
          }, {
            key: 'B',
            value: 'label B'
          }
        ]
      }
    },
    components:{
      myheader,
      Group,
      PopupRadio
    }
  }
</script>

<style scoped>
  .info{
    width: 100%;
    height:100%;
    overflow-y: auto;
    background-color: rgb(244,245,246);
  }
  .div{
    margin-top:0.65rem;
    z-index:999;
  }
  .div-1{
    background-color: #fff;
    border-bottom:0.005rem solid rgb(220,220,220);
  }
  .div-1>div{
    height: 0.44rem;
    line-height:0.44rem;
    margin-left:0.15rem;
    /*padding-right:0.15rem;*/
    border-bottom:0.008rem solid rgb(220,220,220);
  }
  .div-1>div:last-child{
    border:none;
  }
  .type_input{
    display:inline-block;
    padding-left:0.15rem;
    vertical-align: inherit;
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
  .div-1>div>label{
    font-size:0.16rem;
    color:rgb(93,94,102);
  }
  #popup{
    /*font-size:0;*/
    margin-top:0;
    border:none;
  }
  #popup .vux-no-group-title+.weui-cells{
    margin-top:0;
  }
  #popup .weui-cells{
    margin-top:0;
  }
  #popup>div>.weui-cells>.popu{
    height: 0.44rem;
    line-height:0.44rem;
    font-size:0.16rem;
    padding:0;
    padding-right:0.15rem;
    color:rgb(93,94,102);
    border-bottom:0.008rem solid rgb(220,220,220);
  }
  #popup>div>.weui-cells>.popu2{
    border-bottom:0;
  }
  .info .div-2{
    margin-top:0.2rem;
  }
  .info .div-2>div>label{
    display:inline-block;
    width: 0.8rem;
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
    background-color: rgb(255,160,0);
  }
</style>
