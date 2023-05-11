<template>
    <el-dialog
        :class="{
            __custom_dialog_border: border,
            __custom_dialog_header_hidden: header_hidden,
            __custom_dialog_header_height_56: header_height_56,
            __custom_dialog_transparent: transparent,
        }"
        class="__custom_dialog"
        v-bind="attrs"
    >
        <template v-for="(index, name) in $slots">
            <slot :name="name" />
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
const attrs = useAttrs();

const props = defineProps({
    border: {
        type: Boolean,
    },
    header_hidden: {
        type: Boolean,
    },
    header_height_56: {
        type: Boolean,
    },
    transparent: {
        type: Boolean,
    },
});
</script>

<style lang="scss">
.__custom_dialog_border {
    :deep(.el-dialog__header) {
        border-bottom: 1px solid $cdee;
    }
    :deep(.el-dialog__footer) {
        border-top: 1px solid $cdee;
    }
}

.__custom_dialog_header_hidden {
    .el-dialog__header {
        display: none;
    }
    :deep(.el-dialog) {
        box-shadow: none;
    }
    :deep(.el-dialog__header) {
        display: none;
    }
}

.__custom_dialog_header_height_56 {
    :deep(.el-dialog__header) {
        padding: 0;
        height: 56px;
        line-height: 56px;
        text-indent: 20px;
        box-sizing: border-box;
        font-weight: bold;
    }
}

.__custom_dialog_transparent {
    background-color: transparent;
}

.__custom_dialog {
    border-radius: $borderRadius;
    .el-dialog__header {
        padding: 0;
        height: 50px;
        line-height: 50px;
        text-indent: 20px;
    }
    .el-dialog__title {
        font-size: 16px;
        color: $c333;
        font-weight: bold;
    }
    .el-dialog__body {
        padding: 0;
    }
    .el-dialog__footer {
        padding: 0 20px 0 0;
        height: 64px;
        line-height: 64px;
    }
    .el-dialog__headerbtn {
        font-size: 20px;
    }
    .el-dialog__headerbtn .el-dialog__close {
        color: $c999;
    }
    .el-dialog__headerbtn:hover .el-dialog__close {
        color: $c333;
    }
}

</style>
