<template>
  <div class="app-goodsList">
    <ul class="clear" id="goodsList">
      <router-link 
        tag="li" 
        :to="{name:'goodsShow' ,query:{class:name,name:_good._name}}" 
        v-for = "(_good,i) in goodsData"
        :key= "i">
        <div id="imgbox">
          <img v-lazy=" _good.pic " :src = "_good.pic" :on-error="defaultImg()">
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
    <div id="more">
      <div id="more2">
         <span>给更多{{ name }},</span><br>
          <span>敬请期待！</span>
      </div>
    </div>
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
      goodsData:[],
      // defaultImg:'this.src="./src/assets/loading.png"'
    }
  },
  methods:{
    defaultImg(){
      // console.log('aa')
      console.log(this)
    },
    getGoodsData(){
      // console.log("a")
      var data = this.$store.state.mallNav
      // console.log(this.$store.state.mallNav)
      for(var key in data){
        if(key == this.name){
          this.goodsData = data[key];
        }
      }
    },
    changeMore(){
      let more = document.getElementById('more');
      switch(this.goodsData.length){
        case 0:{
          more.classList.remove('default','list1','list2','list3','list4','list5','list6','list7');
          more.classList.add('list0');
          break;
        }
        case 1:{
          more.classList.remove('default','list0','list2','list3','list4','list5','list6','list7');
          more.classList.add('list1');
          break;
        }
        case 2:{
          more.classList.remove('default','list0','list1','list3','list4','list5','list6','list7');
          more.classList.add('list2');
          break;
        }
        case 3:{
          more.classList.remove('default','list0','list1','list2','list4','list5','list6','list7');
          more.classList.add('list3');
          break;
        }
        case 4:{
          more.classList.remove('default','list0','list1','list2','list3','list5','list6','list7');
          more.classList.add('list4');
          break;
        }
        case 5:{
          more.classList.remove('default','list0','list1','list2','list3','list4','list6','list7');
          more.classList.add('list5');
          break;
        }
        case 6:{
          more.classList.remove('default','list0','list1','list2','list3','list4','list5','list7');
          more.classList.add('list6');
          break;
        }
        case 7:{
          more.classList.remove('default','list0','list1','list2','list3','list4','list5','list6');
          more.classList.add('list7');
          break;
        }
        default:{
          more.classList.remove('list0','list1','list2','list3','list4','list5','list6','list7');
          more.classList.add('default');
          break;
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
      this.getGoodsData();
      this.changeMore();
    },
    goodsListData(val,oldval){
      this.getGoodsData();
      this.changeMore();
    }
  },
  store:Store
}
</script>

<style scoped lang="scss">
.app-goodsList{
  position: relative;
}
  ul{
    width: 1666px;
    margin:0 auto;
    display: flex;
    flex-wrap:wrap;
    overflow: hidden;
    position: relative;
    // justify-content:space-between;
    li{
      display: block;
      // float:left;
      // flex:1;
      height: 409px;
      width: 282px;
      margin-top:23px;
      // background: #000;
      margin-right: 179px;
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
    li:nth-child(4){
       margin-right: 0px;
    }
  }
  .clear::after{
    content:""; 
    display:block; 
    clear:both; 
    height:0; 
    visibility:hidden;
  }
  #more{
    // height: 409px;
    background: #F7F7F7;
    height: 409px;
    position: absolute;
    right:127px;
    text-align: center;
    #more2{
      width: 282px;
      height: 80px;
      position: absolute;
      top:50%;
      left:50%;
      margin-top:-40px;
      margin-left:-141px;
      span{
        // display: inline-block;
        // width: 100%;
        line-height: 40px;
        font-family: PingFang-SC-Regular;
        font-size: 32px;
        color: rgba(0,0,0,0.54);
        letter-spacing: 1.33px;
      }
    }
    
  }
  .list0{
    display: block;
    width: 1666px;
    height: 864px;
    right:127px;
    top:23px;
    span{
      line-height: 864px;
    }
  }
  .list1{
    display: block;
    width: 1205px;
    right:127px;
    top:23px;
    span{
       line-height: 30px;
    }
  }
  .list2{
    display: block;
    width: 744px;
    right:127px;
    top:23px;
    span{
      // height:409px;
      display: inline-block;
      height: 100%;
      vertical-align: center;
      line-height: 30px;
    }
  }
  .list3{
    display: block;
    width: 282px;
    right:127px;
    top:23px;
    span{
        line-height: 30px;
    }
  }
  .list4{
    display: block;
    width: 1666px;
    top:455px;
    right:127px;
    span{
        line-height: 30px;
    }
  }
  .list5{
    display: block;
    width: 1205px;
    top:455px;
    right:127px;
    span{
        line-height: 30px;
    }
  }
  .list6{
    display: block;
    width: 744px;
    top:455px;
    right:127px;
    span{
        line-height: 30px;
    }
  }
  .list7{
    display: block;
    width: 282px;
    top:455px;
    right:127px;
    span{
        line-height: 30px;
    }
  }
  .default{
    display: none;
  }
</style>
