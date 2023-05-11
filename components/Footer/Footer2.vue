<template>
    <div class="footer2">
        <Container class="container">
            <div class="dl" v-for="(item, index) in dataSource" :key="index">
                <div class="dt">{{ item.title }}</div>
                <div class="dd" v-for="(it, idx) in item.children" :key="idx">
                    <CustomNuxtLink class="dd-btn" :to="it.url">
                        {{ it.title }}
                    </CustomNuxtLink>
                </div>
            </div>
        </Container>
    </div>
</template>

<script lang="ts" setup name="Footer2">
const dataSource = reactive([
    {
        title: "关于KA-CN",
        children: [
            { title: "交易安全", url: "/" },
            { title: "关于KA-CN", url: "/" },
            { title: "隐私权政策", url: "/" },
        ],
    },
    {
        title: "购物指南",
        children: [
            { title: "如何购买", url: "/" },
            { title: "会员登记", url: "/" },
            { title: "怎么在KA-CN上购物", url: "/" },
        ],
    },
    {
        title: "支付方式",
        children: [
            { title: "支付货币", url: "/" },
            { title: "支付方式", url: "/" },
            { title: "PayPal", url: "/" },
        ],
    },
    {
        title: "售后服务",
        children: [
            { title: "售后服务", url: "/" },
            { title: "无理由退货", url: "/" },
            { title: "超时赔付", url: "/" },
        ],
    },
    {
        title: "帮助信息",
        children: [
            { title: "找回密码", url: "/" },
            { title: "常见问题", url: "/" },
            { title: "如何收货", url: "/" },
        ],
    },
]);

</script>

<style lang="scss" scoped>
.footer2 {
    background-color: $footer-grey-bg;
    padding: 30px 0;
    .container {
        display: flex;
        justify-content: space-between;
    }
    .dl {
        .dt {
            font-size: 16px;
            color: $c333;
            margin-bottom: 20px;
        }
        .dd {
            font-size: 14px;
            margin-bottom: 15px;
            &:last-child {
                margin-bottom: 0;
            }
            &-btn {
                color: $c666;
                &:hover,
                &:focus {
                    color: $c3b8;
                }
            }
        }
    }
}
</style>
