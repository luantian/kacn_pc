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
const status = route.params.status;

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

/*
export default {
    name: "Order",
    middleware: ['auth'],
    data() {
        return {
            active: this.$route.params.status || '100',
            tabsData: [
                { title: "全部订单", status: 100 },
                { title: "待付款", status: 0 },
                { title: "待发货", status: 1 },
                { title: "待收货", status: 2 },
                { title: "已完成", status: 3 },
                { title: "退款/售后", status: 4 },
            ],
            pagination: {
                page:  1,
                limit: 10,
                total: 1000,
            }
        };
    },
    async asyncData({$api}) {
        const { data } = await $api.order.list();
        return {
            dataSource: data.records,
            pagination: {
                page:  data.page,
                limit: data.limit,
                total: data.total,
            }
        }
    },
    mounted() {

    },
    methods: {
        async queryData() {
            const active = Number(this.active)
            const params = {
                page: this.pagination.page,
                limit: this.pagination.limit,
            }
            if (active !== 100) {
                params.status = active
            }
            console.log('params', params);
            const { data } = await this.$api.order.list(params);
            this.dataSource = data.records;
            this.pagination.page = data.page;
            this.pagination.limit = data.limit;
            this.pagination.total = data.total;
        },
        onTabClick(component) {
            // 模拟数据
            this.active = component.name
            this.queryData();
        },
        handleCurrentChange(value) {
            console.log('handleCurrentChange', value)
            this.pagination.page = value;
            this.queryData();
        },
        handleSizeChange(value) {
            console.log("handleSizeChange", value);
            this.pagination.limit = value;
            this.queryData();
        },
    },
};
*/
</script>

<style lang="scss" scoped>
.pagination-right {
    margin-top: 20px;
}
</style>
