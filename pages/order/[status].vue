<template>
    <OrderWrap>
        <CustomTabs v-model="state.status" @tab-click="onTabClick">
            <el-tab-pane
                v-for="(item, index) in state.tabsData"
                :key="index"
                :label="item.title"
                :name="String(item.status)"
                lazy
            >
            </el-tab-pane>
        </CustomTabs>
        <OrderList
            :dataSource="state.records"
            :status="state.status"
        ></OrderList>
        <CustomPaginationRight
            class="pagination-right"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="state.pagination.page"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="state.pagination.limit"
            layout="total, sizes, prev, pager, next"
            :total="state.pagination.total"
            background
        ></CustomPaginationRight>
    </OrderWrap>
</template>

<script lang="ts" setup name="PageOrderList">
import { OrderStatus } from "~/service/Order/Enums";
import { Order } from "~/service/Order/Order";

const route = useRoute();

const order: Order = new Order();
const status: OrderStatus = route.params.status || OrderStatus.All;

definePageMeta({
    title: "我的订单",
});

const { data } = await useAsyncData("queryOrderList", () => {
    return order.queryList(status);
});

const dataSource = data.value?.data.data;

const state = reactive({
    records: dataSource.records,
    status,
    tabsData: [
        { title: "全部订单", status: String(OrderStatus.All) },
        { title: "待付款", status: String(OrderStatus.AwaitPayment) },
        { title: "待发货", status: String(OrderStatus.AwaitSendGoods) },
        { title: "待收货", status: String(OrderStatus.AwaitReceipt) },
        { title: "已完成", status: String(OrderStatus.Completed) },
        { title: "退款/售后", status: String(OrderStatus.Refund) },
    ],
    pagination: {
        page: dataSource.page,
        limit: dataSource.limit,
        total: dataSource.total,
    },
});

const onTabClick = (component: any) => {
    console.log("paneName", component.paneName);
    state.status = component.paneName;
};

const handleSizeChange = (value: number) => {
    console.log("handleSizeChange", value);
};

const handleCurrentChange = async (value: number) => {
    console.log("handleCurrentChange", value);
};

</script>

<style lang="scss" scoped>
.pagination-right {
    margin-top: 20px;
}
</style>
