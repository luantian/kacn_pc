<template>
    <Container class="home_box">
        <div class="home_title">
            我的订单
            <!-- <nuxt-link to="">查看更多订单 +</nuxt-link>-->
            <a class="home_more" href="个人中心-我的订单.php">查看更多订单 +</a>
        </div>
        <div class="home_order home_height js_homeHeight">
            <div class="home_fastImg load_img">
                <img class="p_img" src="~assets/imgs/demo01.jpg" />
            </div>
            <ul class="home_orderUl">
                <li class="home_orderTitle">金铲铲之战</li>
                <li class="home_orderText">共12件商品</li>
            </ul>
            <div class="home_orderLine"></div>
            <div class="home_orderStatic">等待付款</div>
            <div class="home_orderLine"></div>
            <ul class="home_orderMoney">
                <li class="home_orderPrice">USD $1922.00</li>
                <li class="home_orderName">（含手续费：USD $1.00）</li>
            </ul>
            <div class="home_orderLine"></div>
            <div class="home_orderBtnBox">
                <button class="p_btnLinearSmall">去付款</button>
            </div>
        </div>
    </Container>
</template>

<script>
import Container from "../Container/Container.vue";

export default {
    components: { Container },
    name: "homeOrder",
    data() {
        return {};
    },

    methods: {},
};
</script>

<style lang="scss" scoped>
.home_fastImg {
    width: 110px;
    height: 110px;
    margin-right: 20px;
}
.home_fastImg img {
    width: 100%;
    border-radius: 20px;
}
.home_title {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    font-weight: bold;
    line-height: 40px;
    height: 40px;
    letter-spacing: 1px;
    color: #333333;
}
.home_box {
    padding-bottom: 40px;
    font-size: 14px;
}
.home_more {
    color: #333333;
    font-size: 16px;
    font-weight: normal;
}
.home_more:hover {
    color: #3b8cfe;
}
.pt40 {
    padding-top: 40px;
}
.home_order {
    background: #ffffff;
    border-radius: 20px;
    padding: 20px 30px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-box-align: center;
    box-align: center;
    -webkit-align-items: center;
    align-items: center;
    margin-top: 20px;
}
.home_orderUl {
    margin-right: 20px;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    list-style: none;
    padding: 0px;
}
.home_orderTitle {
    font-size: 22px;
    line-height: 40px;
    height: 40px;
    font-weight: bold;
}
.home_orderText {
    font-size: 18px;
    line-height: 30px;
    height: 30px;
    margin-top: 10px;
    color: #666666;
}
.home_orderStatic {
    font-size: 20px;
    line-height: 30px;
    height: 30px;
    color: #333333;
    width: 150px;
    text-align: center;
    font-weight: bold;
    margin: 0 20px;
}
.home_orderMoney {
    width: 240px;
    text-align: center;
    margin: 0 20px 0px 20px;
    list-style: none;
    padding: 0px;
}
.home_orderPrice {
    text-align: center;
    font-size: 20px;
    line-height: 30px;
    height: 30px;
    font-weight: bold;
    color: #ee0000;
}
.home_orderName {
    font-size: 14px;
    color: #999999;
    line-height: 30px;
    height: 30px;
}
.home_orderBtnBox {
    width: 240px;
    padding: 0 30px;
    margin-left: 0.2rem;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
.home_orderLine {
    width: 1px;
    height: 90px;
    background: linear-gradient(
        180deg,
        rgba(222, 227, 235, 0.3) 0%,
        #dee3eb 50%,
        rgba(222, 227, 235, 0.3) 100%
    );
}
</style>
