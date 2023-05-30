<template>
    <CenterWrap title="个人资料">
        <div class="content">
            <div class="title">
                <img class="user-photo" :src="UserPhoto" alt="user_photo" />
                <div>{{ form.email }}</div>
            </div>
            <el-form
                :model="form"
                size="large"
                style="width: 700px"
                label-width="200px"
            >
                <el-form-item label="电子邮箱">
                    <div>{{ form.email }}</div>
                    <CustomButton class="to-button" @click="toEmailCertified" type="primary" link
                        >去认证 &gt;</CustomButton
                    >
                </el-form-item>
                <el-form-item label="手机号码">
                    <div>{{ form.phone }}</div>
                    <CustomButton class="to-button" @click="toBindPhone" type="primary" link>
                        更换绑定 &gt;</CustomButton
                    >
                </el-form-item>
                <!-- <el-form-item label="性别">
                    <el-radio-group v-model="form.sex">
                        <el-radio label="1" size="large">男</el-radio>
                        <el-radio label="2" size="large">女</el-radio>
                    </el-radio-group>
                </el-form-item> -->
                <el-form-item label="生日">
                    <div>{{ form.birthday }}</div>
                    <CustomButton class="to-button" type="primary" link
                        >更改生日 &gt;</CustomButton
                    >
                </el-form-item>
                <el-form-item label="QQ号码">
                    <CustomInput
                        v-model="form.qq"
                        placeholder="请输入您的QQ号码"
                    ></CustomInput>
                </el-form-item>
                <el-form-item label="微信">
                    <CustomInput
                        v-model="form.wechat"
                        placeholder="请输入您的微信号"
                    ></CustomInput>
                </el-form-item>
                <el-form-item>
                    <CustomButton
                        class="confirm-button"
                        type="primary"
                        round
                        @click="onSubmit"
                        >确认保存</CustomButton
                    >
                </el-form-item>
            </el-form>
            <div class="tool">
                <div class="tool-title">
                    <span class="iconfont icon-dianzan"></span> KA-CN郑重承诺
                </div>
                <ul>
                    <li>我们将尊重您的个人隐私，您的个人信息不会被公开。</li>
                    <li>
                        我们会为您量身定制个性化服务，让您享受优质购物体验。
                    </li>
                </ul>
            </div>
        </div>
    </CenterWrap>
</template>

<script lang="ts" setup name="PersonalInfo">
import UserPhoto from "~/assets/imgs/user_photo.png";

definePageMeta({
    title: "个人资料",
});

interface IForm {
    email: string;
    phone: string;
    sex: 0 | 1;
    birthday: string;
    qq: string;
    wechat: string;
}

const form: IForm = reactive({
    email: "shangwei@kacn.com",
    phone: "15640152831",
    sex: 0,
    birthday: "1999-01-01",
    qq: "133334964",
    wechat: "15640152831",
});

const onSubmit = () => {
    console.log("onSubmit");
};

const toEmailCertified = () => {
    console.log('去邮箱认证')
}

const toBindPhone = () => {
    console.log('去绑定手机号')
}
</script>

<style lang="scss" scoped>

.content {
    border-radius: 10px;
    border: 1px solid $cdee;
    overflow: hidden;

    .title {
        display: flex;
        font-size: 18px;
        align-items: center;
        padding-left: 140px;
        padding-top: 40px;
        padding-bottom: 30px;
        > img {
            margin-right: 10px;
        }
    }
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
        }
        ul {
            display: flex;
            color: $c999;
            padding-left: 20px;
            li {
                flex: 1;
                list-style-type: disc;
            }
        }
    }
}

.to-button {
    margin-left: 20px;
    color: $c3b8;
}

.confirm-button {
    width: 300px;
    height: 50px;
    font-size: 18px;
    border-radius: 100px;
}

.user-photo {
    width: 50px;
    height: 50px;
}
</style>
