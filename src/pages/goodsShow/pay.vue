<template>
  <div class="pay">
    <Pay-Bg></Pay-Bg>
    <div id="box1">
       <i id="closeBtn" @click="goBack"></i>
       <!-- 标题栏 -->
        <div id="titleBox">
            <span>扫码支付</span>
            <div id="titleLine"></div>
        </div>
        <img  v-lazy="goodInfo.pic1" :src="goodInfo.pic1" class="Pic" id="goodPic">
        <img  v-lazy="QRCode" :src="QRCode" class="Pic" id="QRCode">
        <!-- 会员按钮 -->
        <div id="vipBtn">
            <span @click="beMember()">点我成为会员</span>
            <i id="vipBtnLine"></i>
        </div>
        <!-- 商品信息 支付 -->
        <div id="payBox" >
            <div id="goodInfo" class="payBox2">
                <p id="goodName">{{ goodInfo._name }}</p>
                <p>{{ goodInfo.size }}</p>
                <p id="goodPrice">
                    <span class="nameInfo" id="moneyLogo">￥</span>
                    {{ goodInfo.price }}
                </p>
            </div>
            <div id="toPay" class="payBox2">
                <div id="weChat" @click="changePayWay()">
                    <i id="choseLogo" :class="{'isChose':payChose,'noChose':!payChose}"></i>
                    <i id="logo"></i>
                    <span>微信扫码授权支付</span>
                </div>
                <div id="AliPay" @click="changePayWay()">
                    <i id="choseLogo" :class="{'noChose':payChose,'isChose':!payChose}"></i>
                    <i id="logo"></i>
                    <span>支付宝支付</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pay",
  data() {
    return {
      name: this.$route.query.name,
      goodInfo: {},
      //false是支付宝，true是微信
      payChose: false,
      //二维码地址
      QRCode: "",
      websock: null,
      payRes: ""
    };
  },
  watch: {
    payRes: function(val) {
      this.$router.push({
        path: "payRes",
        query: { res: val, name: this.name }
      });
      // console.log(val);
      // console.log('aa')
    }
  },
  created() {
    // console.log('aa',this.goodName)
    this.getDataInfo();
  },
  mounted() {
    //页面刚进入时开启长连接
    // this.initWebSocket()
    setTimeout(() => {
      this.payRes = "success";
    }, 5000);
  },
  methods: {
    goBack() {
      this.$router.replace({ name: "goodsShow", query: { name: this.name } });
    },
    getDataInfo() {
      this.$http.get("../../../static/data.json", {}).then(res => {
        // console.log('res',res.data.goodInfo);
        this.goodInfo = res.data.goodInfo;
        // console.log(this.goodInfo);
        this.QRCode = res.data.goodInfo.RQCode_AliPay;
      });
    },
    beMember() {
      this.$router.push({ name: "member" });
    },
    changePayWay() {
      this.payChose = !this.payChose;
      if (this.payChose) {
        this.QRCode = this.goodInfo.RQCode_WeChat;
      } else {
        this.QRCode = this.goodInfo.RQCode_AliPay;
      }
    },
    //websocket部分
    initWebSocket() {
      //初始化weosocket
      const wsuri = process.env.WS_API + "/websocket/threadsocket"; //ws地址
      this.websock = new WebSocket(wsuri);
      this.websocket.onopen = this.websocketonopen;
      this.websocket.onerror = this.websocketonerror;
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen() {
      console.log("WebSocket连接成功");
    },
    websocketonerror(e) {
      //错误
      console.log("WebSocket连接发生错误");
    },

    websocketonmessage(e) {
      //数据接收
      const redata = JSON.parse(e.data); //注意：长连接我们是后台直接1秒推送一条数据，
      //但是点击某个列表时，会发送给后台一个标识，后台根据此标识返回相对应的数据，
      //这个时候数据就只能从一个出口出，所以让后台加了一个键，例如键为1时，是每隔1秒推送的数据，为2时是发送标识后再推送的数据，以作区分
      console.log(redata.value);
    },
    websocketsend(agentData) {
      //数据发送
      this.websock.send(agentData);
    },
    websocketclose(e) {
      //关闭
      console.log("connection closed (" + e.code + ")");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pay {
  #box1 {
    width: 1300px;
    height: 840px;
    background: #ffffff;
    border-radius: 24px;
    position: absolute;
    top: 136px;
    left: 310px;
    // background: url("../../assets/pay/bg.png");
    z-index: 11;
  .Pic {
    width: 216px;
    height: 216px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  }
  #goodPic {
    position: absolute;
    top: 190px;
    left: 277px;
  }
  #QRCode {
    position: absolute;
    top: 190px;
    right: 277px;
  }
  #closeBtn {
    position: absolute;
    top: 40px;
    right: 108px;
    width: 39px;
    height: 39px;
    background: url("../../assets/goodsList/sprite.png") -568px -178px no-repeat;
    z-index: 2;
  }
  // 标题盒子
  #titleBox {
    position: absolute;
    top: 35px;
    left: 562px;
    width: 176px;
    height: 62px;
    z-index: 2;
    span {
      font-family: Roboto-Regular;
      font-size: 44px;
      color: rgba(0, 0, 0, 0.87);
      text-align: center;
      z-index: 99;
    }
    #titleLine {
      position: absolute;
      bottom: 0px;
      left: -18px;
      width: 212px;
      height: 28px;
      background: url("../../assets/goodsList/sprite.png") -1153px -173px
        no-repeat;
      z-index: -1;
    }
  }
  // 会员按钮
  #vipBtn {
    width: 192px;
    height: 45px;
    position: absolute;
    left: 554px;
    bottom: 129px;
    span {
      font-family: PingFangSC-Regular;
      font-size: 32px;
      color: rgba(0, 0, 0, 0.87);
    }
    #vipBtnLine {
      position: absolute;
      bottom: 0px;
      left: -44px;
      width: 280px;
      height: 28px;
      background: url("../../assets/goodsList/sprite.png") -1150px -124px
        no-repeat;
      z-index: -1;
    }
  }
  #payBox {
    width: 85%;
    height: 177px;
    margin: 0 auto;
    margin-top: 442px;
    //   background: #ccc;
    .payBox2 {
      width: 50%;
      height: 100%;
      float: left;
    }
    #goodInfo {
      p {
        font-family: Roboto-Regular;
        font-size: 32px;
        color: rgba(0, 0, 0, 0.54);
        letter-spacing: 1.2px;
      }
      #goodName {
        overflow: hidden;
        text-overflow: ellipsis;
        // white-space: nowrap;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      #goodPrice {
        font-family: PingFangSC-Regular;
        color: #ff5454;
        letter-spacing: 1.2px;
        position: relative;
        #moneyLogo {
          position: absolute;
          top: 9px;
          left: 210px;
          font-size: 24px;
          color: #ff5454;
        }
      }
    }
    #toPay {
      div {
        height: 64px;
        text-align: left;
        #logo {
          // vertical-align: middle;
          float: left;
          margin-left: 150px;
          display: block;
          width: 64px;
          height: 64px;
        }
        span {
          margin-left: 30px;
          line-height: 64px;
          font-family: PingFangSC-Regular;
          font-size: 32px;
          color: rgba(0, 0, 0, 0.54);
          letter-spacing: 1.2px;
        }
      }
      #weChat {
        position: relative;
        #logo {
          background: url("../../assets/goodsList/sprite.png") -246px -337px
            no-repeat;
        }
      }
      #AliPay {
        position: relative;
        margin-top: 40px;
        #logo {
          background: url("../../assets/goodsList/sprite.png") -343px -337px
            no-repeat;
        }
      }
      #choseLogo {
        display: block;
        width: 46px;
        height: 46px;
        // background: #000;
        position: absolute;
        top: 9px;
        left: 70px;
      }
      .isChose {
        background: url("../../assets/goodsList/sprite.png") -335px -173px
          no-repeat;
      }
      .noChose {
        background: url("../../assets/goodsList/sprite.png") -246px -173px
          no-repeat;
      }
    }
  }
  }
}
</style>
