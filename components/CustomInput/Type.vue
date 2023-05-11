<template>
    <el-input
        :key="type"
        :class="type"
        v-model="state.valueTemp"
        :show-password="type === Way.password"
        :placeholder="placeholder"
        clearable
    >
        <template #prefix v-if="type === Way.phone">
            <div class="phone-wrap">
                <!-- <div class="phone-sign">+</div> -->
                <CustomSelect v-model="state.selectValue" placeholder=" " class="aaaa">
                    <CustomInput
                        v-model="state.keyword"
                        placeholder="搜索您的国家和地区"
                        clearable
                        @input="onFilter"
                    >
                        <!-- <i
                            slot="suffix"
                            :style="{ color: '#3B8CFE' }"
                            class="el-input__icon el-icon-search"
                        ></i> -->
                    </CustomInput>
                    <el-option
                        v-for="(item, index) in state.tempOptions"
                        :label="item.label"
                        :value="item.internationalPhoneCode"
                        :key="index"
                    >
                        <div class="option-item">
                            <img :src="item.imgUrl" alt="国旗" />
                            <div class="option-name">{{ item.name }}</div>
                            <div class="option-code">
                                {{ item.internationalPhoneCode }}
                            </div>
                        </div>
                    </el-option>
                </CustomSelect>
                <el-divider direction="vertical"></el-divider>
            </div>
        </template>
        <template #prefix v-else>
            <span class="iconfont" :class="`icon-${icons[type]}`"></span>
        </template>
        <template #suffix v-if="type === Way.verifyCode">
            <div class="suffix">
                <div class="divider-wrap">
                    <el-divider direction="vertical"></el-divider>
                </div>
                <CustomButton @click="getVerifyCode" type="primary" link>
                    获取验证码
                </CustomButton>
            </div>
        </template>
    </el-input>
</template>

<script lang="ts" setup name="TypeInput">
import { countries } from "~/utils/consts";

const emits = defineEmits(["cancel", "confirm"]);

enum Way {
    account = "account",
    password = "password",
    verifyCode = "verifyCode",
    phone = "phone",
}

const icons = reactive({
    [Way.account]: "mima",
    [Way.password]: "login_psw",
    [Way.verifyCode]: "login_yzm",
    [Way.phone]: "",
});

interface Props {
    type?: Way;
    value?: string;
    placeholder?: string;
    dropdownWidth?: string;
}

const props = withDefaults(defineProps<Props>(), {
    dropdownWidth: "384px",
});

const { type, value, placeholder } = props;

const state = reactive({
    valueTemp: value,
    options: Object.values(countries),
    tempOptions: Object.values(countries),
    selectValue: "+60",
    keyword: "",
});
const onFocus = (params) => {
    // emits("focus", params);
    console.log("onFocus_params", params);
};
const onBlur = (params) => {
    // emits("blur", params);
    console.log("onBlur_params", params);
};

const onFilter = (val: string) => {
    console.log("val", val);
    if (val) {
        const result = state.options.filter(
            (item) => item.name.indexOf(val) > -1
        );
        console.log("result", result);
        state.tempOptions =
            result.length > 0
                ? result
                : [
                      {
                          name: "empty",
                          label: "empty",
                          internationalPhoneCode: "",
                      },
                  ];
    } else {
        state.tempOptions = state.options;
    }
    console.log("state.tempOptions", state.tempOptions);
};

const getVerifyCode = () => {
    console.log("getVerifyCode");
};
</script>

<style lang="scss" scoped>
.prefix {
    display: flex;
    color: $c666;
}

.suffix {
    display: flex;
    height: 100%;
    padding: 0 15px;
    justify-content: center;
    align-items: center;
}

.account,
.password {
    :deep(.el-input__inner) {
        height: 46px;
        // padding: 0 15px 0 50px;
    }
}
.verifyCode {
    :deep(.el-button) {
        font-weight: normal;
        margin-left: 10px;
    }
    :deep(.el-input__inner) {
        height: 46px;
        // padding: 0 140px 0 50px;
    }
    :deep(.el-input__icon.el-icon-circle-close.el-input__clear) {
        position: absolute;
        right: 110px;
        top: 2px;
    }
}

.phone {
    :deep(.el-input__inner) {
        height: 46px;
        // padding: 0 15px 0 100px;
    }

    :deep(.el-input__prefix) {
        left: 0;
    }
}

.divider-wrap {
    display: flex;
    justify-content: center;
}

.icon-mima {
    position: relative;
    top: 1px;
    font-size: 22px;
}

.icon-login_yzm {
    position: relative;
    top: 2px;
    font-size: 22px;
}

.icon-login_psw {
    position: relative;
    top: 3px;
    font-size: 22px;
    transform: scale(1.1);
}

.phone-wrap {
    .phone-sign {
        position: absolute;
        top: 3px;
        left: 15px;
        color: $c333;
    }
    :deep(.el-input__inner) {
        width: 28px;
        height: 40px;
        border: none;
        padding-left: 0;
        box-shadow: none;
    }
    :deep(.el-form-item.is-error .el-input__wrapper) {
        box-shadow: none;
    }
    :deep(.el-input__wrapper) {
        box-shadow: none !important;
    }
}

.option-item {
    display: flex;
    // justify-content: center;
    align-items: center;
    img {
        display: block;
        width: 20px;
        height: 14px;
    }
    .option-name {
        // flex: 1;
        padding-left: 10px;
        width: 100px;
    }
}

.iconfont {
    color: $c666;
}

:deep(.el-input__suffix) {
    display: flex;
}

:deep(.el-input__suffix-inner) {
    display: flex;
}

// :deep(.el-input__inner) {
//     height: 48px;
// }

:deep(.el-input__prefix) {
    display: flex;
    justify-content: center;
    align-items: center;
    left: 17px;
}
</style>
