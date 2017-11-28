<template>
  <div class="record">
    <myheader :title="Title" class="header"></myheader>
    <h3>共享单车已围城，叫停投放不是唯一的破局思路，需要群策群力</h3>
    <p class="content">
      金融跟你的生活息息相关,甚至关系到你娶什么样的妻子，嫁什么样的丈夫，建立什么样的家庭关系，
      生活得是否有尊严。斯凯恩编著的《从零开始读懂金融学》把金融学作为一门来自生活中的科学。金融跟你的生活息息相关，
      甚至关系到你娶什么样的妻子，嫁什么样的丈夫，建立什么样的家庭关系，生活得是否有尊严。斯凯恩编著的《从零开始读懂金融学》把金融学作为一门来自生活中的科学。金融跟你的生活息息相关，
      甚至关系到你娶什么样的妻子，嫁什么样的丈夫，建立什么样的家庭关系，
      生活得是否有尊严。斯凯恩编著的《从零开始读懂金融学》把金融学作为一门来自生活中的科学。
      金融跟你的生活息息相关，
      甚至关系到你娶什么样的妻子，嫁什么样的丈夫，建立什么样的家庭关系，
      生活得是否有尊严。斯凯恩编著的《从零开始读懂金融学》把金融学作为一门来自生活中的科学。
      金融跟你的生活息息相关，
      甚至关系到你娶什么样的妻子，嫁什么样的丈夫，建立什么样的家庭关系，
      生活得是否有尊严。斯凯恩编著的《从零开始读懂金融学》把金融学作为一门来自生活中的科学。
      金融跟你的生活息息相关，
      甚至关系到你娶什么样的妻子，嫁什么样的丈夫，建立什么样的家庭关系，
      生活得是否有尊严。斯凯恩编著的《从零开始读懂金融学》把金融学作为一门来自生活中的科学。
      金融跟你的生活息息相关，
      甚至关系到你娶什么样的妻子，嫁什么样的丈夫，建立什么样的家庭关系，
      生活得是否有尊严。斯凯恩编著的《从零开始读懂金融学》把金融学作为一门来自生活中的科学。
      金融跟你的生活息息相关，
      甚至关系到你娶什么样的妻子，嫁什么样的丈夫，建立什么样的家庭关系，
      生活得是否有尊严。斯凯恩编著的《从零开始读懂金融学》把金融学作为一门来自生活中的科学。
      金融跟你的生活息息相关，
      甚至关系到你娶什么样的妻子，嫁什么样的丈夫，建立什么样的家庭关系，
      生活得是否有尊严。斯凯恩编著的《从零开始读懂金融学》把金融学作为一门来自生活中的科学。
      金融跟你的生活息息相关，
      甚至关系到你娶什么样的妻子，嫁什么样的丈夫，建立什么样的家庭关系，
      生活得是否有尊严。斯凯恩编著的《从零开始读懂金融学》把金融学作为一门来自生活中的科学。
    </p>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import myheader from '../components/header_1.vue'


export default{
  name:'record',
  data () {
    return{
      Title:'访谈实录'
    }
  },
  created () {
//    console.log(store.state.count);
  },
  methods:{

  },
  components:{
    myheader
  },
}
</script>

<style scoped>
  .record{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-color: rgb(244,245,246);
  }
  .header{
    position:fixed;
    top:0;
    left:0;
    right:0;
    border-bottom:0.005rem solid rgb(220,220,220);
  }
  .record>h3{
    padding:0 0.15rem;
    margin-top:0.57rem;
    line-height:0.26rem;
    text-align:left;
    font-size:0.2rem;
    color:rgb(70,70,77)
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
</style>
