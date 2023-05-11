<template>
    <div class="wake">
        <img
            class="wake-img"
            src="~/assets/imgs/wake_feedback.png"
            alt="评价列表为空图片"
        />
        <div class="content">
            <div class="title">暂无账单地址</div>
            <div class="sub-title">“您当前还没有账单地址信息哦～”</div>
            <div class="btn">
                <CustomNuxtLink
                    size="small"
                    type="primary"
                    round
                    to="/"
                    >+添加新账单地址</CustomNuxtLink
                >
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "WakeBill",
};
</script>

<style lang="scss" scoped>
@import url(./common.scss);
</style>
