<template>
  <div class="header">
    <div class="icon"><i class="fa fa-angle-left" aria-hidden="true" @click="back()"></i></div>
    <div class="title">
      {{title}}
    </div>
    <div class="operating">
      <span v-if="operaText" @click="register(operaText)">{{operaText}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    name:'header1',
    data () {
      return{
      }
    },
    props: {
      title: {
        type:String,
      },
      operaText: {
        type:String
      }
    },
    methods: {
      register (operaText) {
        if(operaText=='注册'){
          this.$router.push('register');
        }
      },
      back(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
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
.operating{
  display:inline-block;
  text-align: right;
  font-size:0.16rem;
  line-height:0.44rem;
  color:rgb(255,160,0);
  font-weight:500;
}
  .operating>span{
    margin-right:0.15rem;
  }
</style>
