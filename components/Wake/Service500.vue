<template>
    <div class="service500">
        <img class="img" src="~/assets/imgs/service500.png" alt="">
        <div>
            <div class="title">网站正在升级中……</div>
            <div class="sub-title">亲爱的用户，为了让您更好的使用网站，我们正在对网站进行升级，</div>
            <div class="sub-title">预计xx时xx分xx秒升级完毕，升级期间暂时无法访问。</div>
            <div class="sub-title" style="margin-top: 16px;">给您带来的不便，敬请谅解。</div>
            <div class="btn">
                <CustomNuxtLink class="custom-button" type="primary" size="small" round to="/">联系客服小姐姐</CustomNuxtLink>
                <CustomNuxtLink class="custom-button" type="button" plain size="small" round to="/">联系客服小哥哥</CustomNuxtLink>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "Service500",
    data() {
        return {};
    },
    methods: {
        goback() {
            this.$router.go(-1);
        }
    }
};
</script>

<style lang="scss" scoped>
.service500 {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .img {
        display: block;
        width: 300px;
        height: 300px;
        margin-right: 50px;
    }
    .title {
        font-size: 24px;
        line-height: 40px;
        margin-bottom: 20px;
    }

    .sub-title {
        color: $c999;
        padding-bottom: 4px;
    }
    .btn {
        margin-top: 30px;
        .custom-button {
            margin-right: 20px;
            padding: 9px 25px;
        }
    }
}
</style>
