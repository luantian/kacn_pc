<template>
    <OrderWrap>
        <OrderDetailStatus :dataSource="dataSource"></OrderDetailStatus>
        <OrderRechargeInfo :dataSource="dataSource"></OrderRechargeInfo>
        <OrderKami :dataSource="dataSource.cards"></OrderKami>
        <OrderContentTable :dataSource="dataSource"></OrderContentTable>
        <Notice class="wrap"></Notice>
    </OrderWrap>
</template>

<script lang="ts" setup name="OrderDetail">
import { IOrder } from "~/service/Order/Interface";
import { Order } from "~/service/Order/Order";

definePageMeta({
    title: "订单详情",
});

const route = useRoute();
const id: string = route.params.id as string;

const order: Order = new Order();

const { data } = await order.queryItemById(id);

const dataSource: IOrder = data.value?.data;

const state = reactive({
    status: dataSource.status,
});
</script>

<style lang="scss" scoped>
.wrap {
    margin: 20px 0;
}
</style>
