<template>
    <div class="good-check-group">
        <GoodCheckGroupItem
            class="good-check"
            v-for="(item, index) in dataSource"
            :isChecked="tempValue.includes(item.orderId)"
            :dataSource="item"
            :key="index"
            @select="onClickRadio(item)"
        ></GoodCheckGroupItem>
    </div>
</template>

<script>
export default {
    name: "GoodCheckGroup",
    props: {
        // 订单信息
        dataSource: {
            type: Array,
        },
        value: {
            type: Array,
            default: () => [],
        },
    },
    model: {
        prop: "value",
        event: "change",
    },
    data() {
        return {
            tempValue: this.value,
        };
    },
    mounted() {

    },
    methods: {
        queryProduct(order) {
            if (order.goods.length > 0) {
                return order.goods[0];
            }
            return order.cards[0];
        },
        onClickRadio(item) {
            const { orderId } = item;
            if (!this.tempValue.includes(orderId)) {
                this.tempValue.push(orderId);
            } else {
                const index = this.tempValue.indexOf(orderId);
                this.tempValue.splice(index, 1);
            }
            this.$emit("change", this.tempValue);
        },
    },
    // watch: {
    //     tempValue(newVal) {
    //         console.log('newVal', newVal);
    //     }
    // }
};
</script>

<style lang="scss" scoped>
.good-check-group {
    display: flex;
    flex-wrap: wrap;
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
