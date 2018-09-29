<template>
  <div class="app-goodsList">
    <ul class="clear">
      <router-link 
        tag="li" 
        :to="{name:'goodsShow' ,query:{name:_good._name}}" 
        v-for = "(_good,i) in goodsData"
        :key= "i">
        <div id="imgbox">
          <img :src=" _good.pic" alt="">
        </div>
        <div id="vipPriceBox">
          <span id="">
            会员价:{{ _good.vipPrice }}
          </span>
        </div>
        <p>
          <span id="priceLogo">￥</span>
          <span id="price">
            {{_good.price}}
          </span>
        </p>
        <p id="name">
          {{ _good._name }}
        </p>
      </router-link>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import Store from '../../store'
export default {
  
  name: 'AppGoodsList',
  data () {
    return {
      name: this.$route.query.name,
      goodsData:[]
    }
  },
  methods:{
    getGoodsData(){
      // console.log("a")
      var data = this.$store.state.mallNav
      // console.log(this.$store.state.mallNav)
      for(var key in data){
        if(key == this.name){
          this.goodsData = data[key];
        }
      }
    }
  },
  computed:{
    goodsListData:function () {
      return this.$store.state.mallNav
    }
  },
  watch:{
    '$route'(to,from){
      this.name = to.query.name;
      // this.getName();
      this.getGoodsData();
    },
    goodsListData(val,oldval){
      this.getGoodsData()
    }
  },
  store:Store
}
</script>

<style scoped lang="scss">
  ul{
    width: 1666px;
    margin:0 auto;
    li{
      display: block;
      float:left;
      height: 409px;
      width: 282px;
      margin-top:23px;
      // background: #000;
      margin-right: 64px;
      #imgbox{
        width: 282px;
        height: 282px;
        background: #F7F7F7;
        position: relative;
        img{
          position: absolute;
          top:25px;
          left:36px;
          width: 211px;
          height: 232px;

        }
      }
      #vipPriceBox{
        width: 100%;
        height: 32px;
        background-image: linear-gradient(-90deg, #FFCD94 0%, #CA9663 100%);
        span{
          font-family: PingFang-SC-Regular;
          font-size: 24px;
          color: #522C06;
          letter-spacing: 1.2px;
        }
      }
      #priceLogo{
        font-size: 24px;
      }
      #price{
        padding-top:8px;
        display: inline-block;
        font-family: Roboto-Regular;
        font-size: 32px;
        color: #000000;
        line-height: 33px;
      }
      #name{
        margin-top:9px;
        font-family: PingFang-SC-Regular;
        font-size: 32px;
        color: rgba(0,0,0,0.54);
        text-align: center;
      }
    }
    li:nth-child(5){
       margin-right: 0px;
    }
  }
  .clear:after{
    content:""; 
    display:block; 
    clear:both; 
    height:0; 
    visibility:hidden;
  }
</style>
