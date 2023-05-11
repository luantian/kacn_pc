<template>
    <div class="recharge-info">
        <h4 class="title"></h4>
        <div class="content"></div>
    </div>
</template>

<script lang="ts" setup name="RechargeInfo">
import { IOrder } from "~/service/Order/Interface";

interface IProps {
    dataSource: IOrder;
}

const props = withDefaults(defineProps<IProps>(), {});
</script>

<style lang="scss" scoped>
.recharge-info {
    border: 1px solid $cdee;
    border-radius: 10px;
    padding: 13px 20px;
    overflow: hidden;
}
.title {
    font-size: 16px;
    font-weight: bold;
    color: $c333;
    margin-bottom: 15px;
}

.label {
    color: $c999;
    padding-right: 20px;
    line-height: 1.5;
}
.value {
    color: $c333;
    line-height: 1.5;
}

.new-line {
    display: flex;
    margin-top: 10px;
    .label {
        min-width: 74px;
        padding-right: 0;
    }
    .value {
        flex: 1;
    }
}
</style>
