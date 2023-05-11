<template>
    <div class="notice">
        <div class="title">注意事项</div>
        <ul class="content">
            <li
                class="content-item"
                v-for="(item, index) in state.dataSource"
                :key="index"
            >
                <span class="index">{{ index + 1 }}、</span>{{ item }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="Notice">
const state = reactive({
    dataSource: [
        "确填帐号区服（非游戏昵称）避免帐号填写错误充值成功后无法修正。",
        "自动充值订单在付款完成后，系统将在1到3分钟内充值到账。",
        "如5分钟内没有收到相关充值，请重新登录游戏。",
        "游戏中未收到可联系人工客服帮您处理。",
    ],
});
</script>

<style lang="scss" scoped>
.notice {
    border: 1px solid $cdee;
    border-radius: 10px;
    padding: 20px 40px;
    overflow: hidden;
    background-color: $cf5f;
    .title {
        font-size: 16px;
        font-weight: bold;
        color: #333333;
        margin-bottom: 15px;
    }

    .content {
        line-height: 1.5;
    }
    .content-item {
        color: $c666;
        .index {
            display: inline-block;
            width: 20px;
            // text-align: right;
        }
    }
}
</style>
