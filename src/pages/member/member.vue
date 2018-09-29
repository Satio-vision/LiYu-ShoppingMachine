<template>
  <div class="member">
    <Pay-Bg></Pay-Bg>
    <div id="box1">
      <!-- 关闭按钮 -->
      <i id="closeBtn" @click="goBack()"></i>
      <!-- 标题栏 -->
      <div id="titleBox">
          <span>成为会员</span>
          <div id="titleLine"></div>
      </div>
      <memberShow></memberShow>
    </div>  
  </div>
</template>

<script>
import memberShow from './memberShow'
import Vue  from 'vue'
// import { mapState } from 'vuex'
import Store from '../../store'
export default {
  name: "Member",
  data() {
    return {
      name:"",
      memberPayRes:''
    };
  },
  components:{
    memberShow
  },
  computed:{
    memberPayData:function () {
      return this.$store.state.memberPayRes
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    }
  },
  watch:{
    memberPayData(val,oldval){
      console.log('val',val);
      this.memberPayRes = val;
    },
    memberPayRes:function(val){
      console.log('val',val)
      this.$router.replace({path:'memberPayRes',query:{res:val,name:this.name}})
    }
  },
  store:Store
};
</script>

<style scoped lang="scss">
.member {
  width: 100%;
  height: 100%;
  position: relative;
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
    z-index: 11;
    #closeBtn {
    position: absolute;
    top: 40px;
    right: 108px;
    width: 39px;
    height: 39px;
    background: url("../../assets/goodsList/sprite.png") -568px -178px no-repeat;
    z-index: 2;
    }
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
  }
   }

</style>
