<template>
    <div class="empty404">
        <img class="img" src="~/assets/imgs/empty404.png" alt="">
        <div>
            <div class="title">抱歉，页面无法访问……</div>
            <div class="sub-title">可能原因：</div>
            <div class="sub-title">网址有错误&gt;请检查地址是否完整或存在多余字符</div>
            <div class="sub-title">网址已失效&gt;可能页面已删除，活动已下线等</div>
            <div class="btn">
                <CustomNuxtLink class="custom-button to-index" type="primary" size="small" round to="/">返回首页</CustomNuxtLink>
                <CustomButton class="goback" plain round size="small" @click="goback">返回上一页</CustomButton>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Empty404",
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
.empty404 {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .img {
        display: block;
        width: 437px;
        height: 300px;
        margin-right: 60px;
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
            padding: 9px 15px;
        }
        .to-index, .goback {
            width: 120px;
        }
    }
}
</style>
