<template>
  <div class="notFound">
      <img src="@/assets/logo_big.png" alt="">
      <p>404：页面走丢了</p>
      <div id="backBtn" @click="backBtn()">
        <span>
          返回首页
        </span>
      </div>
  </div>

</template>

<script>
export default {
  name: 'NotFound',
  data () {
    return {

    }
  },
  methods:{
      backBtn(){
        this.$router.replace({path:'/'});
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img{
    margin-top:80px;
    width: 500px;
}
p{
    margin-top:80px;
    font-family: PingFang-SC-Regular;
    font-size: 60px;
    color: rgba(0,0,0,0.54);
    letter-spacing: 1.33px;
}
// 购买按钮
#backBtn{
    width: 248px;
    height: 88px;
    margin:60px auto;
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
</style>
