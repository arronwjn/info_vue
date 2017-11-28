<template>
  <div class="business">
    <div class="tag">
        <tags :tagList="tagList" style="padding-left:0.15rem"></tags>
    </div>
    业务专题
  </div>
</template>

<script>
  import Tags from '../../components/tags.vue';

  export default{
    name:'business',
    data () {
      return {
        tagList:[
          '金融',
          '风险贷后',
          '运营',
          '金融危机',
          '运营',
        ]
      }
    },
    components:{
      Tags
    }
  }
</script>

<style scoped>
  .business{
    font-size: 0.16rem;
  }
  .tag{
    border-bottom: 1px solid rgb(220,220,220);
  }
</style>
