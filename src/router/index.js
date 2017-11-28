import Vue from 'vue';
import Router from 'vue-router';
// import App from '@/App';
// import Record from '@/pages/record';
// import ProgramDetail from '@/pages/program_detail';
// import Register from '@/pages/register';
// import ForgetPassword from '@/pages/forget_password';
// import Sign from '@/pages/sign';
const App = resolve => require(['@/App'], resolve);
const Record = resolve => require(['@/pages/record'], resolve);
const Register = resolve => require(['@/pages/register'], resolve);
const ProgramDetail = resolve => require(['@/pages/program_detail'], resolve);
const ForgetPassword = resolve => require(['@/pages/forget_password'], resolve);
const Sign = resolve => require(['@/pages/sign'], resolve);
const Index = resolve => require(['@/pages/index'], resolve);
const Info = resolve => require(['@/pages//info/info'], resolve);
const InfoHome = resolve => require(['@/pages/info/info_home'], resolve);
const Technology = resolve => require(['@/pages/info/technology'], resolve);
const Business = resolve => require(['@/pages/info/business'], resolve);
const Search = resolve => require(['@/pages/search'], resolve);


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: App,//顶层路由
      children:[
        //地址为空时跳转record
        {
          path:'',
          redirect: '/info/information'
        },
        {
          path:'/register',
          component:Register
        },
        {
          path:'/sign',
          component:Sign
        },
        {
          path: '/search',
          component: Search
        },
        {
          path:'/record',
          component:Record
        },
        {
          path: '/detail',
          component: ProgramDetail
        },
        {
          path: '/forget',
          component: ForgetPassword
        },
        {
          path: '/index',
          component: Index,
          children:[
            //资讯模块
            {
              path:'/info',
              component:Info,
              children:[
                {
                  path:'information',
                  component:InfoHome
                },
                {
                  path:'technology',
                  component:Technology
                },
                {
                  path:'business',
                  component:Business
                }
              ]
            },
            //专家模块
          ]
        }
      ]
    }

  ]
})
