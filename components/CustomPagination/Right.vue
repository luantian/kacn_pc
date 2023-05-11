<template>
    <div class="right-pagination">
        <el-pagination v-bind="attrs">
            <template v-for="(index, name) in $slots" :slot="name">
                <slot :name="name" />
            </template>
        </el-pagination>
    </div>
</template>

<script lang="ts" setup name="CustomPaginationRight">
    const attrs = useAttrs();
</script>

<style lang="scss" scoped>
    .right-pagination {
        display: flex;
        justify-content: flex-end;
    }
</style>
