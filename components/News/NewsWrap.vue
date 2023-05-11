<template>
    <Navbar></Navbar>
    <BreadCrumb></BreadCrumb>
    <Container>
        <el-container>
            <el-aside class="aside">
                <div class="wrap">
                    <NewsSliderBar :dataSource="dataSource1"></NewsSliderBar>
                </div>
                <NewsSliderBar :dataSource="dataSource2"></NewsSliderBar>
            </el-aside>
            <el-main>
                <slot></slot>
            </el-main>
        </el-container>
    </Container>
    <Footer></Footer>
</template>

<script lang="ts" setup name="NewsWrap">


const dataSource1 = reactive({
    title: "站内文字",
    children: [
        {
            title: "交易安全",
            children: [
                { title: "关于KA-CN" },
                { title: "购物指南" },
                { title: "支付方式" },
                { title: "售后服务" },
                { title: "帮助信息" },
            ],
        },
        {
            title: "支付方式",
        },
        {
            title: "系统公告",
        },
        {
            title: "服务保障",
        },
    ],
});

const dataSource2 = reactive({
    title: "游戏板块",
    children: [
        {
            title: "游戏资讯",
            children: [
                { title: "关于KA-CN" },
                { title: "购物指南" },
                { title: "支付方式" },
                { title: "售后服务" },
                { title: "帮助信息" },
            ],
        },
        {
            title: "游戏攻略",
        },
        {
            title: "热门手游",
        },
        {
            title: "游戏兑换码",
        },
        {
            title: "活动专区",
        },
        {
            title: "新品专区",
        },
        {
            title: "充值攻略",
        },
    ],
});
</script>

<style lang="scss" scoped>
.wrap {
    margin-bottom: 20px;
}

.aside {
    width: 240px;
}
</style>
