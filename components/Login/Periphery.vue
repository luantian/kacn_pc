<template>
    <div class="periphery">
        <LoginHeader :mode="mode"></LoginHeader>
        <Container>
            <div class="content">
                <div class="lions" v-if="mode === Mode.login">
                    <img :src="lionStatus[state.lionType]" alt="状态小狮子" />
                </div>
                <div class="image-wrap">
                    <img
                        :class="`welcome-image-${mode}`"
                        :src="WelcomeImageCategory[mode]"
                    />
                </div>
                <div class="main">
                    <h3 class="title">{{ Titles[mode] }}</h3>
                    <h5 class="sub-title">{{ SubTitles[mode] }}</h5>
                    <LoginThirdParty></LoginThirdParty>
                    <CustomDivider>OR</CustomDivider>
                    <CreateForm></CreateForm>
                    <div class="radio-wrap">
                        <div class="radio" @click="onClickRadio">
                            <div v-show="!state.radio" class="radio-icon"></div>
                            <div
                                v-show="state.radio"
                                class="iconfont icon-xuanzhong"
                            ></div>
                            <div class="radio-label">我已阅读并同意</div>
                        </div>
                        <Text></Text>
                    </div>
                    <div class="main-btn">
                        <CustomButton
                            @click="
                                () => {
                                    submitForm(ruleFormRef);
                                }
                            "
                            type="primary"
                            block
                        >
                            {{ MainBtns[mode] }}
                        </CustomButton>
                    </div>
                    <OperaBtnGroup></OperaBtnGroup>
                </div>
            </div>
        </Container>
        <FooterFooter3 class="footer3"></FooterFooter3>
    </div>
    <CustomDialogConfirm
        width="380px"
        v-model="state.visible"
        @cancel="close"
        @confirm="onConfrim"
    >
        <template #title>请阅读并同意协议</template>
        <template #text>
            <div class="dialog-text">
                我已阅读并同意
                <Text></Text>
            </div>
        </template>
    </CustomDialogConfirm>
</template>

<script lang="tsx" setup name="LoginPeriphery">
import LoginImg from "~/assets/imgs/login_img.png";
import RegisterImg from "~/assets/imgs/register_img.jpg";
import LoginIptDef from "~/assets/imgs/login_ipt_def.png";
import LoginIptName from "~/assets/imgs/login_ipt_name.png";
import LoginIptPsw from "~/assets/imgs/login_ipt_psw.png";

import {
    Mode,
    OperaButtons,
    Way,
    LoginOrBindWay,
} from "~/utils/enums/LoginEnum";
import type { FormInstance, FormRules } from "element-plus";

interface IProps {
    mode: Mode;
}
const { mode } = withDefaults(defineProps<IProps>(), {
    mode: Mode.login,
});

// formItem生成依赖数据
const FormItemRenderData = {
    // 登录模式
    [Mode.login]: {
        [Way.account]: [Way.account, Way.password],
        [Way.verifyCode]: [Way.account, Way.verifyCode],
    },
    // 注册模式
    [Mode.register]: {
        [Way.account]: [Way.account, Way.verifyCode, Way.password],
    },
    // 绑定模式
    [Mode.bind]: {
        [Way.account]: [Way.account, Way.password],
        [Way.verifyCode]: [Way.account, Way.verifyCode],
    },
};

// 操作按钮生成依赖数据
const OperaBtnRenderData = {
    // 登录模式
    [Mode.login]: {
        [Way.account]: [
            OperaButtons.newUserRegister,
            OperaButtons.verifyCodeLogin,
            OperaButtons.forgetPassword,
        ],
        [Way.verifyCode]: [
            OperaButtons.newUserRegister,
            OperaButtons.accountPasswordLogin,
        ],
    },
    [Mode.register]: {
        [Way.account]: [OperaButtons.alreadyHaveAccount],
    },
    [Mode.bind]: {
        [Way.account]: [
            OperaButtons.forgetPassword,
            OperaButtons.verifyCodeBind,
        ],
        [Way.verifyCode]: [OperaButtons.accountPasswordBind],
    },
};
const Titles = {
    [Mode.login]: "欢迎登录KA-CN",
    [Mode.register]: "注册KA-CN账号",
    [Mode.bind]: "绑定KA-CN账号",
};

const SubTitles = {
    [Mode.login]: "使用三方账号授权一键式登录",
    [Mode.register]: "使用三方账号授权一键式登录",
    [Mode.bind]: "保障账户安全，绑定后即可通过XX一键登录",
};

const MainBtns = {
    [Mode.login]: "立即登录",
    [Mode.register]: "同意协议并注册",
    [Mode.bind]: "确认绑定",
};

const HeaderOpera = {
    [Mode.login]: null,
    [Mode.register]: "goback",
    [Mode.bind]: "goback",
};

const WelcomeImageCategory = {
    [Mode.login]: LoginImg,
    [Mode.register]: RegisterImg,
    [Mode.bind]: null,
};

// 表单校验规则
const rules = reactive<FormRules>({
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
    verifyCode: [
        {
            required: true,
            message: "请输入您的验证码",
        },
    ],
    phone: [
        {
            required: true,
            message: "请输入您的手机号",
        },
    ],
});

const lionStatus = reactive({
    "default": LoginIptDef,
    [Way.account]: LoginIptName,
    [Way.password]: LoginIptPsw,
});

const ruleFormRef = ref<FormInstance>();

const state = reactive({
    lionType: "default",
    active: LoginOrBindWay.zero,
    // form: {
    //     account: '',
    //     password: '',
    //     verifyCode: '',
    //     phone: '',
    // },
    form: {},
    checked: false,
    radio: false,
    visible: false,
});

const onLogin = async () => {
    console.log("params", state.form);
    console.log("onLogin");
};
const toRegister = () => {
    // router.push({ path: "/register" });
};
const onRegister = () => {
    console.log("onRegister");
};
const onBind = () => {
    console.log("onBind");
};
const onCustomFocus = (inputType: string) => {
    // console.log("onCustomFocus", inputType);
    state.lionType = inputType;
};
const onCustomBlur = () => {
    // console.log("onCustomBlur");
    state.lionType = "default";
};
const onClickRadio = () => {
    state.radio = !state.radio;
};

const open = () => {
    state.visible = true;
};
const close = () => {
    state.visible = false;
};
const onConfrim = () => {
    close();
    state.radio = true;
};

const submitForm = async (formEl: FormInstance | undefined) => {
    console.log("formEl", formEl);
    if (!formEl) return;

    if (!state.radio) {
        open();
    }
    await formEl.validate((valid, fields) => {
        if (valid) {
            switch (mode) {
                case Mode.login:
                    onLogin();
                    break;
                case Mode.register:
                    onRegister();
                    break;
                case Mode.bind:
                    onBind();
                    break;
            }
        } else {
            console.log("error submit!", fields);
        }
    });
};

const reset = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
};

const onChangeActive = (active: any) => {
    console.log("onChangeActive", active);
    state.active = active;
    reset(ruleFormRef.value);
};

const CustomHeader = () => <LoginHeader mode={HeaderOpera[mode]}></LoginHeader>;

const oFormItem = {
    [Way.account]: () => (
        <CustomFormItem prop="account">
            <CustomInputType
                ref="account"
                type={Way.account}
                v-model={state.form.account}
                placeholder="请输入邮箱/用户名"
                onFocus={() => {
                    onCustomFocus(Way.account);
                }}
                onBlur={onCustomBlur}
            ></CustomInputType>
        </CustomFormItem>
    ),
    [Way.password]: () => (
        <CustomFormItem prop="password">
            <CustomInputType
                ref="password"
                v-model={state.form.password}
                type={Way.password}
                placeholder="请输入密码"
                onFocus={() => {
                    onCustomFocus(Way.password);
                }}
                onBlur={onCustomBlur}
            ></CustomInputType>
        </CustomFormItem>
    ),
    [Way.verifyCode]: (key: number) => (
        <CustomFormItem prop="verifyCode">
            <CustomInputType
                ref="verifyCode"
                v-model={state.form.verifyCode}
                type={Way.verifyCode}
                placeholder="请输入验证码"
                key={key}
                onFocus={() => {
                    onCustomFocus(Way.verifyCode);
                }}
                onBlur={onCustomBlur}
            ></CustomInputType>
        </CustomFormItem>
    ),
    [Way.phone]: () => (
        <CustomFormItem prop="phone">
            <CustomInputType
                ref="phone"
                v-model={state.form.phone}
                value={state.form.phone}
                type={Way.phone}
                placeholder="请输入您的常用手机号"
                onFocus={() => {
                    onCustomFocus(Way.phone);
                }}
                onBlur={onCustomBlur}
            ></CustomInputType>
        </CustomFormItem>
    ),
};

const oOperaBtn = {
    [OperaButtons.newUserRegister]: (key: number) => (
        <CustomNuxtLink to="/register" key={key || Math.random()}>
            新用户注册
        </CustomNuxtLink>
    ),
    [OperaButtons.verifyCodeLogin]: (key: number) => (
        <CustomButton
            link
            key={key || Math.random()}
            onClick={() => onChangeActive(LoginOrBindWay.one)}
        >
            验证码登录
        </CustomButton>
    ),
    [OperaButtons.forgetPassword]: (key: number) => (
        <CustomNuxtLink to="/register/reset" key={key}>
            忘记密码
        </CustomNuxtLink>
    ),
    [OperaButtons.accountPasswordLogin]: (key: number) => (
        <CustomButton
            link
            key={key || Math.random()}
            onClick={() => onChangeActive(LoginOrBindWay.zero)}
        >
            账号密码登录
        </CustomButton>
    ),
    [OperaButtons.alreadyHaveAccount]: (key: number) => (
        <div key={key} style="flex: 1; text-align: center;">
            已有账号？
            <CustomNuxtLink type="link" to="/login" key={key || Math.random()}>
                立即登录 &gt;
            </CustomNuxtLink>
        </div>
    ),
    [OperaButtons.accountPasswordBind]: (key: number) => (
        <CustomButton
            link
            key={key || Math.random()}
            onClick={() => onChangeActive(LoginOrBindWay.zero)}
        >
            账号密码绑定
        </CustomButton>
    ),
    [OperaButtons.verifyCodeBind]: (key: number) => (
        <CustomButton
            link
            key={key || Math.random()}
            onClick={() => onChangeActive(LoginOrBindWay.one)}
        >
            验证码绑定
        </CustomButton>
    ),
};

const CreateForm = () => {
    const data = FormItemRenderData[mode];
    const categoryWay = Object.keys(data)[state.active];
    const formItems = data[categoryWay].map((way, index: number) =>
        oFormItem[way](index)
    );
    return (
        <el-form model={state.form} rules={rules} ref={ruleFormRef}>
            {formItems}
        </el-form>
    );
};

const OperaBtnGroup = () => {
    const data = OperaBtnRenderData[mode];
    const categoryWay = Object.keys(data)[state.active];
    const operaBtns = data[categoryWay].map((way) => oOperaBtn[way]());
    console.log('categoryWay', categoryWay)
    return <div class="opera-group">{operaBtns}</div>;
};

const Text = () => {
    return (
        <>
            <CustomNuxtLink type="link" to="/">
                《用户协议》
            </CustomNuxtLink>
            <CustomNuxtLink type="link" to="/">
                《隐私协议》
            </CustomNuxtLink>
            <CustomNuxtLink type="link" to="/">
                《免责声明》
            </CustomNuxtLink>
        </>
    );
};
</script>

<style lang="scss" scoped>
.periphery {
    // width: 100%;
    height: 100vh;
    min-height: 1020px;
    background: #f6faff url("~/assets/imgs/login-bg.png") no-repeat;
    overflow: hidden;
    position: relative;

    .footer3 {
        background: transparent;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
}

.content {
    display: flex;
    box-sizing: border-box;
    background-color: $cfff;
    padding: 20px 40px 20px 20px;
    margin-top: 20px;
    box-shadow: 7px 7px 25px 0px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    position: relative;

    .lions {
        position: absolute;
        top: -70px;
        right: 30px;

        > img {
            width: 72px;
            height: 72px;
        }
    }

    .image-wrap {
        display: flex;
        justify-content: center;
        align-items: center;

        .welcome-image-0 {
            width: 600px;
        }

        .welcome-image-1 {
            width: 600px;
        }
    }

    .img-wrap {
        width: 600px;
        height: 614px;
        margin-right: 40px;
        background: $c999;

        img {
            width: 60px;
            height: 60px;
            background: $cfff;
            box-shadow: 7px 7px 25px 0px rgba(0, 0, 0, 0.05);
            border-radius: 15px;
            border: 1px solid #f2f2f2;
        }
    }

    .main {
        flex: 1;
        padding: 50px 60px;
        .title {
            height: 60px;
            line-height: 60px;
            font-size: 30px;
            font-weight: bold;
            color: $c333;
        }
        .sub-title {
            font-size: 16px;
            color: $c999;
            margin-top: 10px;
            margin-bottom: 20px;
        }
        .main-btn {
            height: 48px;
            margin-top: 20px;
        }
        .opera-group {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
        }
        .to-login {
            flex: 1;
            text-align: center;
            font-size: 14px;
        }
    }
}

.radio-wrap {
    display: flex;
    font-size: 14px;
    .radio {
        display: flex;
        cursor: pointer;
    }
    .radio-icon {
        width: 16px;
        height: 16px;
        border: 1px solid $cdee;
        border-radius: 50%;
        box-sizing: border-box;
    }
    .icon-xuanzhong {
        width: 16px;
        height: 16px;
        color: $c3b8;
    }
    .radio-label {
        cursor: pointer;
        text-indent: 2px;
    }
}

.dialog-text {
    font-size: 16px;
    line-height: 26px;
    span {
        color: $c3b8;
    }
}
</style>
