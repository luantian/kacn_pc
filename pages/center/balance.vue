<template>
    <CenterWrap title="我的余额">
        <div class="balance-wrap">
            <div class="available-balance">
                <div class="label">可用余额</div>
                <Price class="value" :value="100"></Price>
            </div>
            <div class="recharge-balance">
                <div class="title">填写充值金额</div>
                <div>
                    <el-form
                        :model="state.form"
                        :rules="rules"
                        ref="ruleFormRef"
                    >
                        <el-form-item prop="price">
                            <CustomInput
                                class="input"
                                v-model="state.form.price"
                                size="large"
                                placeholder="请您输入充值金额"
                            >
                                <template #suffix>美元</template>
                            </CustomInput>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="recharge-button-wrap">
                    <CustomButtonGradient
                        class="recharge-button"
                        @click="onRecharge"
                        >立即充值</CustomButtonGradient
                    >
                </div>
            </div>
        </div>
        <div class="details">
            <CustomTabs type="two" v-model="state.active">
                <el-tab-pane
                    v-for="(item, index) in state.tabsData"
                    :key="index"
                    :label="item.title"
                    :name="item.title"
                    lazy
                ></el-tab-pane>
            </CustomTabs>
            <div class="table-wrap">
                <el-table
                    :data="tableData"
                    header-row-class-name="header-row"
                    row-class-name="body-row"
                >
                    <el-table-column prop="orderId" label="订单编号"></el-table-column>
                    <el-table-column prop="date" label="操作时间">
                        <template #default="scope">
                            <Time>{{ scope.row.date }}</Time>
                        </template>
                    </el-table-column>
                    <el-table-column prop="payWay" label="支付方式"></el-table-column>
                    <el-table-column prop="rechargePrice" label="充值金额">
                        <template #default="scope">
                            <Price :value="scope.row.rechargePrice"></Price>
                        </template>
                    </el-table-column>
                    <el-table-column prop="realPrice" label="实付金额">
                        <template #default="scope">
                            <Price :value="scope.row.realPrice"></Price>
                        </template>
                    </el-table-column>
                    <el-table-column prop="status" label="状态（全部）"></el-table-column>
                </el-table>
            </div>
        </div>
    </CenterWrap>
</template>

<script lang="ts" setup name="CenterBalance">
import { FormInstance, FormRules } from "element-plus";

definePageMeta({
    title: "我的余额",
});

const state = reactive({
    form: {
        price: "",
    },
    active: "充值记录",
    tabsData: [
        { title: "充值记录", status: 0 },
        { title: "资金明细", status: 1 },
    ],
});

const ruleFormRef = ref<FormInstance>();

const rules = reactive<FormRules>({
    price: [
        {
            required: true,
            message: "最多可充值3000美元，不能为空",
        },
    ],
});

const tableData = [
    {
        orderId: "123123123123123",
        date: 123123123,
        payWay: 'Paypal',
        rechargePrice: 1000,
        realPrice: 900,
        status: 0,
    },
    {
        orderId: "123123123123123",
        date: 123123123,
        payWay: 'Paypal',
        rechargePrice: 1000,
        realPrice: 900,
        status: 0,
    },
    {
        orderId: "123123123123123",
        date: 123123123,
        payWay: 'Paypal',
        rechargePrice: 1000,
        realPrice: 900,
        status: 0,
    },
    {
        orderId: "123123123123123",
        date: 123123123,
        payWay: 'Paypal',
        rechargePrice: 1000,
        realPrice: 900,
        status: 0,
    },
    {
        orderId: "123123123123123",
        date: 123123123,
        payWay: 'Paypal',
        rechargePrice: 1000,
        realPrice: 900,
        status: 0,
    },
];

const onRecharge = () => {
    console.log("立即充值");
};
</script>

<style lang="scss" scoped>
.balance-wrap {
    // border: 1px solid $cdee;
    display: flex;
    border-radius: 10px;
    background: url("~/assets/imgs/surplus_bg.png") no-repeat;
    height: 280px;
}

.available-balance {
    flex: 1;
    padding-top: 85px;
    box-sizing: border-box;
    padding-left: 70px;
    .label {
        font-size: 18px;
        margin-bottom: 35px;
    }
    .value {
        font-size: 26px;
        font-weight: bold;
    }
}

.recharge-balance {
    flex: 1;
    box-sizing: border-box;
    padding-top: 40px;
    .title {
        padding-left: 14px;
        position: relative;
        font-size: 16px;
        font-weight: 700;
        line-height: 40px;
        margin-bottom: 20px;
        &::after {
            content: "";
            width: 4px;
            height: 16px;
            border-radius: 3px;
            background: $c3b8;
            left: 0;
            position: fixed;
            top: 50%;
            transform: translateY(-50%);
            position: absolute;
        }
    }
}

.recharge-button-wrap {
    padding-top: 10px;
    .recharge-button {
        width: 350px;
    }
}

.details {
    border: 1px solid $cdee;
    border-radius: 10px;
    margin-top: 20px;
}

.table-wrap {
    padding: 0 20px 20px;
}

:deep(.el-input.input) {
    width: 350px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.08);
    border-radius: 10px;
}

:deep(.el-input__wrapper) {
    box-shadow: none;
    border-radius: 10px;
}

:deep(.el-input__suffix-inner) {
    color: $c333;
}

:deep(.el-table__header-wrapper) {
    border-radius: 6px;
}

:deep(.el-table th.el-table__cell) {
    background: transparent;
}

:deep(.header-row) {
    height: 50px;
    background-color: $cf5f;
    border-radius: 6px;
}

:deep(.header-row .el-table__cell) {
    color: $c333;
    font-weight: normal;
}

:deep(.body-row) {
    height: 50px;
}

:deep(.body-row .el-table__cell) {
    height: 50px;
    font-weight: normal !important;
}
</style>
