<template>
  <div class="app-goodsshow-index">
    <back-button></back-button>
    <!-- 标题栏 -->
    <div id="titleBox">
      <span>商品详情</span>
      <div id="titleLine"></div>
    </div>
    <!-- 图片盒子 -->
    <div id="picBox">
      <v-touch 
      tag="div" 
      v-on:swipeleft = "move($event),picListChange(way[0])" 
      class="picBoxShow_shade"
      :class="{fly : isMove}">
      </v-touch>
      <!-- <div id="picBoxShow_shade"></div> -->
      <div id="picBox1">
        <div id="picBoxShow">
          <div id="bigPic">
            <!-- preventDefault($event) 阻止拖动图片 -->
            <img  v-lazy =" goodInfo.pic1" :src="goodInfo.pic1" @mousedown= "preventDefault($event)">
            <!-- <i id="details">点击查看详情</i> -->
          </div>
          <div id="smallPicBox">
            <img v-lazy ="picList[1] " :src="picList[1]" alt="" @mousedown= "preventDefault($event)">
            <img v-lazy =" picList[2]" :src="picList[2]" alt="" @mousedown= "preventDefault($event)">
            <img v-lazy ="picList[3] " :src="picList[3]" alt="" @mousedown= "preventDefault($event)">
          </div>
        </div>
        <p id="introduce">{{ goodInfo.introduce}}</p>
      </div>
      <div id="picBox2"></div>
      <div id="picBox3"></div>
    </div>
    <div id="rightBox"> 
      <!-- 详情盒子 -->
      <div id="infoBox">
        <p>
          <i></i>
          <span class="nameTitle">名称：</span>
          <span class="nameInfo">{{ goodInfo._name }}</span>
        </p>
        <p>
          <i></i>
          <span class="nameTitle">规格：</span>
          <span class="nameInfo">{{ goodInfo.size }}</span>
        </p>
        <p>
          <i></i>
          <span class="nameTitle">价格：</span>
          <span class="nameInfo" id="moneyLogo">￥</span>
          <span class="nameInfo" id="price">{{ goodInfo.price }}</span>
          <i id="vipBox"></i>
          <span id="vipPrice">VIP：￥{{ goodInfo.vipPrice }}</span>
        </p>
      </div>

      <!-- 购买按钮 -->
      <router-link 
      replace 
      tag="div" 
      :to="{name:'pay',query:{name:goodName}}" 
      id="buyBtn">
        <span>
          购买
        </span>
      </router-link>

      <!-- 会员按钮 -->
      <div id="vipBtn">
        <span @click="beMember()">点我成为会员</span>
        <i id="vipBtnLine"></i>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'AppGoodsShowIndex',
  data () {
    return {
      goodName: this.$route.query.name,
      goodInfo:{},
      picList:[],
      isMove:false,
      way:['left','right']
    }
  },
  methods:{
    getDataInfo() {
      this.$http.get('../../../static/data.json', {
      }).then(res => {
          // console.log('res',res.data.goodInfo);
          this.goodInfo = res.data.goodInfo;
          // console.log(this.goodInfo);
          this.picList = res.data.goodInfo.picList;
          // console.log('this.picList',this.picList);
      })
    },
     beMember() {
      this.$router.push({ name: "member" });
    },
    picListChange(way){
      if(way == "left"){
        for(var i=1;i<this.picList.length;i++){
          var a = this.picList[i-1];
          this.picList[i-1] = this.picList[i];
          this.picList[i] = a;
        }
        this.goodInfo.pic1 = this.picList[0];
        // console.log(this.picList)
      }else{
      }
    },
    move(e){
      let el = e.target;// 获取目标元素
      // console.log(el);
      el.style.opacity = "1"
      this.isMove = true
      setTimeout(() => {
        el.style.opacity = "0";
      },1000)
      setTimeout(() => {
        this.isMove = false;
      },1100);
    },
    preventDefault(e){
      //阻止拖动图片
      e.preventDefault();
    }
  },
  created(){
    // console.log('aa',this.goodName)
    this.getDataInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.app-goodsshow-index{
  width: 100%;
  height: 100%;
  position: relative;
}
  // 标题盒子
  #titleBox{
    position: absolute;
    top:106px;
    left:872px;
    width: 176px;
    height: 62px;
    span{
      font-family: Roboto-Regular;
      font-size: 44px;
      color: rgba(0,0,0,0.87);
      text-align: center;
      z-index: 99;
    }
    #titleLine{
      position: absolute;
      bottom:0px;
      left:-18px;
      width: 212px;
      height: 28px;
      background: url('../../assets/goodsList/sprite.png') -1153px -173px no-repeat;
      z-index: -1;
    }
  }
  
  // 图片盒子
  #picBox{
    width: 760px;
    height: 730px;
    position: absolute;
    left:63px;
    bottom:74px;
    // position: relative;
    .picBoxShow_shade{
      width: 100%;
      height: 100%;
      transform: rotate(0deg);
      background: #F7F7F7;
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.20);
      position: absolute;
      z-index: 10;
      opacity: 0;
      transition: opacity 1s;
    }
    .fly{
      transition: transform 1s;
      transform: translateX(-950px) translateY(-470px) rotate(-23deg);
    }
    #picBox1{
      width: 100%;
      height: 100%;
      transform: rotate(0deg);
      background: #F7F7F7;
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.20);
      #picBoxShow{
        width: 760px;
        height: 570px;
        padding: 10px;
        #bigPic{
          float:left;
          width: 550px;
          height: 570px;
          position: relative;
          img{
            width: 100%;
            height: 100%;
          }
          #details{
            display: block;
            width: 570px;
            height: 88px;
            opacity: 0.8;
            position: absolute;
            left:0px;
            bottom:0px;
            background-image: linear-gradient(-90deg, #F94D8F 0%, #545EFA 100%);

            line-height: 88px;
            font-family: PingFang-SC-Medium;
            font-size: 28px;
            color: rgba(255,255,255,0.87);
            letter-spacing: 1.05px;
          }
        }
        #smallPicBox{
          float:left;
          width: 190px;
          height: 570px;
          img{
            width: 100%;
            height: 33%;
          }
        }
      }
      #introduce{
        // height: 80px;
        margin:0 22px;
        margin-top:39px;
        font-family: PingFangSC-Regular;
        line-height: 33px;
        font-size: 28px;
        color: rgba(0,0,0,0.54);
        letter-spacing: 1.4px;
        overflow: hidden;
        text-overflow: ellipsis;
        // white-space: nowrap;
        display:-webkit-box; 
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2; 
      }
    }
    #picBox2{
      width: 100%;
      height: 100%;
      float:left;
      position: absolute;
      top:0px;
      z-index: -1;
      transform: rotate(-5deg);
      background: #F7F7F7;
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.20);
    }
    #picBox3{
      width: 100%;
      height: 100%;
      float:left;
      position: absolute;
      top:0px;
      z-index: -2;
      transform: rotate(5deg);
      background: #F7F7F7;
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.20);
    }
  }
  #rightBox{
    width: 636px;
    height: 574px;
    position: absolute;
    top:282px;
    left:1024px;
    // 详情盒子
    #infoBox{
      // width: 449px;
      p{
        margin-top:52px;
        text-align: left;
        position: relative;
        font-size: 32px;
        font-family: Roboto-Regular;
        position: relative;
        .nameTitle{
          position: absolute;       
          color: rgba(0,0,0,0.87);
          letter-spacing: 1.2px;
        }
        .nameInfo{
          display: inline-block;
          padding-left:100px;
          color: rgba(0,0,0,0.54);
          letter-spacing: 1.2px;
        }
        i{
          display: block;
          width: 14px;
          height: 14px;
          position: absolute;
          top:19px;
          left:-27px;
          background: url('../../assets/goodsList/sprite.png') -928px -360px no-repeat;
        }
        #moneyLogo{
          position: absolute;
          top:10px;
          left:2px;
          font-size: 24px;
          color:#FF5454;
        }
        #price{
          padding-left:130px;
          line-height: 43.5px;
          color:#FF5454;
        }
        #vipPrice{
          display: inline-block;
          margin-left:130px;
          font-family: PingFangSC-Regular;
          font-size: 28px;
          color: #522C06;
        }
        #vipBox{
          display: block;
          position: absolute;
          top:-5px;
          left:325px;
          z-index: -999;
          width: 218px;
          height: 56px;
          background: url("../../assets/goodsList/sprite.png") -453px -345px  no-repeat;
          
        }
      }
      p:first-child{
        margin-top:0px;
      }
    }

    // 购买按钮
    #buyBtn{
      width: 248px;
      height: 88px;
      position: absolute;
      bottom:0px;
      // background-size:cover;
      background-image: linear-gradient(-90deg, #F94D8F 0%, #545EFA 100%);
      border-radius: 8px;
      span{
        line-height: 88px;
        font-family: PingFang-SC-Medium;
        font-size: 36px;
        color: #FFFFFF;
        letter-spacing: 1.35px;
        text-align: center;
      }
    }

    // 会员按钮
    #vipBtn{
      width: 192px;
      height: 45px;
      position: absolute;
      right:44px;
      bottom:0px;
      span{
        font-family: PingFangSC-Regular;
        font-size: 32px;
        color: rgba(0,0,0,0.87);
      }
      #vipBtnLine{
        position: absolute;
        bottom:0px;
        left:-44px;
        width: 280px;
        height: 28px;
        background: url('../../assets/goodsList/sprite.png') -1150px -124px no-repeat;
        z-index: -1;
      }
    }
  }
</style>
