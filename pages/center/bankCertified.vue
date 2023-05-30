<template>
    <CenterWrap title="银行卡认证">
        <div class="content">
            <div class="note">
                <span class="iconfont icon-tips_bg_wran_blue"></span>
                <span>为了保证您的账户安全，请填写银行账单或网上银行电子账单收到的4位验证码进行验证</span>
            </div>
            <el-form
                :model="form"
                label-width="200"
                style="width: 600px"
                size="large"
            >
                <el-form-item label="银行卡号">
                    <div>{{ form.bank }}</div>
                </el-form-item>
                <el-form-item label="验证码">
                    <CustomInputType
                        class="verify-code"
                        ref="verifyCode"
                        v-model="form.verifyCode"
                        :type="Way.verifyCode"
                        placeholder="请输入验证码"
                        :isPrefix="false"
                    ></CustomInputType>
                </el-form-item>
                <el-form-item>
                    <CustomButton class="confirm-button" type="primary" round
                        >立即验证卡号</CustomButton
                    >
                </el-form-item>
            </el-form>
        </div>
    </CenterWrap>
</template>

<script lang="ts" setup name="EmailCertified">
import { Way } from "~/utils/enums/LoginEnum";

definePageMeta({
    title: "银行卡认证",
});

interface IForm {
    bank: string;
    verifyCode: string;
}

const form: IForm = reactive({
    bank: "123123123123",
    verifyCode: "",
});
</script>

<style lang="scss" scoped>

.content {
    border-radius: 10px;
    border: 1px solid $cdee;
    overflow: hidden;
    padding-bottom: 20px;
    .note {
        border: 1px solid #96c1fe;
        border-radius: 4px;
        margin: 20px;
        margin-bottom: 50px;
        padding: 10px 20px;
        background-color: #f0f6ff;
        .iconfont {
            color: $c3b8;
            margin-right: 10px;
        }
    }
}

.verify-code {
    .el-input__inner {
        height: 40px;
    }
}

.confirm-button {
    width: 300px;
    height: 50px;
    font-size: 18px;
    border-radius: 100px;
}
</style>
