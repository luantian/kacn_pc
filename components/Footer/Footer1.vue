<template>
    <div class="footer1">
        <Container class="container">
            <div class="item" v-for="(item, index) in dataSource" :key="index">
                <div class="icon-wrap">
                    <span class="iconfont" :class="'icon-' + item.icon"></span>
                </div>
                <div class="title-wrap">
                    <div class="title">{{ item.title }}</div>
                    <div class="sub-title">{{ item.subTitle }}</div>
                </div>
            </div>
        </Container>
    </div>
</template>

<script lang="ts" setup name="Footer1">
const dataSource = reactive([
    {
        title: "支持多国货币",
        subTitle: "支持多国货币付款，满足您付款需求",
        icon: "feature_service",
    },
    {
        title: "7天无忧退换",
        subTitle: "安心无忧购物，售后有保障",
        icon: "feature_sale",
    },
    {
        title: "专业客服服务",
        subTitle: "百名在线客服，随时为您专业解答",
        icon: "feature_service",
    },
    {
        title: "发货超时赔付",
        subTitle: "极速发货，专业水准保证时效性",
        icon: "feature_pay",
    },
]);
</script>

<style lang="scss" scoped>
.footer1 {
    background-color: $footer-white-bg;
    padding: 30px 0;
    .container {
        display: flex;
        justify-content: space-between;
    }
    .item {
        display: flex;
        .title-wrap {
            margin-left: 20px;
            .title {
                font-size: 22px;
                padding-bottom: 6px;
            }
            .sub-title {
                font-size: 14px;
                color: $c999;
            }
        }
    }
}

.iconfont {
    font-size: 40px;
    color: $c3b8;
}
</style>
