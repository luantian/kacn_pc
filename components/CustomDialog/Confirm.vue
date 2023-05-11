<template>
    <el-dialog v-bind="attrs">
        <div class="dialog-content">
            <div class="dialog-content-title">
                <slot name="title"></slot>
            </div>
            <div>
                <slot name="text"></slot>
            </div>
        </div>
        <div slot="footer" class="dialog-footer">
            <CustomButton
                class="cancel-button"
                @click="onCancel"
                >{{ cancelText }}</CustomButton
            >
            <CustomButton
                type="primary"
                class="confirm-button"
                @click="onConfrim"
                >{{ confirmText }}</CustomButton
            >
        </div>
    </el-dialog>
</template>

<script lang="ts" setup name="CustomDialogConfirm">
const attrs = useAttrs();
const emits = defineEmits(["cancel", "confirm"]);

interface IProps {
    cancelText?: string;
    confirmText?: string
}

const props = withDefaults(defineProps<IProps>(), {
    cancelText: "我再想想",
    confirmText: "同意"
})

const onCancel = () => {
    emits("cancel");
};

const onConfrim = () => {
    emits("confirm");
};
</script>

<style lang="scss" scoped>
.dialog-content {
    padding: 0 30px;
    text-align: center;
    &-title {
        font-size: 22px;
        font-weight: bold;
        color: $c333;
        margin-bottom: 20px;
    }
}
.dialog-footer {
    text-align: center;
    padding-top: 30px;
    .cancel-button,
    .confirm-button {
        width: 150px;
        height: 40px;
        border-radius: 100px;
    }
}
</style>
