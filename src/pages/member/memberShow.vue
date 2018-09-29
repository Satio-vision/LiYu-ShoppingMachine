<template>
    <div class="memeberShow">
        <div id="box">
            <router-link
            replace
            tag="div"
            :to="{name:'memberPay',query:{name:member.name}}"
            v-for = "(member,i) in memberData"
            :key="i"
            class="member"
            @click.native = "changeShow()">
<!-- 根据Vue2.0官方文档关于父子组件通讯的原则，父组件通过prop传递数据给子组件，子组件触发事件给父组件。但父组件想在子组件上监听自己的click的话，需要加上native修饰符。所以如果在想要在router-link上添加事件的话需要@click.native这样写 -->
                <i></i>
                <img>
                <span id="detail">{{member.detail}}</span>
                <p id="memberName">{{member.name}}</p>
                <p>
                    <span class="memberPrice">￥</span>
                    <span class="memberPrice" id="_memberPrice">{{member.price}}</span>
                </p>
                <!-- {{ member }} -->
            </router-link>
        </div>
        <span id="memberChose" v-show = "choseSpan">请点选会员套餐</span>
        <router-view v-show = "memberPayShow" ></router-view>
    </div>
</template>

<script>
export default {
  name: "MenberShow",
  data() {
    return {
      memberData: [],
      choseSpan:true,
      memberPayShow:false
    };
  },
  methods: {
    getMemberData() {
      this.$http.get("../../../static/member.json").then(res => {
        console.log(res.data)
        this.memberData = res.data;
      });
    },
    changeShow(){
        // console.log('aa');
        this.choseSpan = false,
        this.memberPayShow = true;
    }
  },
  created() {
    this.getMemberData();
  }
};
</script>

<style scoped lang="scss">
#box {
    width: 1112px;
    height: 277px;
    margin: 0 auto;
    margin-top: 127px;
    z-index: 5;
  .member {
    float: left;
    height: 100%;
    width: 324px;
    margin-left: 70px;
    position: relative;
    img{
        width: 100%;
        height: 187px;
        border-radius: 8px;
        border: 3px solid #A37700;
    }
    #detail{
        display: inline-block;
        width: 100%;
        text-align: center;
        position: absolute;
        top:140px;
        left:0px;

        font-family: PingFangSC-Regular;
        font-size: 24px;
        color: #694C00;
        text-align: center;
    }
    p{
        text-align: center;
    }
    #memberName{
        margin-top:6px;
        font-family: PingFang-SC-Regular;
        font-size: 28px;
        color: rgba(0,0,0,0.54);

    }
    .memberPrice{
        margin-top:6px;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: rgba(0,0,0,0.87);
        letter-spacing: 1.2px;
    }
    #_memberPrice{
        font-size: 28px;
    }
  }
  div:first-child {
    margin-left: 0px;
    img{
        background: url('../../assets/goodsList/sprite.png') -580px -588px no-repeat;
        border:0px;
    }
  }
  .router-link-exact-active{
    position: relative;
    i{
        display: block;
        position: absolute;
        top:-23px;
        left:-23px;
        width: 48px;
        height: 48px;
        border-radius: 45%;
        background: url('../../assets/goodsList/sprite.png') -438px -161px no-repeat;
        box-shadow: 0px 0px 30px #333;
    }
  }
}
#memberChose{
    display: inline-block;
    margin-top:40px;
    font-family: PingFangSC-Regular;
    font-size: 40px;
    color: rgba(0,0,0,0.87);
}
</style>