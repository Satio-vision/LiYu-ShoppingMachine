<template>
  <div class="payBg">
    <div id="bg"></div>
    <div id="box2"></div>
    <div id="box3"></div>
  </div>
</template>

<script>
export default {
  name: "PayBg",
  data() {
    return {
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.payBg {
  // opacity: 0.8;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 10;
  #bg {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    background-image: linear-gradient(-90deg, #f94d8f 0%, #545efa 100%);
  }
  #box2 {
    width: 1200px;
    height: 788px;
    position: absolute;
    top: 104px;
    left: 360px;
    opacity: 0.8;
    background: #ffffff;
    border-radius: 14px;
  }
  #box3 {
    width: 1100px;
    height: 788px;
    margin: 0 auto;
    margin-top: 80px;
    opacity: 0.5;
    background: #ffffff;
    border-radius: 14px;
    z-index: -2;
  }
}
</style>
