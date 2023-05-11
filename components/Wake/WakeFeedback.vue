<template>
    <div class="wake">
        <img
            class="wake-img"
            src="~/assets/imgs/wake_feedback.png"
            alt="评价列表为空图片"
        />
        <div class="content">
            <div class="title">您目前没有提交任何反馈，您可以</div>
            <div class="btn">
                <CustomNuxtLink
                    class="custom-button"
                    size="small"
                    type="primary"
                    round
                    to="/"
                    >填写反馈</CustomNuxtLink
                >
                <CustomNuxtLink
                    class="custom-button"
                    size="small"
                    type="button"
                    plain
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
    name: "WakeFeedback",
};
</script>

<style lang="scss" scoped>
@import url(./common.scss);
</style>
