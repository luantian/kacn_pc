<template>
    <div class="order-opera-status">
        <div class="content">
            <div class="title" :style="{ color: titleColor }">
                {{ titleText }}
            </div>
            <div class="desc">{{ desc }}</div>
        </div>
        <div class="opera">
            <CustomButton
                v-for="(item, index) in state.OrderButtonTypes[status]"
                :key="index"
                class="opera-btn"
                :type="item.type"
                round
                @click="onOpera(item)"
            >
                {{ createOperaText(item) }}
            </CustomButton>
        </div>

        <!-- <div class="dialog-wrap">
            <OrderCancelDialog ref="CancelDialog"></OrderCancelDialog>
            <OrderAwaitReceiptDialog
                ref="AwaitReceiptDialog"
            ></OrderAwaitReceiptDialog>
            <OrderCancelAfterSaleDialog
                ref="CancelAfterSaleDialog"
            ></OrderCancelAfterSaleDialog>
        </div> -->
    </div>
</template>

<script lang="ts" setup>
import {
    OrderButtonTypes,
    OrderDescs,
    OrderTitles,
} from "~/service/Order/Const";
import { IOrder, IOrderOperaButton } from "~/service/Order/Interface";
import { OrderStatus, OrderOperaFnName } from "~/service/Order/Enums";
import { Order } from "~/service/Order/Order";

const separator = "or";

interface IProps {
    dataSource: IOrder;
    comment?: number;
}

const props = withDefaults(defineProps<IProps>(), {
    comment: 0,
});
const state = reactive({
    separator,
    OrderButtonTypes,
});

const order: Order = new Order();

console.log("OrderButtonTypes", OrderButtonTypes);
const status: OrderStatus = props.dataSource.status;
const titleText: string = OrderTitles[status].value;
const titleColor: string = OrderTitles[status].color;
const desc: string = OrderDescs[status]();

const createOperaText = (item: IOrderOperaButton): OrderOperaFnName => {
    const label =
        item.label.indexOf(state.separator) > -1
            ? item.label.split(state.separator)[props.comment]
            : item.label;
    return label as OrderOperaFnName;
};
const onOpera = (item: IOrderOperaButton): void => {
    const label: OrderOperaFnName = createOperaText(item);
    const fnName: string = OrderOperaFnName[label] as string;
    console.log("fnName", fnName);
};
</script>

<style lang="scss" scoped>
.order-opera-status {
    display: flex;
    border: 1px solid $cdee;
    border-radius: 10px;
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
}

.content {
    .title {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .desc {
        color: $c333;
    }
}

.opera-btn {
    width: 120px;
    margin-right: 20px;
    font-size: 14px;
}

.dialog-wrap {
    position: absolute;
    top: 0;
    left: 0;
}
</style>
