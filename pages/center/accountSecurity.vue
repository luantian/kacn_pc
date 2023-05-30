<template>
    <CenterWrap title="账号安全">
        <div class="content">
            <div class="note">
                <span class="iconfont icon-tips_bg_wran_blue"></span>
                <span>上次登录时间：2020.08.09 00:00:01 非本人登录？</span>
                <CustomNuxtLink type="link" @click="toChangePassword">修改密码 &gt;</CustomNuxtLink>
            </div>

            <ul>
                <li v-for="(item, index) in state.dataSource" :key="index">
                    <div>
                        <span v-if="false" class="iconfont icon-tips_bg_wran_orange"></span>
                        <span v-else class="iconfont icon-tips_bg_success_green"></span>
                        <span class="title">{{ item.title }}</span>
                        <span class="sub-title">{{ item.subTitle }}</span>
                    </div>
                    <CustomButton
                        class="opera-btn"
                        :type="item.btnType"
                        round
                        @click="item.fn"
                        >{{ item.btn }}</CustomButton
                    >
                </li>
            </ul>

            <div class="tool">
                <div class="tool-title">
                    <span class="iconfont icon-dianzan"></span> 认证优势
                </div>
                <ul>
                    <li>完成认证，可以申请Vip会员，享受会员折扣；</li>
                    <li>完成认证，可提升系统发货额度，享受发货超时赔付；</li>
                    <li>完成认证，提升账户信誉度，避免消费二次审核；</li>
                    <li>完成认证，升级Vip，享受7天无理由退换货服务；</li>
                </ul>
            </div>
        </div>
    </CenterWrap>
</template>

<script lang="ts" setup name="AccountSecurity">
definePageMeta({
    title: "账号安全",
});

interface dataSourceItem {
    title: string;
    subTitle: string;
    btn: string;
    btnType: string;
    fn?: Function;
}

interface IState {
    dataSource: dataSourceItem[];
}

// 去修改密码
const toChangePassword = () => {
    console.log('去修改密码');
};
// 去绑定手机
const toBindPhone = () => {
    console.log('去绑定手机');
};
// 去绑定邮箱
const toBindEmail = () => {
    console.log('去绑定邮箱');
};
// 去银行卡认证
const toBindBank = () => {
    console.log('去银行卡认证');
};
// 去实名认证
const toRealName = () => {
    console.log('去实名认证');
};

const state: IState = reactive({
    dataSource: [
        {
            title: "登录密码",
            subTitle: "建议您定期更改密码，设置安全性高的密码可以使账户更安全",
            btn: "修改密码",
            btnType: "bare",
            fn: toChangePassword,
        },
        {
            title: "手机绑定",
            subTitle: "可以通过手机找回密码和验证身份",
            btn: "去绑定",
            btnType: "primary",
            fn: toBindPhone,
        },
        {
            title: "邮箱认证",
            subTitle: "可以通过邮箱登录和找回密码",
            btn: "去认证",
            btnType: "primary",
            fn: toBindEmail,
        },
        {
            title: "银行卡认证",
            subTitle: "可以对所使用的银行卡进行认证",
            btn: "去看看",
            btnType: "bare",
            fn: toBindBank,
        },
        {
            title: "实名认证",
            subTitle: "可以对您的会员账户进行实名认证",
            btn: "未开通",
            btnType: "default",
            fn: toRealName,
        },
    ],
});



</script>

<style lang="scss" scoped>
.content {
    border-radius: 10px;
    border: 1px solid $cdee;
    overflow: hidden;
    .note {
        border: 1px solid #96c1fe;
        border-radius: 4px;
        margin: 20px;
        padding: 10px 20px;
        background-color: #f0f6ff;
        .iconfont {
            color: $c3b8;
            margin-right: 10px;
        }
    }

    > ul {
        padding: 0 40px;
        > li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px dashed #dee3eb;
            padding: 20px 0;

            .iconfont {
                font-size: 18px;
                margin-right: 20px;
            }

            .icon-tips_bg_wran_orange {
                color: $cf23;
            }

            .icon-tips_bg_success_green {
                color: $c00b;
            }

            .title {
                font-size: 18px;
                display: inline-block;
                width: 120px;
            }

            .sub-title {
                color: $c999;
            }
            .opera-btn {
                width: 100px;
            }
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
</style>
