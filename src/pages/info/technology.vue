<template>
  <div class="expert">
    <div class="tag">
        <tags :tagList="tagList" style="padding-left:0.15rem"></tags>
    </div>
    技术专题
  </div>
</template>

<script>
  import Tags from '../../components/tags.vue';
  import FetchDataModule from '../../config/fetch';

  export default{
    name:'expert',
    data () {
      return{
        tagList:[
          '风险带钱',
          '风险贷后',
          '运营',
          '风险贷后',
          '运营',
          '风险贷后',
          '运营',
          '风险贷后',
          '运营',
          '风险贷后',
           '运营',
        ]
      }
    },
    created(){

      
    },
    components:{
      Tags
    }
  }
</script>

<style scoped>
  .expert{
    font-size:0.16rem;
  }
  .tag{
    border-bottom: 1px solid rgb(220,220,220);
  }
</style>
