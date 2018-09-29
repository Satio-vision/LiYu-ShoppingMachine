<template>
    <div class="memberPay">
        <div id="box-center" class="_box">
            <img :src="ChosedCode">
        </div>
        <div id="box-right" class="_box">
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
</template>

<script>
import Vue  from 'vue'
// import { mapState } from 'vuex'
import Store from '../../store'
export default {
    name:'MemberPay',
    data() {
        return {
            name:this.$route.query.name,
            QRCode:{},
            ChosedCode:'',
            //false是支付宝，true是微信
            payChose:false,
            memberPayRes:''
        }
    },
    created(){
        this.getMemberPayData(this.name);
    },
    mounted(){
        //页面刚进入时开启长连接
        // this.initWebSocket()
        setTimeout(() => {
            this.$store.dispatch('getMemberPayRes');
        },3000)
    },
    watch:{
        '$route'(to,from){
            this.name = to.query.name;
            this.getMemberPayData(this.name);
        },
    },
    methods:{
        getMemberPayData(name){
            this.$http.get("../../../static/memberPay.json", {}).then(res => {
               this.QRCode = res.data;
               this.ChosedCode = res.data.RQCode_AliPay
            //    console.log('this.QRCode',this.QRCode)
            });
            
        },
        changePayWay(){
            this.payChose = !this.payChose;
            if(this.payChose){
                this.ChosedCode = this.QRCode.RQCode_WeChat
            }else{
                this.ChosedCode = this.QRCode.RQCode_AliPay
            }
        },
    },
    store:Store
}
</script>
<style scoped lang="scss">
.memberPay{
    margin:40px 48px;
    height: 216px;
    ._box{
        height: 100%;
        float:left;
    }
    #box-center{
        margin-left:502px;
        width: 216px;
        height: 100%;
        background: #F7F7F7;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.30);
        img{
            width: 206px;
            height: 206px;
            margin:5px;
        }
    }
    #box-right{
        float: left;
        padding-top:24px;
        div{
            height: 64px;
            text-align: left;
            #logo{
                // vertical-align: middle;
                float:left;
                margin-left:100px;
                display: block;
                width: 64px;
                height: 64px;
            }
            span{
                margin-left:30px;
                line-height: 64px;
                font-family: PingFangSC-Regular;
                font-size: 32px;
                color: rgba(0,0,0,0.54);
                letter-spacing: 1.2px;
            }
        }
        #weChat{
            position: relative;
            #logo{
                background: url("../../assets/goodsList/sprite.png") -246px -337px no-repeat;
            }
        }
        #AliPay{
            position: relative;
            margin-top:40px;
            #logo{
                background: url("../../assets/goodsList/sprite.png") -343px -337px no-repeat;
            }
        }
        #choseLogo{
            display: block;
            width: 46px;
            height: 46px;
            // background: #000;
            position: absolute;
            top:9px;
            left:27px;
        }
        .isChose{
            background: url("../../assets/goodsList/sprite.png") -335px -173px no-repeat;
        }
        .noChose{
            background: url("../../assets/goodsList/sprite.png") -246px -173px no-repeat;
        }
    }
}
</style>