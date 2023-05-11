<template>
    <CenterWrap>
        <div class="title-wrap">
            <div class="title">优惠卷</div>
            <div class="opera-buttons">
                <CustomButton class="batch-button" type="primary" round>
                    兑换优惠卷
                </CustomButton>
            </div>
        </div>
        <CustomTabs
            type="three"
            v-model="state.active"
            @tab-change="onTabChange"
        >
            <el-tab-pane
                v-for="(item, index) in state.tabsData"
                :key="index"
                :label="item.title"
                :name="item.title"
                lazy
            ></el-tab-pane>
        </CustomTabs>
        <div class="contents">
            <CenterCoupon
                class="content-item"
                v-for="(item, index) in state.dataSource"
                :key="index"
                :dataSource="item"
            ></CenterCoupon>
        </div>
    </CenterWrap>
    <!-- 兑换优惠券 -->
    <!-- <CustomDialog v-model="state.visible" width="380px">

    </CustomDialog> -->
</template>

<script lang="ts" setup name="CouponPage">
import { TabPaneName } from "element-plus/es/components/tabs/src/tabs";
import { ICoupon } from "~/service/User/Interface";

definePageMeta({
    title: "优惠卷",
});

interface ITab {
    title: string;
    status: number;
}

interface IState {
    active: string;
    visible: boolean;
    input6: string;
    tabsData: ITab[];
    dataSource: ICoupon[];
}

const state = reactive(<IState>{
    active: "未使用",
    visible: false,
    input6: "",
    tabsData: [
        { title: "未使用", status: 0 },
        { title: "已使用", status: 1 },
        { title: "已过期", status: 2 },
    ],

    dataSource: [
        {
            id: "112233444556", // 优惠卷id
            name: "App卷", // 优惠卷名称
            type: 0, // 优惠卷类型
            status: 0,
            price: 100, // 优惠金额
            currency: "USD", // 货币类型
            condition: "满USD$10.00可用", // 使用条件
            discount: "9折", // 优惠折扣
            EXPDate: 123123123123, // 优惠卷有效期
            receiveData: 123123123123, // 领取时间
            manual: "内容多显示箭头省略号省略号省略号", // 使用说明
        },
        {
            id: "112233444556", // 优惠卷id
            name: "App卷", // 优惠卷名称
            type: 2, // 优惠卷类型
            status: 1,
            price: 100, // 优惠金额
            currency: "USD", // 货币类型
            condition: "满USD$10.00可用", // 使用条件
            discount: "9折", // 优惠折扣
            EXPDate: 123123123123, // 优惠卷有效期
            receiveData: 123123123123, // 领取时间
            manual: "内容多显示箭头省略号省略号省略号", // 使用说明
        },
        {
            id: "112233444556", // 优惠卷id
            name: "App卷", // 优惠卷名称
            type: 1, // 优惠卷类型
            status: 2,
            price: 100, // 优惠金额
            currency: "USD", // 货币类型
            condition: "满USD$10.00可用", // 使用条件
            discount: "9折", // 优惠折扣
            EXPDate: 123123123123, // 优惠卷有效期
            receiveData: 123123123123, // 领取时间
            manual: "内容多显示箭头省略号省略号省略号", // 使用说明
        },
        {
            id: "112233444556", // 优惠卷id
            name: "App卷", // 优惠卷名称
            type: 0, // 优惠卷类型
            status: 0,
            price: 100, // 优惠金额
            currency: "USD", // 货币类型
            condition: "满USD$10.00可用", // 使用条件
            discount: "9折", // 优惠折扣
            EXPDate: 123123123123, // 优惠卷有效期
            receiveData: 123123123123, // 领取时间
            manual: "内容多显示箭头省略号省略号省略号", // 使用说明
        },
        {
            id: "112233444556", // 优惠卷id
            name: "App卷", // 优惠卷名称
            type: 2, // 优惠卷类型
            status: 1,
            price: 100, // 优惠金额
            currency: "USD", // 货币类型
            condition: "满USD$10.00可用", // 使用条件
            discount: "9折", // 优惠折扣
            EXPDate: 123123123123, // 优惠卷有效期
            receiveData: 123123123123, // 领取时间
            manual: "内容多显示箭头省略号省略号省略号", // 使用说明
        },
        {
            id: "112233444556", // 优惠卷id
            name: "App卷", // 优惠卷名称
            type: 1, // 优惠卷类型
            status: 2,
            price: 100, // 优惠金额
            currency: "USD", // 货币类型
            condition: "满USD$10.00可用", // 使用条件
            discount: "9折", // 优惠折扣
            EXPDate: 123123123123, // 优惠卷有效期
            receiveData: 123123123123, // 领取时间
            manual: "内容多显示箭头省略号省略号省略号", // 使用说明
        },
    ],
});

const onTabChange = (name: TabPaneName) => {
    console.log("name", name);
};
/*
export default {
    data() {
        return {
            visible: false,
            tabsData: [
                { title: "未使用1", status: 0, componentName: "Coupon" },
                { title: "已使用2", status: 1, componentName: "CouponUsed" },
                { title: "已过期0", status: 3, componentName: "None" },
            ],
        };
    },
    methods: {},
};
 */
</script>

<style lang="scss" scoped>
.contents {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    .content-item {
        margin-right: 20px;
        margin-bottom: 20px;
        &:nth-of-type(4n) {
            margin-right: 0;
        }
    }
}

.title-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    .title {
        font-weight: 700;
        font-size: 20px;
    }

    .opera-buttons {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
