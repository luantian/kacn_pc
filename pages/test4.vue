<template>
    <el-form :model="state.form" :rules="rules" ref="ruleFormRef">
        <el-form-item prop="account">
            <CustomInputType
                ref="account"
                :type="Way.account"
                v-model="state.form.account"
                placeholder="请输入邮箱/用户名"
            ></CustomInputType>
        </el-form-item>
        <div>
            <CustomButton @click="onClick">登录</CustomButton>
        </div>
    </el-form>
</template>

<script lang="ts" setup name="Test4">
import { FormInstance, FormRules } from "element-plus";
import { Way } from "~/utils/enums/LoginEnum";
import { Form } from "~/service/Form/Form";

const state = reactive({
    form: {},
});

const ruleFormRef = ref<FormInstance>();

const rules = reactive<FormRules>({
    account: [
        {
            required: true,
            message: "请输入您的账号",
        },
    ],
});

let oForm: Form;
onMounted(() => {
    oForm = new Form(ruleFormRef.value);
});

const onClick = async () => {
    const data = await oForm.validate()
    console.log('data', data)
};
</script>

<style lang="scss" scoped></style>
