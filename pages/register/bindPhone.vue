<template>
    <div class="bind-phone">
        <LoginHeader mode="jumpover"></LoginHeader>
        <Container class="content">
            <h3 class="title1">绑定手机号</h3>
            <div class="title2">恭喜您注册成功！</div>
            <div class="title3">为了您的账号安全，绑定手机更放心</div>
            <el-form
                class="form"
                :model="state.form"
                :rules="formRules"
                ref="ruleFormRef"
            >
                <CustomFormItem :prop="Way.phone">
                    <CustomInputType
                        :ref="Way.phone"
                        v-model="state.form.phone"
                        :type="Way.phone"
                        placeholder="请输入您的常用手机号"
                    ></CustomInputType>
                </CustomFormItem>
                <CustomFormItem :prop="Way.verifyCode">
                    <CustomInputType
                        :ref="Way.verifyCode"
                        v-model="state.form.verifyCode"
                        :type="Way.verifyCode"
                        placeholder="请输入验证码"
                    ></CustomInputType>
                </CustomFormItem>
            </el-form>
            <div class="confirm-btn">
                <CustomButton @click="onConfirm" type="primary" block>
                    确认
                </CustomButton>
            </div>
            <div class="contact">
                收不到验证码？<CustomNuxtLink type="link" to="/"
                    >请联系客服</CustomNuxtLink
                >
            </div>
        </Container>
    </div>
</template>

<script lang="ts" setup name="PageBindPhone">
import { Mode, OperaButtons, Way } from "~/utils/enums/LoginEnum";
import type { FormInstance, FormRules } from "element-plus";

const state = reactive({
    form: {
        phone: "",
        verifyCode: "",
    },
    checked: false,
});

const ruleFormRef = ref<FormInstance>();

const formRules = reactive({
    verifyCode: [
        {
            required: true,
            message: "请输入您的验证码",
        },
    ],
    phone: [
        {
            required: true,
            message: "请输入正确的手机号",
        },
    ],
});

const onConfirm = () => {
    // if (!state.checked) {
    //     return false;
    // }

    if (ruleFormRef.value) {
        ruleFormRef.value.validate((valid) => {
            if (valid) {
                console.log("表单验证通过form", state.form);
            } else {
                return false;
            }
        });
    }
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

.title2 {
    height: 36px;
    line-height: 36px;
    font-size: 24px;
    color: $cf23;
    text-align: center;
    margin-bottom: 10px;
}

.title3 {
    color: $c666;
    height: 20px;
    line-height: 20px;
    text-align: center;
    margin-bottom: 30px;
}

.form,
.confirm-btn {
    width: 400px;
    margin: 0 auto;
}

.confirm-btn {
    margin-bottom: 20px;
    height: 40px;
}

.contact {
    text-align: center;
}
</style>
