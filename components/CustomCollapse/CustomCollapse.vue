<template>
    <el-collapse v-bind="attrs">
        <template v-for="(index, name) in $slots">
            <slot :name="name" />
        </template>
    </el-collapse>
</template>

<script lang="ts" setup name="CustomCollapse">
    const attrs = useAttrs();
</script>