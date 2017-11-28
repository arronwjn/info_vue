<template>
  <div class="footer">
    <div class="footer_item">
      <i class="fa fa-server" aria-hidden="true"></i>
      <span>资讯</span>
    </div>
    <div class="footer_item">
      <i class="fa fa-user-plus" aria-hidden="true"></i>
      <span>专家</span>
    </div>
    <div class="footer_item">
      <i class="fa fa-address-card" aria-hidden="true"></i>
      <span>社群</span>
    </div>
    <div class="footer_item">
      <i class="fa fa-building" aria-hidden="true"></i>
      <span>企业</span>
    </div>
    <div class="footer_item">
      <i class="fa fa-user" aria-hidden="true"></i>
      <span>我的</span>
    </div>
  </div>
</template>

<script>
  export default{
    name:'footer',
    data () {
      return{}
    }
  }
</script>

<style scoped>
.footer{
  display:flex;
  justify-content: space-around;
  align-items: center;
  height: 0.49rem;
  background:-webkit-gradient(linear, 0 0, 0 bottom, from(rgb(248,247,244)), to(rgb(255, 255, 255)));
  font-size:0;
}
  .footer_item{
    height: 0.49rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 0rem;
    color: rgb(163,165,174);
  }
  .footer_item>i,span{
    display:block;
  }
  .footer_item>i{
    font-size:0.14rem;
  }
  .footer_item>span{
    font-size:0.12rem;
  }
</style>
