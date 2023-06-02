<template>
    <el-radio v-bind="attrs">
        <template v-for="(index, name) in $slots" :slot="name">
            <slot :name="name" />
        </template>
    </el-radio>
</template>

<script lang="ts" setup name="CustomRadio">
const attrs = useAttrs();
</script>

<style lang="scss" scoped>
    .el-radio__inner {
        box-shadow: none;
    }
</style>
