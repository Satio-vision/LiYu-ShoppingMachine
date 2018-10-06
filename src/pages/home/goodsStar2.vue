<template>
    <div class="goodsStar2">
        <div id="routundityBox">
            <!-- <div class="rotundity" id="rotundityBg"></div> -->
            <!-- 第一个圆形 -->
            <div class="rotundity" id="rotundity1">
                <div class="goodsBlock" id="goodsBlock1_1">
                    <img src="../../assets/home/goods/01.png">
                    <p>这个是CHANLE香水</p>
                </div>
                <div class="goodsBlock" id="goodsBlock1_2">
                    <img src="../../assets/home/goods/01.png">
                    <p>这个是CHANLE香水</p>
                </div>
            </div>
            <!-- 第二个圆形 -->
            <div class="rotundity" id="rotundity2">
              <div class="goodsBlock" id="goodsBlock2_1">
                <img src="../../assets/home/goods/02.png">
                <p>这个是CHANLE香水</p>
              </div>
              <div class="goodsBlock" id="goodsBlock2_2">
                <img src="../../assets/home/goods/02.png">
                <p>这个是CHANLE香水</p>
              </div>
            </div>
            <!-- 第三个圆形 -->
            <div class="rotundity" id="rotundity3">
              <div class="goodsBlock" id="goodsBlock3_1">
                <img src="../../assets/home/goods/03.png">
                <p>这个是CHANLE香水</p>
              </div>
              <div class="goodsBlock" id="goodsBlock3_2">
                <img src="../../assets/home/goods/03.png">
                <p>这个是CHANLE香水</p>
              </div>
            </div>
            <!-- 第四个圆形 -->
            <div class="rotundity" id="rotundity4">
              <div class="goodsBlock" id="goodsBlock4_1">
                <img src="../../assets/home/goods/04.png">
                <p>这个是CHANLE香水</p>
              </div>
              <div class="goodsBlock" id="goodsBlock4_2">
                <img src="../../assets/home/goods/04.png">
                <p>这个是CHANLE香水</p>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'GoodsStar2',
  data () {
    return {
    }
  },
  created(){
  }
}
</script>

<style scoped lang="scss">
.goodsStar2{
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
    transform: rotateX(90deg);
    // animation:round 100s infinite linear;
    .rotundity{
        // background: rgb(247, 113, 113);
        width: 700px;
        height: 700px;
        border-radius: 50%;
        position:absolute;
        top:0px;
        left:0px;
        transform-style:preserve-3d;
        .goodsBlock{
            // border-radius: 50%;
            width: 200px;
            height: 150px;
            // background: #ccc;
            position: absolute;
            transform: rotateX(-90deg);
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
    #rotundityBg{
      background: #000;
      transform: rotateX(-80deg) translateZ(300px);
      opacity: 0.8;
    }
    // 第一个圆形
    #rotundity1{
      // background: rgb(247, 113, 113);
      animation:round 30s infinite linear;
      #goodsBlock1_1{
        position: absolute;
        bottom:-75px;
        left:50%;
        margin-left:-100px;
        animation: round1_1 30s infinite linear;
        // transform: rotateX(-90deg);
      }
      @keyframes round1_1 {
        0% {
          transform: rotateX(-90deg) scale(1.6);
          opacity: 1;
        }
        50% {
          transform: rotateX(-90deg) scale(0.4);
          opacity: 0.2;
        }
        100% {
          transform: rotateX(-90deg) scale(1.6);
          opacity: 1;
        }
      }


      #goodsBlock1_2{
        position: absolute;
        top:-75px;
        left:50%;
        margin-left:-100px;
        animation: round1_2 30s infinite linear;
        transform: rotateX(-90deg) rotateY(180deg);
      }
      @keyframes round1_2 {
        0% {
          transform: rotateX(-90deg) rotateY(180deg) scale(0.4);
          opacity: 0.2;
        }
        50% {
          transform: rotateX(-90deg) rotateY(180deg) scale(1.6);
          opacity: 1;
        }
        100% {
          transform: rotateX(-90deg) rotateY(180deg) scale(0.4);
          opacity: 0.2;
        }
      }
    }
    @keyframes round {
      0% {
        transform: rotateZ(0deg);
      }
      100% {
        transform: rotateZ(-360deg);
      }
    }

    // 第二个圆形
    #rotundity2{
      background: rgb(212, 211, 143);
      transform: rotateY(135deg) rotateZ(45deg);
      animation:round2 30s infinite linear;
      #goodsBlock2_1{
        position: absolute;
        right: -60px;
        bottom: 42px;
        // margin-left:-100px;
        transform: rotateX(-90deg) rotateY(45deg) rotateZ(-135deg);
        animation:round2_1 30s infinite linear;
      }
      @keyframes round2_1 {
        0%{
          transform: rotateX(-90deg) rotateY(45deg) rotateZ(-135deg) scale(1);
          opacity: 0.8;
        }
        12.5% {
          transform: rotateX(-90deg) rotateY(45deg) rotateZ(-135deg) scale(1.6);
          opacity: 1;
        }
        62.5%{
          transform: rotateX(-90deg) rotateY(45deg) rotateZ(-135deg) scale(0.4);
          opacity: 0.2;
        }
        100%{
          transform: rotateX(-90deg) rotateY(45deg) rotateZ(-135deg) scale(1);
          opacity: 0.8;
        }
      }


      #goodsBlock2_2{
        position: absolute;
        left: -85px;
        top: 112px;
        // margin-left:-100px;
        transform: rotateX(48deg) rotateZ(19deg) rotateY(-61deg);
        animation:round2_2 30s infinite linear;
      }
      @keyframes round2_2 {
        0% {
          transform: rotateX(48deg) rotateZ(19deg) rotateY(-61deg) scale(0.6);
          opacity: 0.4;
        }
        12.5%{
          transform: rotateX(48deg) rotateZ(19deg) rotateY(-61deg) scale(0.4);
          opacity: 0.2;
        }
        62.6%{
          transform: rotateX(48deg) rotateZ(19deg) rotateY(-61deg) scale(1.6);
          opacity: 1;
        }
        100% {
          transform: rotateX(48deg) rotateZ(19deg) rotateY(-61deg) scale(0.6);
          opacity: 0.4;
        }
      }
    }
    @keyframes round2 {
      0% {
        transform: rotateY(135deg) rotateZ(0deg);
      }
      100% {
        transform: rotateY(135deg) rotateZ(360deg);
      }
    }

    // 第三个圆形
    #rotundity3{
      background: rgb(161, 235, 149);
      // opacity: 0.5;
      transform: rotateY(90deg) rotateZ(0deg);
      animation:round3 30s infinite linear;
      #goodsBlock3_1{
        position: absolute;
        left: 607px;
        top: 245px;
        transform: rotateX(0deg) rotatez(-180deg) rotateY(-90deg);
        animation:round3_1 30s infinite linear;
      }
      @keyframes round3_1 {
        0% {
          transform: rotateX(0deg) rotatez(-180deg) rotateY(-90deg) scale(0.8);
          opacity: 0.6;
        }
        25%{
          transform: rotateX(0deg) rotatez(-180deg) rotateY(-90deg) scale(1.6);
          opacity: 1;
        }
        75%{
          transform: rotateX(0deg) rotatez(-180deg) rotateY(-90deg) scale(0.4);
          opacity: 0.2;
        }
        100% {
          transform: rotateX(0deg) rotatez(-180deg) rotateY(-90deg) scale(0.8);
          opacity: 0.6;
        }
      }


      #goodsBlock3_2{
        position: absolute;
        right: 607px;
        bottom: 245px;
        transform: rotateX(180deg) rotatez(-180deg) rotateY(90deg);
        animation:round3_2 30s infinite linear;
      }
      @keyframes round3_2 {
        0% {
          transform: rotateX(180deg) rotatez(-180deg) rotateY(90deg) scale(0.8);
          opacity: 0.6;
        }
        25%{
          transform: rotateX(180deg) rotatez(-180deg) rotateY(90deg) scale(0.4);
          opacity: 0.2;
        }
        75%{
          transform: rotateX(180deg) rotatez(-180deg) rotateY(90deg) scale(1.6);
          opacity: 1;
        }
        100% {
          transform: rotateX(180deg) rotatez(-180deg) rotateY(90deg) scale(0.8);
          opacity: 0.6;
        }
      }
    }
    @keyframes round3 {
      0% {
        transform: rotateY(90deg) rotateZ(0deg);
      }
      50% {
        transform: rotateY(90deg) rotateZ(180deg);
      }
      100%{
        transform: rotateY(90deg) rotateZ(360deg);
      }
    }

    // 第四个圆形
    #rotundity4{
      background: rgb(149, 215, 235);
      transform: rotateY(45deg);
      animation: round4 30s infinite linear;
      #goodsBlock4_1{
        left:0px;
        bottom:0px;
        transform: rotateX(-55deg) rotatez(-27deg) rotateY(-46deg);
        animation:round4_1 30s infinite linear;
      }
      @keyframes round4_1 {
        0% {
          transform: rotateX(-55deg) rotatez(-27deg) rotateY(-46deg) scale(1);
          opacity: 0.8;
        }
        12.5% {
          transform: rotateX(-55deg) rotatez(-27deg) rotateY(-46deg) scale(0.8);
          opacity: 0.6;
        }
        37.5% {
          transform: rotateX(-55deg) rotatez(-27deg) rotateY(-46deg) scale(0.4);
          opacity: 0.2;
        }
        87.5% {
          transform: rotateX(-55deg) rotatez(-27deg) rotateY(-46deg) scale(1.6);
          opacity: 1;
        }
        100% {
          transform: rotateX(-55deg) rotatez(-27deg) rotateY(-46deg) scale(1);
          opacity: 0.8;
        }
      }
      #goodsBlock4_2{
        right:0px;
        top:0px;
        transform: rotateX(63deg) rotatez(142deg) rotateY(-48deg);
        animation:round4_2 30s infinite linear;
      }
      @keyframes round4_2 {
        0% {
          transform: rotateX(63deg) rotatez(142deg) rotateY(-48deg) scale(0.6);
          opacity: 0.4;
        }
        12.5% {
          transform: rotateX(63deg) rotatez(142deg) rotateY(-48deg) scale(0.8);
          opacity: 0.6;
        }
        37.5% {
          transform: rotateX(63deg) rotatez(142deg) rotateY(-48deg) scale(1.6);
          opacity: 1;
        }
        87.5% {
          transform: rotateX(63deg) rotatez(142deg) rotateY(-48deg) scale(0.4);
          opacity: 0.2;
        }
        100% {
          transform: rotateX(63deg) rotatez(142deg) rotateY(-48deg) scale(0.6);
          opacity: 0.4;
        }
      }
    }
    @keyframes round4 {
      0% {
        transform: rotateY(45deg) rotateZ(0deg);
      }
      50% {
        transform: rotateY(45deg) rotateZ(180deg);
      }
      100%{
        transform: rotateY(45deg) rotateZ(360deg);
      }
    }
  } 
}
</style>