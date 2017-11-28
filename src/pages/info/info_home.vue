<template>
  <div class="home">
    <div class="list">
      <h3>共享单车已围城，叫停投放不是唯一的破局思路，需要群策群力</h3>
      <div class="banner">
        <div class="banner_wrrap">
          <img src="../../../static/images/list1.png" alt="">
        </div>
      </div>
      <div class="list_bottom">
        <div>2017-08-26</div>
        <div>122 专家已赞</div>
      </div>
    </div>

    <div class="list">
      <h3>共享单车已围城，叫停投放不是唯一的破局思路，需要群策群力</h3>
      <div class="banner">
        <div class="banner_wrrap">
          <img src="../../../static/images/img1.png" alt="" width='1.05rem'>
          <img src="../../../static/images/img2.png" alt="" width='1.05rem'>
          <img src="../../../static/images/img3.png" alt="" width='1.05rem'>
        </div>
      </div>
      <div class="list_bottom">
        <div>2017-08-26</div>
        <div>122 专家已赞</div>
      </div>
    </div>
  </div>
</template>

<script>
  

  export default{
    name:'home',
    data () {
      return{}
    },
    created () {
      
    }
  }
</script>

<style scoped>
  .home{
    /* padding:0 0.15rem; */
    font-size:0rem;
  }
  .list{
    border-bottom:1px solid rgb(220,220,220);
  }
  .home h3{
    padding:0 0.15rem;
    margin:0.15rem 0;
    line-height:0.24rem;
    font-size:0.16rem;
    color:rgb(70,70,77);
    letter-spacing: 0.02rem;
  }
  .banner{
    margin-left:0.15rem;
    padding-bottom:0.15rem;
    border-bottom:1px solid rgb(220,220,220);
  }
  .banner_wrrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex:1;
    padding-right:0.15rem;
  }
  .banner img{
    display:inline-block;
    min-width:1.05rem;
    max-width: 3.45rem;
    height:auto;
  }
  .list_bottom{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0.14rem 0.15rem;
    font-size:0.14rem;
    color:rgb(163,165,174);
  }
</style>
