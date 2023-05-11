<template>
    <el-collapse-item v-bind="attrs">
        <template v-for="(index, name) in $slots">
            <slot :name="name" />
        </template>
    </el-collapse-item>
</template>

<script lang="ts" setup name="CustomCollapseItem">
    const attrs = useAttrs();
</script>

<style lang="scss" scoped>

</style>