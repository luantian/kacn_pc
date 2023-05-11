<template>
    <div class="wake">
        <img
            class="wake-img"
            src="~/assets/imgs/wake_ingot.png"
            alt="搜索结果为空图片"
        />
        <div class="content">
            <div class="title">暂无元宝明细</div>
            <div class="sub-title">“您当前没有元宝明细”</div>
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
    name: "WakeIngot",
};
</script>

<style lang="scss" scoped>
@import url(./common.scss);
</style>
