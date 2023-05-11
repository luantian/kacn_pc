<template>
    <el-form-item v-bind="attrs">
        <template v-for="(index, name) in $slots" :slot="name">
            <slot :name="name" />
        </template>
    </el-form-item>
</template>

<script lang="ts" setup>
    const attrs = useAttrs();
</script>

<style lang="scss" scoped>


:deep(.el-form-item__label) {
    padding-right: 20px;
    color: $c333;
}

:deep(.el-form-item__error),
:deep(.el-form-item.is-error .el-input__inner),
:deep(.el-form-item.is-error .el-input__inner:focus),
:deep(.el-form-item.is-error .el-textarea__inner),
:deep(.el-form-item.is-error .el-textarea__inner:focus)
{
    border-color: $cf23;
    color: $cf23;
    font-size: 14px;
}
</style>
