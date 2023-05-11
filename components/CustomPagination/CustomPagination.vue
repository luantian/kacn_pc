<template>
    <el-pagination v-bind="attrs">
        <template v-for="(index, name) in $slots" :slot="name">
            <slot :name="name" />
        </template>
    </el-pagination>
</template>

<script lang="ts" setup name="CustomPagination">
const attrs = useAttrs();
</script>