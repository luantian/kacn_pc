<template>
    <el-form v-bind="attrs">
        <template v-for="(index, name) in $slots">
            <slot :name="name" />
        </template>
    </el-form>
</template>

<script lang="ts" setup name="CustomTable">
const attrs = useAttrs();
</script>

<style lang="scss" scoped>
:deep(.el-table__header-wrapper) {
    border-radius: 6px;
}

:deep(.el-table th.el-table__cell) {
    background: transparent;
}

:deep(.header-row) {
    height: 50px;
    background-color: $cf5f;
    border-radius: 6px;
}

:deep(.header-row .el-table__cell) {
    color: $c333;
    font-weight: normal;
}

:deep(.body-row) {
    height: 50px;
}

:deep(.body-row .el-table__cell) {
    height: 50px;
    font-weight: normal !important;
}
</style>
