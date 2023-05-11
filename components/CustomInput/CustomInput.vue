<template>
    <el-input :class="{ noborder }" v-bind="attrs">
        <template
            v-for="(item, name, index) in $slots"
            :key="index"
            v-slot:[name]
        >
            <slot :name="name"></slot>
        </template>
    </el-input>
</template>

<script lang="ts" setup name="CustomInput">
const attrs = useAttrs();

interface IProps {
    noborder?: boolean;
}
const props = withDefaults(defineProps<IProps>(), {});
</script>

<style lang="scss" scoped>
.noborder {
    :deep(.el-input__inner) {
        padding: 0;
        border: none;
    }
}

:deep(.el-input__inner),
:deep(.el-textarea__inner) {
    color: $c333;
    // border: 1px solid $cdee;
    border-radius: 6px;
    box-shadow: none;
    &:hover {
        box-shadow: none;
    }
}
:deep(.el-textarea__inner) {
    height: 80px;
}

:deep(.el-input__count) {
    color: $c333;
    line-height: 1.5;
}

:deep(.el-input__inner::placeholder),
:deep(.el-textarea__inner::placeholder) {
    color: $c999;
}

:deep(.el-input__inner) {
    box-shadow: none;
}
</style>
