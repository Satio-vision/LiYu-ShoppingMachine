<template>
    <div class="app-home-goodsStar">
        <div id="routundityBox">
          <!-- 第一个圆形 -->
          <div class="rotundity" id="rotundity1">
            <div class="goodsBlock" id="goodsBlock1_1">
              <img src="../../assets/home/goods/04.png">
              <p>这个是CHANLE香水</p>
            </div>
            <div class="goodsBlock" id="goodsBlock1_2">
              <img src="../../assets/home/goods/01.png">
              <p>好像很厉害的眼镜</p>
            </div>
            <div class="goodsBlock" id="goodsBlock1_3">
              <img src="../../assets/home/goods/02.png">
              <p>不知道这个是什么鬼</p> 
            </div>
          </div>
          <!-- 第二个圆形 -->
          <div class="rotundity" id="rotundity2">
            <div class="goodsBlock" id="goodsBlock2_1">
              <img src="../../assets/home/goods/03.png">
              <p>这个是CHANLE香水</p>
            </div>
            <div class="goodsBlock" id="goodsBlock2_3">
              <img src="../../assets/home/goods/05.png">
              <p>这个是CHANLE香水</p>
            </div>
            <div class="goodsBlock" id="goodsBlock2_4">
               <img src="../../assets/home/goods/06.png">
              <p>这个是CHANLE香水</p>
            </div> 
          </div>
          <!-- <div class="rotundity" id="rotundity3">
            <div class="goodsBlock" id="goodsBlock3_1"></div>
            <div class="goodsBlock" id="goodsBlock3_2"></div>
            <div class="goodsBlock" id="goodsBlock3_3"></div>
            <div class="goodsBlock" id="goodsBlock3_4"></div>
          </div> -->
        </div>
    </div>
</template>

<script>
export default {
  name: 'AppHomeGoodsStar',
  data () {
    return {
    }
  },
  created(){
  }
}
</script>

<style scoped lang="scss">
.app-home-goodsStar{
  width: 700px;
  height: 700px;
  margin:0 auto;
  position: relative;
  // transform-style:preserve-3d;
  #routundityBox{
    width: 700px;
    height: 700px;
    position: absolute;
    top:67px;
    left:0px;
    transform-style:preserve-3d;
    // transform: rotateX(70deg);
    // animation:round 100s infinite linear;
    .rotundity{
      width: 700px;
      height: 700px;
      border-radius: 50%;
      position:absolute;
      top:0px;
      left:0px;
      transform-style:preserve-3d;
      .goodsBlock{
        width: 200px;
        height: 250px;
        // background: #ccc;
        position: absolute;
        img{
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 200px;	
        }
        p{
          color:#fff;
          font-size: 16px;
        }
      }
    }

    // 第一个圆形
    #rotundity1{
      // background: rgb(247, 113, 113);
      opacity: 1;
      animation:round 30s infinite linear;
      #goodsBlock1_1{
        position: absolute;
        top:70px;
        left:-50px;
        transform: rotateY(-90deg);
        animation:scale1_1 30s infinite linear;
      }
      #goodsBlock1_2{
        transform: rotateY(-90deg);
        position: absolute;
        // top:50%;
        bottom: -50px;
        animation:scale1_1 30s infinite linear;
      }
      @keyframes scale1_1 {
        0% {
          transform:rotateY(0deg) scale(0.5);
          opacity: 0.5;
        }
        25% {
          transform: rotateY(-90deg) scale(1.5);
          opacity: 1;
        }
        50%{
          transform: rotateY(-180deg) scale(0.5);
          opacity: 0.5;
        }
        75% {
          transform: rotateY(-270deg) scale(0.25);
          opacity: 0.25;
        }
        100% {
          transform:rotateY(-360deg) scale(0.5);
          opacity: 0.5;
        }
      }

      #goodsBlock1_3{
        position: absolute;
        right: 0px;
        top:35%;
        animation:scale1_2 30s infinite linear;
      }
      // #goodsBlock1_4{
      //   position: absolute;
      //   right:0px;
      //   bottom: 0px;
      //   animation:scale1_2 30s infinite linear;
      // }
      @keyframes scale1_2 {
        0% {
          transform:rotateY(0deg) scale(0.5);
          opacity: 0.5;
        }
        25% {
          transform: rotateY(-90deg) scale(0.25);
          opacity: 0.25;
        }
        50%{
          transform: rotateY(-180deg) scale(0.5);
          opacity: 0.5;
        }
        75% {
          transform: rotateY(-270deg) scale(1.5);
          opacity: 1;
        }
        100% {
          transform:rotateY(-360deg) scale(0.5);
          opacity: 0.5;
        }
      }
    }
    @keyframes round {
      0% {
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
      }
      100% {
        -webkit-transform: rotateY(360deg);
        transform: rotateY(360deg);
      }
    }


    #rotundity2{
      // background: rgb(212, 211, 143);
      // opacity: 0.5;
      animation:round2 30s infinite linear;
      // transform-style:preserve-3d;
      transform:rotateY(60deg);
      #goodsBlock2_1{
         position: absolute;
         left:-30px;
         top:35%;
         transform: rotateY(120deg);
         animation:scale2_1 30s infinite linear;
      }
      @keyframes scale2_1 {
        0% {
          transform:rotateY(-60deg) scale(0.66);
          opacity: 0.66;
        }
        8.3%{
          transform:rotateY(-90deg) scale(1.5);
          opacity: 1;
        }
        33.3%{
          transform:rotateY(-180deg) scale(0.5);
          opacity: 0.5;
        }
        58.3%{
          transform:rotateY(-270deg) scale(0.25);
          opacity: 0.25;
        }
        83.3%{
          transform:rotateY(-360deg) scale(0.5);
          opacity: 0.5;
        }
        83.31%{
          transform:rotateY(0deg) scale(0.5);
          opacity: 0.5;
        }
        100%{
          transform:rotateY(-60deg) scale(0.66);
          opacity: 0.66;
        }
      }

      #goodsBlock2_3{
        position: absolute;
        top:50px;
        right: 0;
        animation:scale2_2 30s infinite linear;
      }
      #goodsBlock2_4{
        position: absolute;
        right: 0;
        bottom:0;
        animation:scale2_2 30s infinite linear;
      }
      @keyframes scale2_2 {
        0% {
          transform:rotateY(-60deg) scale(0.33);
          opacity: 0.33;
        }
        8.3%{
          transform:rotateY(-90deg) scale(0.25);
          opacity: 0.25;
        }
        33.3%{
          transform:rotateY(-180deg) scale(0.5);
          opacity: 0.5;
        }
        58.3%{
          transform:rotateY(-270deg) scale(1.5);
          opacity: 1;
        }
        83.3%{
          transform:rotateY(-360deg) scale(0.5);
          opacity: 0.5;
        }
        83.31%{
          transform:rotateY(0deg) scale(0.5);
          opacity: 0.5;
        }
        100%{
          transform:rotateY(-60deg) scale(0.33);
          opacity: 0.33;
        }
      }
    }
    @keyframes round2 {
      0% {
        -webkit-transform: rotateY(45deg);
        transform: rotateY(45deg);
      }
      100% {
        -webkit-transform: rotateY(405deg);
        transform: rotateY(405deg);
      }
    }

    // 第三个圆形
    #rotundity3{
      background: rgb(110, 210, 240);
      opacity: 0.5;
      animation:round3 100s infinite linear;
    }
    @keyframes round3 {
      0% {
        -webkit-transform: rotateY(-45deg);
        transform: rotateY(-45deg);
      }
      100% {
        -webkit-transform: rotateY(315deg);
        transform: rotateY(315deg);
      }
    }

  } 
  
  
}
</style>