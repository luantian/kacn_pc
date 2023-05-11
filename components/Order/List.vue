<template>
    <div class="list">
        <div class="order-list">
            <div
                class="order-item"
                v-for="(item, index) in dataSource"
                :key="index"
            >
                <div class="order-header">
                    <div class="time">
                        <Time>{{ item.time }}</Time>
                    </div>
                    <div class="order-id">
                        订单编号:
                        <CustomNuxtLink class="order-id-text" to="/">{{
                            item.orderId
                        }}</CustomNuxtLink>
                    </div>
                </div>
                <div class="order-content">
                    <div class="goods-wrap">
                        <div
                            class="order-goods"
                            v-for="(good, index) in item.goods.concat(
                                item.cards
                            )"
                            :key="index"
                        >
                            <div class="goods-img">
                                <img :src="good.imgUrl" />
                            </div>
                            <div class="goods-info">
                                <div class="goods-name">
                                    <CustomNuxtLink to="{itemTo}">
                                        {{ good.name }}
                                    </CustomNuxtLink>
                                </div>
                                <div class="goods-price">
                                    面值：{{ good.fv }}
                                </div>
                            </div>
                            <div class="goods-count">x {{ good.count }}</div>
                        </div>
                    </div>
                    <div class="info">
                        <div
                            class="info-status"
                            :class="createMarginTop(item.goods, item.cards)"
                            :style="createStatusStyle(item.status)"
                        >
                            {{ state.OrderTitles[item.status].value }}
                        </div>
                        <div
                            class="info-price"
                            :class="createMarginTop(item.goods, item.cards)"
                        >
                            <div>
                                <Price :value="item.totalPrice"></Price>
                            </div>
                            <div class="commission">
                                （含手续费：
                                <Price :value="item.commission"></Price>）
                            </div>
                        </div>
                    </div>
                    <div class="opera">
                        <div class="opera-button-wrap">
                            <CustomButton
                                class="opera-button"
                                round
                                :type="createButtonType(item.status)"
                            >
                                {{ createButtonText(item.status) }}
                            </CustomButton>
                        </div>
                        <CustomNuxtLink type="text" to="/">
                            订单详情
                        </CustomNuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <CustomDialogConfirm
            width="380px"
            @cancel="onCancel"
            @confirm="onConfirm"
            v-model="state.visible"
        >
            <template slot="title">asdf</template>
        </CustomDialogConfirm>
    </div>
</template>

<script lang="ts" setup name="OrderList">
import { OrderButtonTypes, OrderTitles } from "~/service/Order/Const";
import { OrderStatus } from "~/utils/enums/OrderEnum";
import { Order } from "~/service/Order/Order";
import { IOrder, IOrderButton } from "~/service/Order/Interface";
import { IGood } from "~/service/Good/Interface";
interface IProps {
    dataSource: IOrder[];
    status: OrderStatus;
}
const props = withDefaults(defineProps<IProps>(), {
    status: OrderStatus.All,
});

const order: Order = new Order();

const onPay = () => {
    order.pay();
};

const state = reactive({
    OrderButtonTypes,
    OrderTitles,
    visible: false,
});

const onCancel = () => {};

const onConfirm = () => {};

const createButtonText = (status: OrderStatus) => {
    const result = state.OrderButtonTypes[status].find(
        (item: IOrderButton) => item.type === "primary"
    );
    if (!result) return "空";
    return result.label;
};

const createButtonType = (status: OrderStatus) => {
    const result = state.OrderButtonTypes[status].find(
        (item: IOrderButton) => item.type === "primary"
    );
    if (!result) return undefined;
    return result.type;
};

const createStatusStyle = (status: OrderStatus) => ({
    color: OrderTitles[status].color,
});

const createMarginTop = (goods: IGood[], cards: IGood[]) => {
    const count = goods.length + cards.length;
    return count === 1 ? "len1" : "lenNo1";
};


/*
import { OrderStatus, OrderTitles, OrderButtonTypes, OrderOperaFuncs } from "@/utils/OrderConst";
import { OperaMixin } from './OperaMixin'
import { IOrder } from '../../.history/service/Order/Interface_20230506094906';
import { CustomPaginationRight } from '../../.nuxt/components';
export default {
    name: "OrderList",
    mixins: [OperaMixin],
    props: {
        dataSource: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {

        };
    },
    render() {
        const { $routerPath, dataSource } = this;
        if (dataSource.length === 0) {
            return <WakeOrder></WakeOrder>;
        }
        const listItems = dataSource.map((item) => {
            const goods = item.goods || [];
            const cards = item.cards || [];
            const products = cards.concat(goods);
            const Goods = products.map((good) => {
                const itemTo = `/goodsInfo/${good.goodId}`;
                return (
                    <div class="order-goods">
                        <div class="goods-img">
                            <img src={good.imgUrl} />
                        </div>
                        <div class="goods-info">
                            <div class="goods-name">
                                <CustomNuxtLink to={itemTo}>{good.name}</CustomNuxtLink>
                            </div>
                            <div class="goods-price">面值：{good.fv}</div>
                        </div>
                        <div class="goods-count">x {good.count}</div>
                    </div>
                );
            });

            const status = OrderStatus[item.status];
            const statusStyle = {
                color: OrderTitles[status].color,
            };
            const buttonText = OrderButtonTypes[status].find((it) => it.type === 'primary').label;
            const buttonType = OrderButtonTypes[status].find((it) => it.type === 'primary').listType;
            const orderGoodCount = products.length;
            const infoOtherClsName = orderGoodCount === 1 && "len1";
            const infoStatusOtherClsName =
                orderGoodCount === 1 ? "len1" : "lenNo1";
            const infoPriceOtherClsName =
                orderGoodCount === 1 ? "len1" : "lenNo1";

            const to = $routerPath.order.detail(item.orderId)

            return (
                <li class="order-item">
                    <div class="order-header">
                        <div class="time">
                            <Time>{item.time}</Time>
                        </div>
                        <div class="order-id">
                            订单编号: <CustomNuxtLink class="order-id-text" to={to}>{item.orderId}</CustomNuxtLink>
                        </div>
                    </div>
                    <div class="order-content">
                        <div class="goods-wrap">{Goods}</div>
                        <div class={"info " + infoOtherClsName}>
                            <div
                                class={"info-status " + infoStatusOtherClsName}
                                style={statusStyle}
                            >
                                {OrderTitles[status].value}
                            </div>
                            <div class={"info-price " + infoPriceOtherClsName}>
                                <div><Price value={ item.totalPirce }></Price></div>
                                <div class="commission">（含手续费：<Price value={ item.commission }></Price>）</div>
                            </div>
                        </div>
                        <div class="opera">
                            <div class="opera-button-wrap">
                                <CustomButton
                                    class="opera-button"
                                    type={buttonType}
                                    round
                                    size="mini"
                                    onclick={() => {
                                        this[OrderOperaFuncs[buttonText]](item, buttonText)
                                    }}
                                >
                                    { buttonText }
                                </CustomButton>
                            </div>
                            <CustomNuxtLink type="text" to={to}>
                                订单详情
                            </CustomNuxtLink>
                        </div>
                    </div>
                </li>
            );
        });

        return (
            <div>
                <ul class="order-list">{listItems}</ul>
                {
                    <CustomDialogConfirm
                        width="380px"
                        visible={this.visible}
                        on={{
                            cancel: () => {
                                onCancel()
                            },
                            confirm: () => {
                                onConfirm()
                            },
                            update: newVisible => this.visible = newVisible
                        }}
                    >
                        <template slot="title">asdf</template>
                    </CustomDialogConfirm>
                }
            </div>
        );
    },
    methods: {

    }
};
*/
</script>

<style lang="scss" scoped>
.order-list {
    .order-item {
        margin-top: 10px;
        border: 1px solid $cdee;
        border-radius: 10px;
        overflow: hidden;
    }
    .order-header {
        display: flex;
        height: 40px;
        line-height: 40px;
        background-color: $cf5f;
        border-bottom: 1px solid $cdee;
        .time,
        .order-id {
            font-size: 12px;
            color: $c333;
            padding-left: 20px;
            &-text {
                font-size: 12px;
            }
        }
    }

    .order-goods {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        .goods-img {
            width: 70px;
            height: 70px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 10px;
            }
        }

        .goods-info {
            .goods-name {
                padding: 10px;
                width: 230px;
                box-sizing: border-box;
                color: $c333;
                // .ellipsis();
            }
            .goods-price {
                padding: 8px 10px;
                color: $c666;
            }
        }

        .goods-count {
            width: 50px;
            justify-content: center;
            margin-left: 60px;
        }
    }

    .order-content {
        display: flex;
        .goods-wrap {
            flex: 9;
            min-width: 450px;
            padding: 10px 0;
            border-right: 1px solid $cdee;
        }

        .info {
            display: flex;
            flex: 7;
            min-width: 330px;
            border-right: 1px solid $cdee;
            &.len1 {
                justify-content: center;
                align-items: center;
            }
            .info-status {
                flex: 13;
                text-align: center;
                &.len1 {
                    justify-content: center;
                    align-items: center;
                }
                &.lenNo1 {
                    padding-top: 46px;
                }
            }
            .info-price {
                flex: 22;
                text-align: center;
                &.len1 {
                    justify-content: center;
                    align-items: center;
                }
                &.lenNo1 {
                    padding-top: 34px;
                }
                .commission {
                    font-size: 12px;
                    color: $c666;
                    margin-top: 4px;
                }
            }
        }
        .opera {
            flex: 4;
            min-width: 200px;
            text-align: center;
            .opera-button-wrap {
                .opera-button {
                    width: 100px;
                }
                margin-top: 32px;
                // margin-bottom: 16px;
            }
        }
    }
}
</style>
