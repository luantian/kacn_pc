<template>
    <div class="center-slider">
        <div v-for="(item, index) in state.dataSource" :key="index">
            <div class="title">{{ item.title }}</div>
            <div
                class="child"
                :class="{ active: state.active === it.to }"
                v-for="(it, idx) in item.children"
                :key="idx"
                @click="onClick(it)"
            >
                <span>{{ it.title }}</span>
                <span class="count" v-if="it.count">({{ it.count }})</span>
                <div class="active-dom"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="CenterSlider">
const route = useRoute();

interface ISlider {
    title: string;
    children?: ISlider[],
    to?: string;
    count?: number;
}

interface IState {
    active: string;
    dataSource: ISlider[]
}

const state = reactive(<IState>{
    active: route.fullPath.split("/")[1],
    dataSource: [
        {
            title: "我的KA-CN",
            children: [
                { title: "用户中心", to: "center" },
                { title: "成长中心", to: "" },
            ],
        },
        {
            title: "订单中心",
            children: [
                { title: "我的订单", to: "order" },
                { title: "我的评价", to: "comment" },
                { title: "心愿单", to: "" },
            ],
        },
        {
            title: "我的资产",
            children: [
                { title: "优惠卷", count: 10 },
                { title: "元宝", to: "" },
                { title: "余额", to: "" },
            ],
        },
        {
            title: "我的账户",
            children: [
                { title: "个人资料", to: "" },
                { title: "账号安全", to: "" },
                { title: "号箱管理", to: "" },
                { title: "支付管理", to: "" },
            ],
        },
    ],
});

const onClick = (to: ISlider) => {
    console.log('to', to);
}
</script>

<style lang="scss" scoped>
.center-slider {
    border-radius: 15px;
    box-sizing: border-box;
    border: 1px solid $cdee;
    padding-bottom: 20px;
    .title {
        font-size: 16px;
        padding-left: 30px;
        height: 40px;
        line-height: 40px;
        margin-top: 20px;
    }
    .child {
        position: relative;
        padding-left: 30px;
        height: 30px;
        line-height: 30px;
        cursor: pointer;
        user-select: none;
        &.active {
            font-weight: 700;
            color: $c3b8;
            .active-dom {
                display: block;
            }
        }
        &:hover {
            color: $c3b8;
        }
        .active-dom {
            display: none;
            position: absolute;
            top: 6px;
            left: 0;
            width: 2px;
            height: 18px;
            background-color: $c3b8;
        }

        .count {
            color: $cf23;
        }
    }
}
</style>
