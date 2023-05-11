<template>
    <el-table-column v-bind="attrs">
        <template v-for="(index, name) in $slots">
            <slot :name="name" />
        </template>
    </el-table-column>
</template>

<script lang="ts" setup name="CustomTable">

const attrs = useAttrs();

</script>

