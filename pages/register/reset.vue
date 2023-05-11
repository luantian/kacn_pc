<template>
    <div class="reset-password">
        <LoginHeader :mode="Mode.login"></LoginHeader>
        <Container class="content">
            <h3 class="title1">账号安全</h3>
            <div class="reset-tabs">
                <CustomTabs
                    type="login"
                    v-model="state.active"
                    @tab-click="onTabClick"
                >
                    <el-tab-pane
                        v-for="(item, index) in state.tabsData"
                        :key="index"
                        :label="item.title"
                        :name="String(item.name)"
                    ></el-tab-pane>
                </CustomTabs>
            </div>

            <el-form class="form" :model="state.form" :rules="rules" ref="ruleFormRef">
                <CustomFormItem
                    prop="account"
                    v-if="state.resetType === Way.account"
                >
                    <CustomInputType
                        ref="account"
                        :type="Way.account"
                        v-model="state.form.account"
                        placeholder="请输入已注册的邮箱号"
                    ></CustomInputType>
                </CustomFormItem>
                <CustomFormItem :prop="Way.phone" v-else>
                    <CustomInputType
                        ref="phone"
                        v-model="state.form.phone"
                        :type="Way.phone"
                        placeholder="请输入已注册的手机号"
                    ></CustomInputType>
                </CustomFormItem>
                <CustomFormItem :prop="Way.verifyCode">
                    <CustomInputType
                        ref="verifyCode"
                        v-model="state.form.verifyCode"
                        :type="Way.verifyCode"
                        placeholder="请输入验证码"
                    ></CustomInputType>
                </CustomFormItem>
                <CustomFormItem :prop="Way.password">
                    <CustomInputType
                        ref="password"
                        v-model="state.form.password"
                        :type="Way.password"
                        placeholder="请设置密码（6~12位数字和字母组合）"
                    ></CustomInputType>
                </CustomFormItem>
            </el-form>
            <div class="confirm-btn">
                <CustomButton type="primary" block @click="onConfirm">
                    确认
                </CustomButton>
            </div>
            <div class="contact">
                遇到问题？<CustomNuxtLink type="link" to="/"
                    >请联系客服</CustomNuxtLink
                >
            </div>
        </Container>
    </div>
</template>

<script lang="ts" setup name="PageResetPassword">
import type { FormInstance, FormRules } from "element-plus";
import { Mode, OperaButtons, Way } from "~/utils/enums/LoginEnum";

const state = reactive({
    form: {
        account: '',
        phone: '',
        verifyCode: '',
        password: ''
    },
    active: Way.account,
    resetType: Way.account,
    tabsData: [
        { title: "邮箱找回", name: Way.account },
        { title: "手机找回", name: Way.phone },
    ],
});

const rules = reactive({
    account: [
        {
            required: true,
            message: "请输入您的账号",
        },
    ],
    password: [
        {
            required: true,
            message: "请输入您的密码",
        },
    ],
    phone: [
        {
            required: true,
            message: "请输入正确的手机号",
        },
    ],
    verifyCode: [
        {
            required: true,
            message: "请输入您的验证码",
        },
    ],
});

const ruleFormRef = ref<FormInstance>();

const onConfirm = () => {
    // ruleFormRef.value.$children[0].validate((valid) => {
    //     if (valid) {
    //         console.log("表单验证通过form", this.form);
    //     } else {
    //         return false;
    //     }
    // });
    console.log('ruleFormRef', ruleFormRef.value);
    console.log('params', state.form)
};

const onTabClick = (component: any) => {
    console.log('component', component.paneName)
    state.resetType = component.paneName;
    reset(ruleFormRef.value);
}

const reset = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
};

</script>

<style lang="scss" scoped>
.content {
    padding-bottom: 80px;
    margin-top: 20px;
    background: $cfff;
    box-shadow: 7px 7px 25px 0px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    overflow: hidden;
    .reset-tabs {
        width: 700px;
        margin: 0 auto;
        // display: flex;
        // justify-content: center;
    }
}

.title1 {
    height: 76px;
    line-height: 76px;
    color: $cfff;
    background-color: $c3b8;
    text-align: center;
    font-size: 24px;
    margin-bottom: 40px;
}

.form,
.confirm-btn {
    width: 400px;
    margin: 0 auto;
}
.confirm-btn {
    margin-bottom: 20px;
    height: 44px;
}

.contact {
    font-size: 14px;
    text-align: center;
}
</style>

