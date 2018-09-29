<template>
  <div class="backButton">
      <div id="backButton" @click="goBack">
          <i id="arrow"></i><span>返回</span>
      </div>  
  </div>
</template>

<script>
export default {
  name: 'back-button',
  data () {
    return {
      msg: ''
    }
  },
  methods:{
      goBack(){
          this.$router.go(-1);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#backButton{
    position: absolute;
    left:64px;
    top:42px;
    width: 148px;
    height: 64px;
    border: 2px solid #1F1F1F;
    border-radius: 8px;
    #arrow{
      position: absolute;
      top:21px;
      left:20px;
      display: inline-block;
      width: 23px;
      height: 23px;
      background: url('../../assets/goodsList/sprite.png') -672px -196px no-repeat;
    }
    span{
      font-family: PingFang-SC-Regular;
      padding-left:20px;
      line-height: 64px;
      font-size: 32px;
    }
  }
</style>
