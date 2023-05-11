<template>
    <div class="cost-details">
        <ul class="form-wrap">
            <li
                class="simple-form"
                v-for="(item, index) in relevantInfo[status]"
                :key="index"
            >
                <div class="title">{{ item.name }}：</div>
                <div class="value">{{ dataSource[item.key] }}</div>
            </li>
        </ul>
        <div class="details">
            <div class="item" v-for="(item, index) in payDetails" :key="index">
                <span class="name">{{ item.name }}</span>
                <Price :value="dataSource[item.key]"></Price>
            </div>
            <el-divider></el-divider>
            <div class="item margin-top10">
                <span class="should-pay">应付款</span>
                <Price type="warning" :value="dataSource['shouldPayment']"></Price>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="OrderCostDetails">
import { IOrder } from "~/service/Order/Interface";

interface IProps {
    status?: number;
    dataSource: IOrder;
}

const props = withDefaults(defineProps<IProps>(), {
    status: 0,
});

interface IDetail {
    name: string;
    key: string;
}

const relevantInfo: IDetail[][] = [
    [{ name: "我的留言", key: "remark" }],
    [
        { name: "付款方式", key: "payWay" },
        { name: "付款时间", key: "payTime" },
        { name: "我的留言", key: "remark" },
    ],
];

const payDetails: IDetail[] = [
    { name: "商品总价", key: "totalPrice" },
    { name: "手续费", key: "serviceChargePrice" },
    { name: "会员等级", key: "vip_level" },
    { name: "余额", key: "balance" },
    { name: "优惠券", key: "coupon" },
    { name: "元宝", key: "ingot" },
];
</script>

<style lang="scss" scoped>
.cost-details {
    display: flex;
    background-color: $cf5f;
    padding: 16px 20px;
    .form-wrap {
        flex: 1;
    }
    .simple-form {
        display: flex;
        margin-bottom: 10px;
        .title {
            font-size: 12px;
            color: $c999;
            line-height: 1.7;
        }
        .value {
            flex: 1;
            line-height: 1.5;
        }
    }
    .details {
        min-width: 300px;
        margin-left: 120px;
        .item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            .name {
                color: $c999;
            }
            .price {
                color: $c333;
            }

            .should-pay {
                font-weight: bold;
            }

            .total-price {
                font-weight: bold;
                font-size: 18px;
                color: $cf23;
            }
        }
    }
    .margin-top10 {
        margin-top: 10px;
    }
}
</style>
