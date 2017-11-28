<template>
    <div class="search">
        <div class="search_input">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input ref="searchinput" class="input" outofocus="outofocus" type="search" v-model="value" placeholder="搜索您感兴趣的信息">
        </div>
        <span class="cancle" @click="jump()">取消</span>
    </div>
</template>

<script>
    export default{
        name:'search',
        data () {
            return{
                value:''
            }
        },
        mounted(){
            this.$refs.searchinput.blur();
            this.$nextTick(()=>{
                this.$refs.searchinput.focus();
            });
            
        },
        methods:{
            jump(){
                this.$refs.searchinput.blur();
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
  .search{
    height: 100%;
    font-size:0;
    background:-webkit-gradient(linear, 0 0, 0 bottom, from(rgb(248,247,244)), to(rgb(255, 255, 255)));
    background-color: rgb(248,247,244);
  }
  .search_input{
    display:inline-block;
    width: 3.2rem;
    height: 0.28rem;
    line-height:0.28rem;
    text-align: center;
    margin-left:0.1rem;
    margin-top:0.07rem;
    margin-bottom:0.09rem;
    border-radius: 0.04rem;
    font-size:0.14rem;
    border:none;
    outline: none;
    background-color: rgb(238,238,238);
  }
  .input{
    width:90%;
    vertical-align: middle;
    text-align:left;
    outline:none;
    border:none;
    background-color:rgb(238,238,238);
  }
  .fa-search{
    font-size: 0.16rem;
    margin-right: 0.04rem;
    color:rgb(200,201,204);
  }
  
  .search input::-webkit-input-placeholder { /* WebKit browsers */
    vertical-align: middle;
    text-align: left;
    color: rgb(121,122,128);
    font-size:0.14rem;
  }
  .cancle{
    position: absolute;
    font-size: 0.14rem;
    right: 0.1rem;
    top: 0.16rem;
    color:rgb(255,160,0);
  }
</style>
