<template>
    <div class="goods_pagination">
        <el-pagination v-bind="attrs">
            <template v-for="(index, name) in $slots" :slot="name">
                <slot :name="name" />
            </template>
        </el-pagination>
    </div>
</template>

<script lang="ts" setup name="CustomPaginationPosition">
const attrs = useAttrs();
</script>

<style lang="scss" scoped>
    .goods_pagination {
        position: absolute;
        bottom: 30px;
        right: 30px;
    }
</style>
