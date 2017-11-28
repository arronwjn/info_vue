<template>
  <div class="tags">
        <scroller lock-y :scrollbar-x=false>
            <ul class="tag_ul clearfix" :style="{width:num}">
                <li v-for="(item,index) in tagList" :key="index" class="tag_li" :class="{active:index==id}" @click="handle(index)"><span style="font-size:0.14rem;vertical-align:middle">{{item}}</span></li>
            </ul>
        </scroller>
  </div>
</template>

<script>
    import { Scroller} from 'vux'

    export default{
        name:'tags',
        data () {
            return{
                id:0
            }
        },
        props:{
            tagList:{
                type:Array
            }
        },
        methods:{
            handle(index){
                this.id=index;
            }
        },
        components:{
            Scroller
        },
        computed:{
            num(){
                return this.tagList.length*0.8+'rem';
            }
        }
    }
</script>

<style scoped>
    .tags{
        padding:0.18rem 0;
    }
    .tag_ul{
        position: relative;
        vertical-align: middle
    }
    .tag_li{
        display:flex;
        align-items: center;
        float: left;
        /* height: 0.1rem;
        line-height: 0.1rem; */
        vertical-align: middle;
        margin-right: 0.16rem;
        padding:0.06rem 0.1rem;
        text-align: center;
        border-radius: 0.5rem;
        font-size: 0rem;
        color:rgb(163,165,174);
        border:1px solid #fff;
    }
    .active{
        font-size:0.14rem;
        padding:0.06rem 0.1rem;
        color:rgb(255,160,0);
        border:1px solid rgb(255,160,0);
    }
    .tags ul li:last-child{
        margin-right: 0;
    }
</style>
