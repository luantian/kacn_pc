<template>
    <div class="disclaimer">
        <div class="radio-wrap">
            <div class="radio" @click="onClickRadio">
                <div v-show="!state.radio" class="radio-icon"></div>
                <div v-show="state.radio" class="iconfont icon-xuanzhong"></div>
                <div class="radio-label">我已阅读并同意</div>
            </div>
            <CustomNuxtLink type="link" to="/">《用户协议》</CustomNuxtLink>
            <CustomNuxtLink type="link" to="/">《隐私协议》</CustomNuxtLink>
            <CustomNuxtLink type="link" to="/">《免责声明》</CustomNuxtLink>
        </div>
    </div>
    <CustomDialogConfirm
        width="380px"
        v-model="state.visible"
        @cancel="close"
        @confirm="onConfrim"
    >
        <template #header>请阅读并同意协议</template>
        <template #text>
            <div class="dialog-text">
                我已阅读并同意
                <CustomNuxtLink type="link" to="/">《用户协议》</CustomNuxtLink>
                <CustomNuxtLink type="link" to="/">《隐私协议》</CustomNuxtLink>
                <CustomNuxtLink type="link" to="/">《免责声明》</CustomNuxtLink>
            </div>
        </template>
    </CustomDialogConfirm>
</template>

<script lang="ts" setup name="Disclaimer">
// interface Props {
//     value?: boolean;
// }
// const props = withDefaults(defineProps<Props>(), {
//     value: false,
// });

const state = reactive({
    radio: false,
    visible: false,
});

const onClickRadio = () => {
    state.radio = !state.radio;
};

const open = () => {
    state.visible = true;
};
const close = () => {
    state.visible = false;
};
const onConfrim = () => {
    close();
    state.radio = true;
};

const getStateRadio = () => state.radio;

defineExpose({ open, close, getStateRadio });
</script>

<style lang="scss" scoped>
.radio-wrap {
    display: flex;
    font-size: 14px;
    .radio {
        display: flex;
        cursor: pointer;
    }
    .radio-icon {
        width: 16px;
        height: 16px;
        border: 1px solid $cdee;
        border-radius: 50%;
        box-sizing: border-box;
    }
    .icon-xuanzhong {
        width: 16px;
        height: 16px;
        color: $c3b8;
    }
    .radio-label {
        cursor: pointer;
        text-indent: 2px;
    }
}

.dialog-text {
    font-size: 16px;
    line-height: 26px;
    span {
        color: $c3b8;
    }
}
</style>
