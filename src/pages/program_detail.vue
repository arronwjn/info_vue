<template>
  <div class="detail">
      <!--<myheader class="header" :title="detailTitle" ></myheader>-->
    <h3>沪指站上3300点意味着慢牛行情确立</h3>
    <span class="date">2017-08-26 14:30:24</span>
    <p class="content">
      我前段时间提出“白龙马”概念，即白马股 龙头股的合称，今年资金倾向于选择业绩比较稳定的股票，
      所以白马股和龙头股表现突出，很多个股屡创新高。
      但是在其新高之后投资者对其追涨产生了一定犹豫，加之这段期间“白龙马”股产生了一定震荡，而前期涨幅不大的周期股异军崛起。
      本周五，在周期股和金融股的联袂上涨下，沪指一举突破3300点，并收于全天最高点3331点！
    </p>
    <!-- <loading :show="show1" :text="text1" :position="absolut"></loading> -->
  </div>
</template>

<script>
  import myheader from '../components/header_1.vue';
  import { Loading } from 'vux'

  export default{
    name:'programDetail',
    data () {
      return {
        detailTitle:'文章详情',
        show1:true,
        text1: 'Processing'
      }
    },
    created () {

    },
    methods:{
    },
    components:{
      myheader,
      Loading,
    }
  }
</script>

<style scoped>
  .detail{
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
  .detail>h3{
    padding:0 0.15rem;
    margin-top:0.16rem;
    text-align:left;
    line-height:0.26rem;
    font-size:0.2rem;
    color:rgb(70,70,77);
    font-weight:initial;

  }
  .date{
    display:inline-block;
    padding:0.13rem 0.15rem 0 0.15rem;
    font-size:0.14rem;
    color:rgb(163,165,174);
    opacity:0.6;
  }
  .content{
    padding:0 0.15rem;
    margin-top: 0.15rem;
    line-height:0.22rem;
    font-size:0.13rem;
    text-align:justify;
    color:rgb(93,94,102);
    /*background-color: #fff;*/
  }

  .button{
  display: flex;
  justify-content: space-around;

}
.button button{
  position: relative;
  width: 4rem;
  height: 1.5rem;
  border:none;
  outline: none;
  background-color: #2196f3;
  border-radius: 0.125rem;
  color:#fff;
  border:1px solid #fff;
  font-size: 0.7rem;
}
.button input{
  position: absolute;
  top:0;
  left:0;
  width: 4rem;
  height: 1.5rem;
  opacity: 0;
}
</style>
