<template>
    <CenterWrap title="绑定手机">
        <div class="content">
            <el-form
                :model="form"
                label-width="200"
                style="width: 600px"
                size="large"
            >
                <el-form-item label="手机号" :prop="Way.phone">
                    <CustomInputType
                        :ref="Way.phone"
                        class="input"
                        v-model="form.phone"
                        :type="Way.phone"
                        placeholder="请输入您的常用手机号"
                    ></CustomInputType>
                </el-form-item>
                <el-form-item label="短信验证码" :prop="Way.verifyCode">
                    <CustomInputType
                        :isPrefix="false"
                        class="input"
                        :ref="Way.verifyCode"
                        v-model="form.verifyCode"
                        :type="Way.verifyCode"
                        placeholder="请输入验证码"
                    ></CustomInputType>
                </el-form-item>
                <el-form-item>
                    <CustomButton class="confirm-button" type="primary" round
                        >确认</CustomButton
                    >
                </el-form-item>
            </el-form>
            <div class="tool">
                <div class="tool-title">均无法验证通过？</div>
                <ul>
                    <li>
                        网络通讯异常可能会造成短信丢失，请重新获取或稍后再试。
                    </li>
                    <li>请核实手机是否已欠费停机，或者屏蔽了系统短信。</li>
                    <li>
                        若仍无法通过验证，
                        <CustomNuxtLink type="link" to="/"
                            >请联系客服</CustomNuxtLink
                        >
                    </li>
                    <li>完成认证，升级Vip，享受7天无理由退换货服务。</li>
                </ul>
            </div>
        </div>
    </CenterWrap>
</template>

<script lang="ts" setup name="BindPhone">
import { Way } from "~/utils/enums/LoginEnum";

definePageMeta({
    title: "绑定手机",
});

interface IForm {
    phone: string;
    verifyCode: string;
}

const form: IForm = reactive({
    phone: "15640152831",
    verifyCode: "",
});
</script>

<style lang="scss" scoped>
.content {
    border-radius: 10px;
    border: 1px solid $cdee;
    overflow: hidden;
    padding-top: 50px;
    .tool {
        background-color: $cf5f;
        padding: 20px 40px;
        margin-top: 40px;
        .iconfont {
            color: $c3b8;
        }
        &-title {
            font-size: 16px;
            padding-bottom: 20px;
            color: $c3b8;
        }
        ul {
            display: flex;
            flex-wrap: wrap;
            color: $c999;
            padding-left: 20px;
            line-height: 30px;
            li {
                width: 430px;
                list-style-type: disc;
            }
        }
    }
}

.input {
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
