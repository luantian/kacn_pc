<template>
    <div class="wake">
        <img
            class="wake-img"
            src="~/assets/imgs/wake_search.png"
            alt="搜索结果为空图片"
        />
        <div class="content">
            <div class="title">
                抱歉，没有找到相关商品，我们正在努力完善，敬请期待哦～
            </div>
            <div class="sub-title">撩一下客服小姐姐，让她帮助你！</div>
            <div class="btn">
                <CustomNuxtLink type="primary" round to="/"
                    >联系客服</CustomNuxtLink
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "WakeSearch",
};
</script>

<style lang="scss" scoped>
.wake {
    display: flex;
    box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.08);
    border-radius: 15px;
    box-sizing: border-box;
    padding: 40px 130px;
    &-img {
        display: block;
        width: 160px;
        height: 160px;
        margin-right: 20px;
    }
    .title {
        padding-top: 20px;
        font-size: 18px;
        color: $c333;
    }
    .sub-title {
        color: $c999;
        margin-top: 10px;
        margin-bottom: 30px;
    }
    .btn {
        height: 34px;
        line-height: 34px;
    }
}
</style>
