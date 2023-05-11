<template>
    <div class="order-content">
        <div class="order-header">
            <div class="order-id">
                订单编号：<span>{{ dataSource.orderId }}</span>
            </div>
            <div class="time">
                下单时间：<Time>{{ dataSource.time }}</Time>
            </div>
            <div class="time">
                支付方式：<span>{{ dataSource.payWay }}</span>
            </div>
        </div>
        <div class="table-wrap">
            <el-table :data="tableData">
                <el-table-column label="商品详情" width="400">
                    <template #default="{ row }">
                        <div class="good">
                            <img :src="row.imgUrl" alt="商品图片" />
                            <div class="good-name ellipsis">
                                <CustomNuxtLink to="/">{{
                                    row.name
                                }}</CustomNuxtLink>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="面值">
                    <template #default="{ row }"> {{ row.fv }}元 </template>
                </el-table-column>
                <el-table-column prop="count" label="数量"></el-table-column>
                <el-table-column prop="price" label="单价">
                    <template #default="{ row }">
                        <Price :value="row.price"></Price>
                    </template>
                </el-table-column>
            </el-table>
            <OrderCostDetails :dataSource="dataSource"></OrderCostDetails>
        </div>
    </div>
</template>

<script lang="ts" setup name="OrderContentTable">
import { IOrder } from "~/service/Order/Interface";

interface IProps {
    dataSource: IOrder;
}

const props = withDefaults(defineProps<IProps>(), {});

const tableData = computed(() => {
    const { dataSource } = props;
    return dataSource.goods.length === 0 ? dataSource.goods : dataSource.cards;
});

/*
export default {
    name: "OrderContent",
    props: {
        dataSource: {
            type: Object,
            default: () => {
                return {
                    orderId: "3e9B1974-B3F4-1fd4-5BeB-4f2dA5250Adc",
                    time: 1677734877,
                    totalPirce: 655.74,
                    commission: 324.17,
                    status: 4,
                    buyWay: 0,
                    goods: [
                        {
                            name: "到断去京",
                            imgUrl: "http://dummyimage.com/250x250",
                            price: 580.35,
                            productType: 1,
                            fv: 220.58,
                            EXPDate: 1677734877,
                            goodId: "7a8cdBe9-20C7-3Db2-7b3c-E1B4AE59dBc6",
                        },
                        {
                            name: "党色准",
                            imgUrl: "http://dummyimage.com/240x400",
                            price: 907.87,
                            productType: 1,
                            fv: 255.39,
                            EXPDate: 1677734877,
                            goodId: "8F7eFbD8-8A09-9900-D7Fb-Ecb6917eB848",
                        },
                    ],
                    cards: [
                        {
                            cardId: "b4C885db-8689-C3e8-2dA1-DD1Ece9CAfF8",
                            cardPassword:
                                "24bA7B8d-7D3e-A9C2-67a5-21127608fE72",
                            fv: 677.53,
                            EXPDate: "1677734877",
                        },
                        {
                            cardId: "4cBBbfEE-c1dF-48Fa-bA3f-AD6EfB0fcAC9",
                            cardPassword:
                                "Dd76Dc82-B4AC-71C5-f6b3-E7aBFA49DaAD",
                            fv: 493.74,
                            EXPDate: "1677734877",
                        },
                        {
                            cardId: "8583Fe4D-75F6-74Db-eB5B-C8dDD7ED33BF",
                            cardPassword:
                                "E8e2F7Df-f8Ae-9C8d-BbC0-544B6b6bcEAB",
                            fv: 812.58,
                            EXPDate: "1677734877",
                        },
                    ],
                };
            },
        },
    },
    data() {
        return {};
    },
    computed: {
        tableData() {
            const { dataSource } = this
            return dataSource.goods.length === 0 ? dataSource.goods : dataSource.cards;
        }
    }
};
*/
</script>

<style lang="scss" scoped>
.order-content {
    border: 1px solid $cdee;
    border-radius: 10px;
    overflow: hidden;
    padding-bottom: 20px;
    .order-header {
        display: flex;
        height: 40px;
        line-height: 40px;
        background-color: $cf5f;
        border-bottom: 1px solid $cdee;
        .time,
        .order-id {
            color: $c999;
            padding-left: 20px;
            > span {
                color: $c333;
            }
        }
    }
    .table-wrap {
        padding: 0 20px;
    }

    .good {
        display: flex;
        align-items: center;
        img {
            width: 60px;
            height: 60px;
            border-radius: 10px;
        }
        .good-name {
            margin-left: 20px;
            // .ellipsis();
        }
    }
}

::v-deep(.el-table::before) {
    background-color: $cdee;
}

::v-deep(.el-table thead) {
    font-size: 12px;
    color: $c333;
}

::v-deep(.el-table td.el-table__cell),
::v-deep(.el-table th.el-table__cell.is-leaf) {
    border-bottom: 1px solid $cdee;
}
</style>
