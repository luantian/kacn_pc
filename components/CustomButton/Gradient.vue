<template>
    <el-button v-bind="attrs" class="normal-size immediately-recharge">
        <template v-for="(index, name) in $slots">
            <slot :name="name" />
        </template>
    </el-button>
</template>

<script lang="ts" setup name="GradientButton">
const attrs = useAttrs();
</script>

<style lang="scss" scoped>
.immediately-recharge {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    border-radius: 25px;
    text-align: center;
    box-shadow: 0 6px 10px 0 rgba(0, 107, 255, 0.4);
    background: linear-gradient(270deg, #249bff, #2b6aff);
    font-weight: 700;
    color: $cfff;
    cursor: pointer;
    &:hover {
        background: linear-gradient(
            270deg,
            rgba(36, 155, 255, 0.8),
            rgba(43, 106, 255, 0.8)
        );
    }
}
</style>
