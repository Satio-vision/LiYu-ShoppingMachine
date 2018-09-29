import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Mall from '@/pages/mall/mall'
import goodsList from '@/pages/mall/goodsList'
import goodsShow from '@/pages/goodsShow/goodsShow'
import pay from '@/pages/goodsShow/pay'
import payRes from '@/pages/goodsShow/payRes'
import member from '@/pages/member/member'
import memberPay from '@/pages/member/memberPay'
import memberPayRes from '@/pages/member/memberPayRes'
Vue.use(Router)

export default new Router({
  routes: [
    //首页
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    //商品列表
    {
      path: '/mall',
      name: 'Mall',
      component: Mall,
      children:[
        {
          path: 'goodsList',
          name: 'goodsList',
          component: goodsList
        }
      ],
      redirect:{ name: 'goodsList'}
    },
    //商品详情
    {
      path:'/goodsShow',
      name:'goodsShow',
      component:goodsShow,
      children:[
        {
          path:'pay',
          name:'pay',
          component:pay
        },
        {
          path:'payRes',
          name:'payRes',
          component:payRes
        },
          //会员
        {
          path:'member',
          name:'member',
          component:member,
          children:[
            {
              path:'memberPay',
              name:'memberPay',
              component:memberPay
            }
            
          ]
        },
        {
          path:'member/memberPayRes',
          name:'memberPayRes',
          component:memberPayRes
        }
      ]
    }
  ]
})
