<template>
    <div class="wake">
        <img
            class="wake-img"
            src="~/assets/imgs/wake_funds.png"
            alt="搜索结果为空图片"
        />
        <div class="content">
            <div class="title">暂无资金明细</div>
            <div class="sub-title">“您当前还没有资金明细哦～”</div>
            <!-- <div class="btn">
                <CustomNuxtLink
                    class="custom-button"
                    size="small"
                    type="primary"
                    round
                    to="/"
                    >去逛逛</CustomNuxtLink
                >
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "WakeFunds",
};
</script>

<style lang="scss" scoped>
@import url(./common.scss);
</style>
