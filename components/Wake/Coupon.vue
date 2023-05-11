<template>
    <div class="wake">
        <img
            class="wake-img"
            src="~/assets/imgs/wake_coupon.png"
            alt="评价列表为空图片"
        />
        <div class="content">
            <div class="title">暂无优惠券</div>
            <div class="sub-title">“就快要飘到你手里了”</div>
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
    name: "WakeCoupon",
};
</script>

<style lang="scss" scoped>
@import url(./common.scss);
</style>
