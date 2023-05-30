<template>
    <CenterWrap title="支付管理">
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

        <div class="content">
            <div v-show="state.active === '账单地址'">
                <CustomButton @click="openCreate" type="primary" round
                    >+添加新账单地址</CustomButton
                >
                <div class="billing-address">
                    <div
                        class="billing-address-item"
                        :class="{ active: item.default }"
                        v-for="(item, index) in state.billingAddressDatasource"
                        :key="index"
                    >
                        <div class="row1">
                            <span>{{ item.name }}</span>
                            <span>{{ item.phone }}</span>
                            <span>{{ item.postCode }}</span>
                        </div>
                        <div class="row2">
                            <span>{{ item.country }}</span>
                            <span>{{ item.city }}</span>
                            <span>{{ item.text }}</span>
                        </div>
                        <div class="row3">
                            <span>{{ item.text }}</span>
                        </div>
                        <div class="row4">
                            <div>
                                <CustomButton v-if="!item.default" link
                                    >设为默认地址</CustomButton
                                >
                            </div>
                            <div>
                                <CustomButton link>编辑</CustomButton>
                                <CustomButton link>删除</CustomButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="state.active === '快捷支付'">
                <div class="quick-payment"></div>
            </div>
        </div>

        <CustomPaginationRight
            class="pagination"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="state.pagination.page"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="state.pagination.limit"
            layout="total, sizes, prev, pager, next"
            :total="state.pagination.total"
            background
        ></CustomPaginationRight>
    </CenterWrap>

    <CustomDialog
        v-model="state.createVisible"
        title="+Add New Billing Address"
    >
        <div class="form-wrap">
            <el-form :model="form" label-position="top">
                <el-form-item>
                    <template #label>
                        <span class="label">Name</span>
                        <span class="sub-label"
                            >（请填写英文/拼音以提升支付通过率）</span
                        >
                    </template>
                    <div class="row-name">
                        <CustomInput
                            class="row-name-input"
                            v-model="form.firstName"
                            placeholder="First Name"
                        ></CustomInput>
                        <CustomInput
                            class="row-name-input"
                            v-model="form.lastName"
                            placeholder="Last Name"
                        ></CustomInput>
                    </div>
                </el-form-item>

                <el-form-item label="Country/Region">
                    <div class="row-country">
                        <CustomInput
                            class="row-country-input"
                            v-model="form.firstName"
                            placeholder="Choose your country"
                        ></CustomInput>
                        <CustomInput
                            class="row-country-input"
                            v-model="form.lastName"
                            placeholder="State"
                        ></CustomInput>
                        <CustomInput
                            class="row-country-input"
                            v-model="form.lastName"
                            placeholder="City"
                        ></CustomInput>
                    </div>
                </el-form-item>
                <el-form-item label="Address1">
                    <el-input
                        type="textarea"
                        v-model="form.lastName"
                        placeholder="City"
                    ></el-input>
                </el-form-item>
                <el-form-item label="Address2">
                    <el-input
                        type="textarea"
                        v-model="form.lastName"
                        placeholder="City"
                    ></el-input>
                </el-form-item>
                <div class="row">
                    <el-form-item class="form-item" label="Phone Number">
                        <el-input
                            v-model="form.lastName"
                            placeholder="City"
                        ></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Email">
                        <el-input
                            v-model="form.lastName"
                            placeholder="City"
                        ></el-input>
                    </el-form-item>
                    <el-form-item class="form-item" label="Post/Zip Code">
                        <el-input
                            v-model="form.lastName"
                            placeholder="City"
                        ></el-input>
                    </el-form-item>
                </div>
            </el-form>
        </div>
    </CustomDialog>
</template>

<script lang="ts" setup name="Payment">
import { TabPaneName } from "element-plus/es/components/tabs/src/tabs";

definePageMeta({
    title: "支付管理",
});

const form = reactive({
    firstName: "",
    lastName: "",
});

const state = reactive({
    createVisible: false,
    active: "账单地址",
    tabsData: [
        { title: "账单地址", status: 0 },
        { title: "快捷支付", status: 1 },
    ],
    pagination: {
        limit: 10,
        page: 1,
        total: 100,
    },
    billingAddressDatasource: [
        {
            name: "Zhao Qianqian",
            phone: "15640152831",
            postCode: "999002",
            country: "United States",
            city: "New York",
            text: "Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles",
            default: true,
        },
        {
            name: "Zhao Qianqian",
            phone: "15640152831",
            postCode: "999002",
            country: "United States",
            city: "New York",
            text: "Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles",
            default: false,
        },
        {
            name: "Zhao Qianqian",
            phone: "15640152831",
            postCode: "999002",
            country: "United States",
            city: "New York",
            text: "Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles Los Angeles",
            default: false,
        },
    ],
    quickPaymentDatasouce: [{}],
});

const onTabChange = (name: TabPaneName) => {
    console.log("name", name);
};

const handleSizeChange = (val: number) => {
    console.log("size", val);
};

const handleCurrentChange = (val: number) => {
    console.log("current", val);
    state.pagination.page = val;
};

const openCreate = () => {
    state.createVisible = true;
};
</script>

<style lang="scss" scoped>
.content {
    margin: 20px 0;
}
.pagination {
    margin-top: 20px;
}

.form-wrap {
    padding: 20px;
    .sub-label {
        color: $c999;
        font-size: 12px;
    }

    .row-name,
    .row-country {
        display: flex;
        flex: 1;
        justify-content: space-between;
    }

    .row-name {
        &-input {
            width: 360px;
        }
    }

    .row-country {
        &-input {
            width: 234px;
        }
    }
    .row {
        display: flex;
        justify-content: space-between;
        .form-item {
            width: 234px;
        }
    }
}
.billing-address {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;

    &-item {
        width: 448px;
        border: 1px solid $cdee;
        margin-bottom: 20px;
        padding: 20px;
        position: relative;
        &.active {
            &::after {
                display: block;
                content: "默认";
                position: absolute;
                top: 10px;
                right: 10px;
                background-color: $c3b8;
                color: $cfff;
                padding: 4px 8px;
                border-radius: 3px;
                font-size: 12px;
            }
        }

        .row1 {
            margin-bottom: 20px;
            span:nth-of-type(1) {
                font-size: 16px;
            }
            span:nth-of-type(2),
            span:nth-of-type(3) {
                color: $c999;
                font-size: 14px;
                margin-left: 20px;
            }
        }
        .row2 {
            span {
                margin-right: 12px;
                line-height: 1.6;
            }
        }
        .row3 {
            span {
                line-height: 1.6;
            }
        }
        .row4 {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }
    }
}

.quick-payment {
}
</style>
