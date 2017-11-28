<template>
  <div class="index">
    <router-view></router-view>
    <div class="footer">
      <myfooter></myfooter>
    </div>
  </div>
</template>

<script>
  import myfooter from '@/components/footer';

  export default{
    name:'index',
    data () {
      return {}
    },
    components:{
      myfooter
    }
  }
</script>

<style scoped>
.index{
  display: flex;
  flex-direction:column;
  height:100%;
}
.footer{
  /* position: fixed;
  bottom:0;
  left:0;
  right:0; */
}
</style>
