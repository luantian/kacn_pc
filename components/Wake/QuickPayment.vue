<template>
    <div class="wake">
        <img
            class="wake-img"
            src="~/assets/imgs/wake_quick_payment.png"
            alt="搜索结果为空图片"
        />
        <div class="content">
            <div class="title">暂无快捷支付</div>
            <div class="sub-title">“您当前还没有快捷支付信息哦～”</div>
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
    name: "WakeQuickPayment",
};
</script>

<style lang="scss" scoped>
@import url(./common.scss);
</style>
