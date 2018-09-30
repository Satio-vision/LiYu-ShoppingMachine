<template>
    <div class="memberPayRes">
       <Pay-Bg></Pay-Bg>
       <div id="box1">
            <!-- 标题栏 -->
            <div id="titleBox">
                <span>成为会员</span>
                <div id="titleLine"></div>
            </div>
            <div v-if="res =='success'">
                <i id="goBack" @click="goBack()"></i>
                <div id="img-success" class="img"></div>
                <span id="txt">支付成功</span>
                <span id="vipNum">恭喜你成为我们的第{{ vipNum }}位会员</span>
            </div>
            <div v-else>
                <div id="img-false" class="img"></div>
                <span id="txt">支付异常</span>
                <div id="rePay" @click="rePay()">重试扫码支付</div>
            </div>
       </div>
    </div>
</template>

<script>
export default {
  name: "memberPayRes",
  data(){
    return {
        res: this.$route.query.res,
        name:this.$route.query.name,
        vipNum:111
    }
  },
  methods:{
      goBack(){
        this.$store.commit('_cleanMemberPayRes','清理state.MemberPayRes');
        this.$router.go(-1);
      },
      rePay(){
          this.$router.replace({path:'/goodsShow/member', query: { name: this.name }})
      }
  }
};
</script>

<style scoped lang="scss">
.memberPayRes {
  // opacity: 0.8;
  #box1 {
    width: 1300px;
    height: 840px;
    background: #ffffff;
    border-radius: 24px;
    position: absolute;
    top: 136px;
    left: 310px;
    background: url("../../assets/pay/bg_VIP.png");
    z-index: 12;
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
        background: url("../../assets/goodsList/sprite.png") -1153px -173px no-repeat;
        z-index: -1;
      }
    }

    //状态logo
    .img{
        width: 88px;
        height: 88px;
        position: absolute;
        top:176px;
        left:607px;
    }
    #img-false{
        background: url("../../assets/goodsList/sprite.png") -1007px -141px no-repeat;
    }
    #img-success{
        background: url("../../assets/goodsList/sprite.png") -852px -141px no-repeat;
    }
    #txt{
        display: inline-block;
        width: 182px;
        // text-align: center;
        font-family: PingFangSC-Regular;
        font-size: 32px;
        color: rgba(0,0,0,0.87);
        text-align: center;
        position: absolute;
        top:288px;
        left:559px;
    }
    #rePay{
        width: 248px;
        height: 88px;
        background-image: linear-gradient(-90deg, #F94D8F 0%, #545EFA 100%);
        border-radius: 8px;

        font-family: PingFang-SC-Medium;
        line-height: 88px;
        font-size: 32px;
        color: rgba(255,255,255,0.87);
        letter-spacing: 1.2px;
        text-align: center;

        position: absolute;
        top:451px;
        left:526px;
    }
    #vipNum{
        font-family: PingFangSC-Regular;
        font-size: 28px;
        color: rgba(0,0,0,0.56);
        text-align: center;
        position: absolute;
        top:337px;
        left:467px;
    }
    #goBack{
        display: block;
        width: 39px;
        height: 39px;
        background:url('../../assets/goodsList/sprite.png') -568px -178px no-repeat;
        position: absolute;
        top:40px;
        right:40px;
    }
  }
}
</style>