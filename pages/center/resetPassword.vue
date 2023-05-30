<template>
    <CenterWrap title="修改密码">
        <div class="content">
            <el-form :mode="form" size="large" style="width: 600px" label-width="200">
                <el-form-item label="当前密码">
                    <CustomInput v-model="form.password" placeholder="请您输入当前使用的密码"></CustomInput>
                </el-form-item>
                <el-form-item label="新密码">
                    <CustomInput v-model="form.newPassword" placeholder="请设置新密码（6~20位数字或字母组合）"></CustomInput>
                </el-form-item>
                <el-form-item label="确认密码">
                    <CustomInput v-model="form.rePassword" placeholder="再次确认您的新密码"></CustomInput>
                </el-form-item>
                <el-form-item>
                    <CustomButton class="confirm-button" type="primary" round>确认保存</CustomButton>
                </el-form-item>
            </el-form>
        </div>
    </CenterWrap>
</template>

<script lang="ts" setup name="ResetPassword">
definePageMeta({
    title: "修改密码",
});

interface IForm {
    password: string;
    newPassword: string;
    rePassword: string;
}

const form: IForm = reactive({
    password: "",
    newPassword: "",
    rePassword: "",
});
</script>

<style lang="scss" scoped>
.content {
    border-radius: 10px;
    border: 1px solid $cdee;
    overflow: hidden;
    padding: 50px 0 30px;
}

.confirm-button {
    width: 300px;
    height: 50px;
    font-size: 18px;
    border-radius: 100px;
}
</style>
