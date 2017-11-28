<template>
  <div class="info_home" id="info_home" >
    <div id="info_home_content" ref="wrapper">
      <div>
        <div class="top">
          <div class="search">
            <div class="search_input" @click="jumpfocus">
              <i class="fa fa-search" aria-hidden="true"></i>
              <div class="desc">搜索您感兴趣的信息</div>
            </div>
            <i class="fa fa-comment-o" aria-hidden="true"></i>
          </div>
          <div class="banner">
            <img src="../../../static/images/banner.png" alt="njkn">
          </div>
          <div>
            <tab :line-width=2 active-color='rgb(255,160,0)' v-model="index" custom-bar-width="0.6rem">
              <tab-item class="vux-center">
                  <router-link :to="{path:'/info/information'}" class="active_a">推荐</router-link>
              </tab-item>
              <tab-item class="vux-center">
                  <router-link :to="{path:'/info/technology'}" class="active_a">技术专题</router-link>
              </tab-item>
              <tab-item class="vux-center">
                  <router-link :to="{path:'/info/business'}" class="active_a">业务专题</router-link>
              </tab-item>
            </tab>
          </div>
        </div>
        <router-view></router-view>
      </div>
      
    </div>
  </div>
</template>

<script>
  import FetchDataModule from '../../config/fetch'
  import { Search } from 'vux';
  import BScroll from 'better-scroll';
  import { Tab, TabItem,Swiper, SwiperItem } from 'vux'

  export default{
    name:'info_home',
    data () {
      return{
        value: '',
        index:0,
        results: [],
        scroll:null
      }
    },
    created () {
      FetchDataModule.fetch('SEARCHACTIVITY',{})
      .then(res=>{
        this.$nextTick(()=>{
          this.initScroll();
        })
      })
      
    },
    mounted(){
      this.initScroll();
      // this.$nextTick(()=>{
        
      // })
      // const scroll = new BScroll(document.getElementById('info_home'),{
      //     startY: 0,
      //     click: true
      //   });
    },
    methods:{
      jumpfocus(){
        this.$router.push('/search');
        console.log('sdfdsf');
      },
      initScroll(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true
          });
        // if(!this.scroll){
          
        // }else{
        //   this.scroll.refresh();
        // }
      }
    },
    components:{
      Search,
      Tab,
      TabItem,
      Swiper,
      SwiperItem
    }

  }
</script>

<style scoped>
  @import '../../../static/css/vux.css';
  /* @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/center.less'; */

  .box {
    padding: 15px;
  }
  .active-6-1 {
    color: rgb(252, 55, 140) !important;
    border-color: rgb(252, 55, 140) !important;
  }
  .active-6-2 {
    color: #04be02 !important;
    border-color: #04be02 !important;
  }
  .active-6-3 {
    color: rgb(55, 174, 252) !important;
    border-color: rgb(55, 174, 252) !important;
  }
  .tab-swiper {
    background-color: #fff;
    height: 100px;
  }
  @import '../../../static/css/vux.css';

  .info_home{
    height:100%;
    font-size:0;
    overflow: hidden;
    /* padding-bottom:0.52rem; */
  }
  #info_home_content{
    height: 100%;
    overflow: hidden;
    /* padding-bottom:0.52rem; */
  }
  .top{
    position: relative;
    font-size:0.16rem;
  }
  .search{
    /* height: 0.28rem; */
    overflow: hidden;
    font-size:0;
    background:-webkit-gradient(linear, 0 0, 0 bottom, from(rgb(248,247,244)), to(rgb(255, 255, 255)));
    background-color: rgb(248,247,244);
  }
  .search_input{
    width: 3.2rem;
    height: 0.28rem;
    line-height:0.28rem;
    vertical-align: middle;
    text-align: center;
    margin-left:0.1rem;
    margin-top:0.07rem;
    margin-bottom:0.09rem;
    border-radius: 0.04rem;
    font-size:0rem;
    border:none;
    outline: none;
    background-color: rgb(238,238,238);
  }
  .search_input:before{
    display:inline-block;
    vertical-align: middle;
  }
  .fa-search{
    vertical-align: middle;
    margin-right:0.04rem;
    font-size: 0.16rem;
    color:rgb(200,201,204);
  }
  .search input::-webkit-input-placeholder { /* WebKit browsers */
    text-align: center;
    color: rgb(121,122,128);
    font-size:0.14rem;
  }
  .fa-comment-o{
    position: absolute;
    right:0.13rem;
    top:0.13rem;
    vertical-align: middle;
    font-size:0.18rem;
    color:rgb(255,160,0);
  }
  .banner{
    width: 3.75rem;
    /* height: 1.6rem; */
  }
  .banner img{
    display: inline-block;
    max-width: 3.75rem;
    height: auto;
  }
  .active_a{
    display:inline-block;
    width:100%;
    font-size: 0.16rem;
  }
  .desc{
    width:40%;
    display: inline-block;
    height: 0.18rem;
    line-height:0.2rem;
    padding: 0.05rem 0;
    vertical-align: middle;
    font-size: 0.14rem;
    outline:none;
    border:none;
    background-color:rgb(238,238,238);
    color:rgb(121,122,128);
  }
</style>
