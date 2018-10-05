<template>
  <div class="app-mall">
    <back-button></back-button>
    <p id="welcome">
      晚上好！<br>
      欢迎来到礼遇互动平台
    </p>
    <ul id="menu">
      <router-link
        replace
        tag="li"
        :to="{name:'goodsList',query:{name:nav}}"
        v-for = "(nav,i) in navs" 
        :key="i">
        <i></i>
        <span>{{ nav }}</span>
      </router-link>
    </ul>
    <div id="line"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue  from 'vue'
// import { mapState } from 'vuex'
import Store from '../../store'
export default {
  name: 'AppMall',
  data () {
    return {
      navs:[],
      goodsData:{}
    }
  },
  computed:{
    goodsListData:function () {
      return this.$store.state.mallNav
    }
  },
  watch:{
    goodsListData(val,oldval){
      for(var key in val){
        // console.log(key);
        this.navs.push(key);
      }
      this.goodsData = val;
    }
  },
  mounted () {
    this.$store.dispatch('getMallNav');
  },
  store:Store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.app-mall{
  position: relative;
}
  #welcome{
    position: absolute;
    top: 32px;
    right: 40px;
    text-align: left;
    font-family: PingFang-SC-Regular;
    font-size: 32px;
    color: rgba(0,0,0,0.87);
  }
   #menu{
    clear: both;
    margin: 0px auto;
    padding-top:114px;
    margin-bottom: 0px;
    li{
      // float:left;
      flex:1;
      list-style: none;
      display: inline-block;
      height: 56px;
      margin-right: 186px;
      span{
        font-family: PingFang-SC-Medium;
        font-size: 40px;
        color: rgba(0,0,0,0.54);
        text-align: center;
        font-weight: bold;
      }
    }
    .router-link-exact-active{
      position: relative;
      span{
        color: rgba(0,0,0,0.87);
      }
      i{
        display: block;
        position: absolute;
        top:65px;
        left: 67px;
        width: 24px;
        height: 22px;
        background:url('../../assets/goodsList/sprite.png') 0 0 no-repeat;
      }
    }
  }
  #line{
    margin-top:20px;
    height: 2px;
    width: 1920px;
    background-image: linear-gradient(-90deg, #F94D8F 0%, #545EFA 100%);
    box-shadow: 0 6px 10px 0 rgba(98,86,254,0.75), inset 0 1px 3px 0 #6B4BFF;
  }
</style>
