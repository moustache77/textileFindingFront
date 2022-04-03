//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'
//使用插件
Vue.use(VueRouter);
//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Browse from '@/pages/Browse'
import Rank from '@/pages/Rank'
import Memory from '@/pages/Memory'
//配置路由
// const VueRouter = new VueRouter({
//   routes,
//   mode: "history",
//   linkActiveClass: 'active',
// })
export default new VueRouter({
  //配置路由
  linkActiveClass: 'active',
  linkExactActiveClass: "",
  routes: [
    {
      path: '/home',
      // name: 'HelloWorld',
      component: Home
    }
    ,
    {
      path: '/search',
      redirect:"/search/essay",
      // name: 'HelloWorld',
      component: Search,
      children:[
        {path: '/search/essay',
        component: ()=>import('@/pages/Search/essay.vue'),
        },
        {path: '/search/patent',
        component: ()=>import('@/pages/Search/patent.vue'),},
      ]
    }
    ,
    {
      path: '/browse',
      redirect:"/browse/zhishi",
      // name: 'HelloWorld',
      component: Browse,
      hidden: false,
      children:[
        {path: '/browse/zhishi',
        component: {render(c) {return c('router-view')}},
        component: ()=>import('@/pages/Browse/zhishi.vue'),
        redirect:"/browse/zhishi/zhishi_photo1",
        children:[
          {path: '/browse/zhishi/zhishi_photo1',
          hidden: false,
          component: ()=>import('@/pages/Browse/zhishi_photo1.vue'),
          },
          {path: '/browse/zhishi/zhishi_photo2',
          hidden: false,
          component: ()=>import('@/pages/Browse/zhishi_photo2.vue'),
          },]
        },
        {path: '/browse/tree',
        component: ()=>import('@/pages/Browse/tree.vue'),},
      ]
    }
    ,
    {
      path: '/rank',
      // name: 'HelloWorld',
      component: Rank,
      redirect:"/rank/research",
      hidden: false,
      children:[
        {path: '/rank/research',
        // hidden: false,
        // component = () => import(`@/views/SubView`),
        component: {render(c) {return c('router-view')}},
        component: ()=>import('@/pages/Rank/research.vue'),
        redirect:"/rank/research/research_photo1",
        children:[
          {path: '/rank/research/research_photo1',
          hidden: false,
          component: ()=>import('@/pages/Rank/research_photo1.vue'),
          },
          {path: '/rank/research/research_photo2',
          hidden: false,
          component: ()=>import('@/pages/Rank/research_photo2.vue'),
          },
          {path: '/rank/research/research_photo3',
          hidden: false,
          component: ()=>import('@/pages/Rank/research_photo3.vue'),
          },
          {path: '/rank/research/research_photo4',
          hidden: false,
          component: ()=>import('@/pages/Rank/research_photo4.vue'),
          },
          {path: '/rank/research/research_photo5',
          hidden: false,
          component: ()=>import('@/pages/Rank/research_photo5.vue'),
          },]
        },
        {path: '/rank/industry',
        component: {render(c) {return c('router-view')}},
        component: ()=>import('@/pages/Rank/industry.vue'),
        redirect:"/rank/industry/industry_photo1",
        children:[
          {path: '/rank/industry/industry_photo1',
          hidden: false,
          component: ()=>import('@/pages/Rank/industry_photo1.vue'),
          },
          {path: '/rank/industry/industry_photo2',
          hidden: false,
          component: ()=>import('@/pages/Rank/industry_photo2.vue'),
          },
          {path: '/rank/industry/industry_photo3',
          hidden: false,
          component: ()=>import('@/pages/Rank/industry_photo3.vue'),
          },
          {path: '/rank/industry/industry_photo4',
          hidden: false,
          component: ()=>import('@/pages/Rank/industry_photo4.vue'),
          },
          {path: '/rank/industry/industry_photo5',
          hidden: false,
          component: ()=>import('@/pages/Rank/industry_photo5.vue'),
          },
          {path: '/rank/industry/industry_photo6',
          hidden: false,
          component: ()=>import('@/pages/Rank/industry_photo6.vue'),
          },]
        },
      ]
    }
    ,
    {
      path: '/memory',
      // name: 'HelloWorld',
      component: Memory
    },
    //重定向，在项目跑起来的时候，访问/，立马让他定向到首页
    {
      path:'*',
      redirect:"/home"
    }
  ]
})
