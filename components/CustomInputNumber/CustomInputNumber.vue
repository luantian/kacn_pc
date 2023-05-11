<template>
    <el-input-number v-bind="attrs" />
</template>

<script lang="ts" setup name="CustomInputNumber">

const attrs = useAttrs()

</script>

<style lang="scss" scoped>

:deep(.el-input-number__increase),
:deep(.el-input-number__decrease)
{
    border: none;
    background: transparent !important;
}

:deep(.el-input__wrapper) {
    border-radius: 25px;
    font-size: 18px;
    color: $c333;
}

</style>