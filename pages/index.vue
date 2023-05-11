<template>
    <Navbar fixed></Navbar>
    <div class="container-wrap">
        <Container>
            <Swiper></Swiper>
        </Container>
        <Container class="wrap">
            <HomeQuickRecharge></HomeQuickRecharge>
        </Container>
        <Container>
            <PageTitle size="large">猜你喜欢</PageTitle>
            <HomeLikes></HomeLikes>
        </Container>
    </div>
    <Container class="wrap">
        <PageTitle size="large">新品尝鲜</PageTitle>
        <Linkage></Linkage>
    </Container>
    <Container class="wrap">
        <HomeHot></HomeHot>
    </Container>
    <Container class="wrap">
        <HomeNewsQuestion></HomeNewsQuestion>
    </Container>
    <div style="padding-top: 20px;">
        <CustomNuxtLink to="/">
            <img class="pay-img" :src="HomePay" alt="图片" />
        </CustomNuxtLink>
    </div>
    <Footer class="footer"></Footer>
</template>

<script lang="ts" setup name="PageIndex">

import HomePay from "~/assets/imgs/home_pay.png";

</script>

<style lang="scss" scoped>
.swiper-wrap {
    padding-top: 40px;
}

.custom-input-number {
    width: 200px;
    height: 50px;
}

.container-wrap {
    background-image: url("~/assets/imgs/home_bg.png");
    padding: 40px 0;
}

.wrap {
    padding: 20px 0;
}

.pay-img {
    display: block;
    width: 100%;
}
.footer {
    margin: 0;
}
</style>
