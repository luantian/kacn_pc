<template>
    <div class="wake">
        <img
            class="wake-img"
            src="~/assets/imgs/wake_comment.png"
            alt="评价列表为空图片"
        />
        <div class="content">
            <div class="title">暂时还没有评价哦~</div>
            <!-- <div class="sub-title">“给自己定义个小目标，先下一单”</div> -->
            <div class="btn" v-show="isHide">
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
    name: "WakeComment",
    props: {
        isHide: {
            type: Boolean,
            default: true
        }
    },
};
</script>

<style lang="scss" scoped>
@import url(./common.scss);
</style>
