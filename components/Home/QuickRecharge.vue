<template>
    <!-- 快速充值 -->
    <div class="quick-recharge">
        <div class="tabs">
            <div
                class="tab"
                :class="{ active: state.tabActive === index }"
                v-for="(tab, index) in state.tabs"
                :key="index"
                @click="onTabActive(index)"
            >
                {{ tab.title }}
            </div>
        </div>
        <div class="content">
            <img class="good-img" :src="Demo2" alt="" />
            <div class="good-desc">
                <div>
                    <span class="good-desc-title">商品总价：</span>
                    <Price class="total-price" :value="3999" />
                    <img
                        class="new-person-price"
                        :src="NewPersonPrice"
                        alt=""
                    />
                    <span class="normal-vip">普通会员：</span>
                    <Price class="normal-price" :value="100" />
                </div>
                <div class="prices-wrap">
                    <div
                        class="price-item"
                        :class="{ active: state.priceActive === index }"
                        v-for="(price, index) in state.prices"
                        :key="index"
                        @click="onPriceActive(index)"
                    >
                        {{ price.value }}
                        <div class="sign" v-if="price.isSign">直降</div>
                    </div>
                </div>
            </div>
            <div class="vertical-line"></div>
            <div class="good-input">
                <CustomInputNumber
                    class="immediately-recharge-count"
                    v-model="state.rechargeCount"
                    :min="1"
                ></CustomInputNumber>
                <div class="immediately-recharge">立即充值</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="QuickRecharge">
import Demo2 from "~/assets/imgs/demo2.png";
import NewPersonPrice from "~/assets/imgs/new_price.png";

const state = reactive({
    tabs: [
        { title: "原神" },
        { title: "抖音" },
        { title: "苹果" },
        { title: "PSN" },
        { title: "酷秀短视频" },
    ],
    tabActive: 0,
    priceActive: 0,
    rechargeCount: 1,
    prices: [
        { value: 500, isSign: false },
        { value: 600, isSign: false },
        { value: 700, isSign: false },
        { value: 800, isSign: true },
        { value: 900, isSign: false },
    ],
});

const onTabActive = (index: number) => {
    state.tabActive = index;
};

const onPriceActive = (index: number) => {
    state.priceActive = index;
};
</script>

<style lang="scss" scoped>
.tabs {
    display: flex;
    font-size: 16px;
}
.tab {
    width: 100px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background: hsla(0, 0%, 100%, 0.7);
    border-radius: 15px 15px 0px 0px;
    cursor: pointer;
    margin-right: 5px;
    &:hover {
        background: $cfff;
    }
    &.active {
        color: $c333;
        font-weight: bold;
        background: $cfff;
    }
}

.content {
    background: $cfff;
    padding: 35px 30px;
    display: flex;
    border-radius: 0 15px 15px 15px;
    .good-img {
        display: block;
        width: 110px;
        height: 110px;
        border-radius: 20px;
        margin-right: 20px;
    }
}

.good-desc {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
}

.good-desc-title {
    color: $c333;
    font-size: 16px;
    font-weight: bold;
}
.total-price {
    color: $cf23;
    font-size: 22px;
    font-weight: bold;
}
.new-person-price {
    width: 48px;
}
.normal-vip,
.normal-price {
    color: $c999;
    font-size: 14px;
}

.normal-vip {
    padding-left: 10px;
}

.good-input {
    margin-left: 45px;
}

.prices-wrap {
    display: flex;
    font-size: 16px;
    .price-item {
        position: relative;
        width: 110px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        border-radius: 20px;
        border: 1px solid $cdee;
        margin-right: 10px;
        cursor: pointer;
        &.active {
            border-color: $c3b8;
            box-shadow: 0 6px 10px 0 rgba(0, 107, 255, 0.15);
            background: rgba(59, 140, 254, 0.1);
            font-weight: 700;
            color: $c3b8;
        }
        &:hover {
            border-color: $c3b8;
            box-shadow: 0 6px 10px 0 rgba(0, 107, 255, 0.15);
        }
        .sign {
            position: absolute;
            top: -10px;
            right: 0;
            background: $cf23;
            border-radius: 10px 10px 0 10px;
            line-height: 20px;
            height: 20px;
            min-width: 40px;
            font-size: 12px;
            color: #fff;
        }
    }
}

.vertical-line {
    width: 1px;
    height: 120px;
    background: linear-gradient(
        180deg,
        rgba(222, 227, 235, 0.3),
        #dee3eb 50%,
        rgba(222, 227, 235, 0.3)
    );
}

.immediately-recharge {
    width: 200px;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    border-radius: 25px;
    text-align: center;
    box-shadow: 0 6px 10px 0 rgba(0, 107, 255, 0.4);
    background: linear-gradient(270deg, #249bff, #2b6aff);
    font-weight: 700;
    color: $cfff;
    cursor: pointer;
    &:hover {
        background: linear-gradient(
            270deg,
            rgba(36, 155, 255, 0.8),
            rgba(43, 106, 255, 0.8)
        );
    }
}

.immediately-recharge-count {
    width: 200px;
    height: 50px;
    margin-bottom: 20px;
}
</style>
