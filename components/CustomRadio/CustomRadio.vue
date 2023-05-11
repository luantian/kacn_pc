<template>
    <el-radio v-bind="$attrs" v-on="$listeners">
        <template v-for="(index, name) in $slots" :slot="name">
            <slot :name="name" />
        </template>
    </el-radio>
</template>

<style lang="scss" scoped>
    .el-radio__inner {
        box-shadow: none;
    }
</style>
