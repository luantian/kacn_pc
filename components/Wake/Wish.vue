<template>
    <div class="wake">
        <img
            class="wake-img"
            src="~/assets/imgs/wake_wish.png"
            alt="心愿单为空图片"
        />
        <div class="content">
            <div class="title">还没有相关订单哦～</div>
            <div class="sub-title">“给自己定义个小目标，先下一单”</div>
            <div class="btn">
                <CustomNuxtLink
                    class="custom-button"
                    size="small"
                    type="primary"
                    round
                    to="/"
                    >去逛逛</CustomNuxtLink
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "WakeWish",
};
</script>

<style lang="scss" scoped>
@import url(./common.scss);
</style>
