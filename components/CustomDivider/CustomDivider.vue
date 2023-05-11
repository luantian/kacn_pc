<template>
    <el-divider v-bind="attrs">
        <template v-for="(index, name) in $slots" :slot="name">
            <slot :name="name"/>
        </template>
    </el-divider>
</template>

<script lang="ts" setup name="CustomDivider">
const attrs = useAttrs();
</script>

<style lang="scss" scoped>
:deep(.el-divider__text) {
    color: $c999;
}
</style>
