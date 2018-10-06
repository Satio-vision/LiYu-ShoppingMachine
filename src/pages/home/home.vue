<template>
    <div id="app-home">
      <!-- <router-link tag="button"
      :to="{name:'goodsList'}" 
       id="toMall">
        商城列表
      </router-link> -->
      <button id="toMall" @click="goToMall">
        商城列表
      </button>
      <!-- <app-home-goodsStar></app-home-goodsStar> -->
      <goods-star2></goods-star2>
    </div>
</template>

<script>
import AppHomeGoodsStar from './goodsStar'
import GoodsStar2 from './goodsStar2'
export default {
  name: 'AppHome',
  components:{
    AppHomeGoodsStar,
    GoodsStar2
  },
  data () {
    return {
      name:"?name=美妆个护"
    }
  },
  methods:{
    goToMall(){
      this.$router.push({path:"/mall/goodsList"+this.name});
    }
  }
}
</script>

<style scoped lang="scss">
  #app-home{
    width: 100%;
    height: 100%;
    background:url("../../assets/home/index_bg.png");
    position: relative;
  }
  #toMall{
    position: absolute;
    bottom:50px;
    left:566px;
    width: 366px;
    height: 119px;
  } 
</style>
