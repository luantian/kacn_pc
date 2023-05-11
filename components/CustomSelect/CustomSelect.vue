<template>
    <el-select :class="[type, { round, noborder }]" v-bind="attrs" no-data-text=" " suffix-icon="ArrowDownBold">
        <!-- <template v-for="(index, name) in $slots" :slot="name">
            <slot :name="name" />
        </template> -->
        <template v-for="(index, name) in $slots">
            <slot :name="name" />
        </template>
    </el-select>
</template>

<script lang="ts" setup>

const attrs = useAttrs();

const props = defineProps({
    type: {
        type: String
    },
    round: {
        type: Boolean,
    },
    noborder: {
        type: Boolean,
    },
    options: {
        type: Array,
        default: () => [],
    },
});

</script>

<style lang="scss" scoped>
.round {
    :deep(.el-input__wrapper),
    :deep(.el-input__wrapper.is-focus)  {
        // box-shadow: none !important;
        margin: 0;
        padding: 0;
        border-radius: 100px;
        background-color: $cf5f;
    }
    :deep(.el-input__inner) {
        // text-align: center;
        text-indent: 12px;
    }
    :deep(.el-select__caret) {
        color: #000;
        font-size: 11px;
        text-align: center;
        position: relative;
        left: -8px;
    }
}
.noborder {
    :deep(.el-input__inner) {
        padding: 0;
        border: none;
        box-shadow: none;
        // border-radius: 30px;
        // text-indent: 20px;
        font-size: 16px;
    }
    :deep(.el-input__wrapper),
    :deep(.el-input__wrapper.is-focus)  {
        box-shadow: none !important;
        margin: 0;
        padding: 0;
    }
    :deep(.el-input__wrapper) {
        margin: 0 20px !important;
    }
    :deep(.el-input.is-focus .el-input__inner) {
        box-shadow: none;
    }
    :deep(.el-input__suffix) {
        display: none;
    }
}

:deep(.el-input__inner) {
    color: $c333;
}


// :deep(.el-input__suffix) {
//     right: 2px;
// }
:deep(.el-select__caret.el-input__icon.el-icon-arrow-up) {
    color: $c333;
    font-weight: 900;
}

:deep(.el-select-dropdown__list) {
    padding: 6px;
}


// ::v-deep(.el-icon-arrow-up::before) {
//   content: '&#xe667;';
// }

// ::v-deep(.el-select-dropdown__item.selected) {
//     color: red;
// }
</style>
