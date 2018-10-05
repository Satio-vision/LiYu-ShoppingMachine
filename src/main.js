// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import './components/commons/component'
import axios from 'axios'
import VueLazyload from 'vue-lazyload' //图片加载

Vue.use(VueLazyload,{
  // error:require('@/assets/loading.png'),
  loading:require('@/assets/loading.png')
});


Vue.prototype.$http = axios
// import Mint from 'mint-ui';
// Vue.use(Mint);

// //请求拦截器
// axios.interceptors.request.use((config) => {                
//   Mint.Indicator.open({
//     //打开loading                    
//     text: '加载中...',                    
//     spinnerType: 'fading-circle'                
//   });                
//   return config;        
// }, (err) => {                
//   return Promise.reject(err)        
// })
//  //响应拦截器        
// axios.interceptors.response.use((response) => {                
//   Mint.Indicator.close();//关闭loading                
//   return response;        
// }, (err) => {                
//   return Promise.reject(err);        
// }) 

Vue.config.productionTip = false

var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
