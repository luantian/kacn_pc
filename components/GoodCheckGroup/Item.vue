<template>
    <div
        class="good-check"
        :class="{ active: isChecked}"
        @click="onSelect"
    >
        <div class="order-id">订单编号: {{ dataSource.orderId }}</div>
        <div class="order-content">
            <div class="check-btn">
                <div class="radio">
                    <div
                        v-show="isChecked"
                        class="iconfont icon-xuanzhong"
                    ></div>
                    <div
                        v-show="!isChecked"
                        class="radio-icon"
                    ></div>
                </div>
            </div>
            <div class="img">
                <img :src="queryProduct(dataSource).imgUrl" alt="产品图片" />
            </div>
            <div class="content">
                <div class="product-name">
                    {{ queryProduct(dataSource).name }}
                </div>
                <div class="price">
                    <Price value={dataSource.shouldPayment}></Price>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "GoodCheckGroup",
    props: {
        // 订单信息
        dataSource: {
            type: Object,
        },
        isChecked: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {

        };
    },
    methods: {
        queryProduct(order) {
            if (order.goods.length > 0) {
                return order.goods[0];
            }
            return order.cards[0];
        },
        onSelect(item) {
            this.$emit('select', item);
        }
    },
};
</script>

<style lang="scss" scoped>
.good-check-group {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    justify-content: space-between;
}
.good-check {
    width: 330px;
    border-radius: 10px;
    border: 1px solid $cdee;
    background: $cfff;
    transition: 0.2s;
    cursor: pointer;
    margin-bottom: 20px;
    &.active {
        border: 1px solid $c3b8;
    }
    &:hover {
        box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.08);
    }
    .radio {
        display: flex;
        cursor: pointer;
    }
    .radio-icon {
        width: 16px;
        height: 16px;
        border: 1px solid $cdee;
        border-radius: 50%;
        box-sizing: border-box;
    }
    .icon-xuanzhong {
        width: 16px;
        height: 16px;
        color: $c3b8;
    }
    .radio-label {
        cursor: pointer;
        text-indent: 2px;
    }

    .order-id {
        border-bottom: 1px solid $cdee;
        font-size: 12px;
        color: $c666;
        padding: 10px 15px;
    }

    .order-content {
        display: flex;
        padding: 15px;
    }

    .check-btn {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .img {
        margin: 0 15px;
        img {
            display: block;
            width: 70px;
            height: 70px;
            border-radius: 10px;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .product-name {
            font-size: 16px;
            color: $c333;
            padding: 7px 0;
        }
        .price {
            font-size: 14px;
            color: $c333;
            padding: 7px 0;
            font-weight: bold;
        }
    }
}
</style>
