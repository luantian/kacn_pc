<template>
    <div @click.stop>
        <div
            class="currency-select"
            :class="{ 'border-color': viewData.visible, makeStyles: makeStyle }"
            @click="onOpen"
        >
            <img class="currency-img" :src="countryFlag" alt="国旗" />
            <div class="title">{{ country }}/{{ currency }}</div>
            <span
                class="iconfont icon-cooper_bottom"
                :class="iconDirectionClass"
                v-show="isIconShow"
            ></span>
        </div>
        <CustomDialog
            title="选择您的国家和货币"
            v-model="viewData.visible"
            border
            width="600px"
            :modal-append-to-body="false"
            :append-to-body="true"
        >
            <div class="country-dialog-main">
                <CustomForm>
                    <CustomFormItem label="国家" class="_label">
                        <div class="prefix-img-wrap">
                            <img
                                class="prefix-img"
                                :src="
                                    countries[viewData.activeCountry]['imgUrl']
                                "
                                alt="国家"
                            />
                        </div>
                        <CustomSelect
                            class="__country_select"
                            popper-class="__select_country"
                            v-model="viewData.activeCountry"
                            filterable
                            size="large"
                        >
                            <el-option
                                class="country-option"
                                v-for="(item, index) in dataSource"
                                :key="index"
                                :value="item.countryValue"
                                :label="`${item.name}（${item.countryValue}）`"
                            >
                                <div class="__currency_wrap">
                                    <img
                                        class="prefix-img"
                                        :src="
                                            countries[item.countryValue][
                                                'imgUrl'
                                            ]
                                        "
                                        alt="国家"
                                    />
                                    <span class="label"
                                        >{{ item.name }}（{{
                                            item.countryValue
                                        }}）</span
                                    >
                                </div>
                            </el-option>
                        </CustomSelect>
                    </CustomFormItem>
                    <CustomFormItem label="货币" class="_label">
                        <CustomSelect
                            class="__currency_select"
                            v-model="viewData.activeCurrency"
                            filterable
                            size="large"
                        >
                            <el-option
                                v-for="(item, index) in dataSource"
                                :key="index"
                                :value="item.currencyValue"
                                :label="`${item.currency}（${item.currencyValue} ${item.sign}）`"
                            >
                                <div class="__currency_wrap">
                                    <img
                                        class="prefix-img"
                                        :src="
                                            countries[item.countryValue][
                                                'imgUrl'
                                            ]
                                        "
                                        alt="国家"
                                    />
                                    <span class="label"
                                        >{{ item.currency }}（{{
                                            item.currencyValue
                                        }}
                                        {{ item.sign }}）</span
                                    >
                                </div>
                            </el-option>
                        </CustomSelect>
                    </CustomFormItem>
                </CustomForm>
            </div>
            <div slot="footer" class="dialog-footer">
                <CustomButton
                    class="dialog-footer-button"
                    @click="onClose"
                    round
                    >取 消</CustomButton
                >
                <CustomButton
                    class="dialog-footer-button"
                    type="primary"
                    round
                    @click="onConfrim"
                    >确 认</CustomButton
                >
            </div>
        </CustomDialog>
    </div>
</template>

<script lang="ts" setup>


import { useCounter } from "~/store/counter";
import { countries } from "~/utils/consts";

const props = defineProps({
    isIconShow: {
        type: Boolean,
        default: true,
    },
    makeStyle: {
        type: Boolean,
        default: false,
    },
});

const dataSource = Object.values(countries);

const viewData = reactive({
    activeCountry: "USA",
    activeCurrency: "USD",
    visible: false,
});

const iconDirectionClass = computed(() => viewData.visible && "icon-rotate");
const currencySelectColor = computed(() => {
    return { "border-color": viewData.visible };
});

const country = useCountry();
const currency = useCurrency();

const counter = useCounter()

const onClose = () => {
    viewData.visible = false;
};

const onOpen = () => {
    viewData.visible = true;
};

const onConfrim = () => {
    console.log("onConfrim");
};

const countryFlag = computed(() => countries[country.value]["imgUrl"]);

// export default {
//     name: "CurrencySelect",
//     props: {
//         isIconShow: {
//             type: Boolean,
//             default: true,
//         },
//         makeStyle: {
//             type: Boolean,
//             default: false
//         }
//     },
//     data() {
//         return {
//             countries,
//             dataSource: Object.values(countries),
//             visible: false,
//             activeCountry: "USA",
//             activeCurrency: "",
//         };
//     },
//     computed: {
//         // ...mapGetters("currency", ["currency", "country"]),
//         iconDirectionClass() {
//             return this.visible && "icon-rotate";
//         },
//         currencySelectColor() {
//             // return this.visible && "border-color";
//             return { 'border-color': this.visible }
//         },
//         countryFlag() {
//             const { countries, country } = this;
//             return countries[country]["imgUrl"];
//         },
//     },
//     mounted() {
//         this.activeCountry = this.country || "";
//         this.activeCurrency = this.currency || "";
//     },
//     methods: {
//         // ...mapActions("currency", ["setCurrency", "setCountry"]),
//         onOpen() {
//             this.visible = true;
//         },
//         onClose() {
//             this.visible = false;
//         },
//         onConfrim() {
//             const { activeCountry, activeCurrency } = this;
//             this.setCountry(activeCountry);
//             this.setCurrency(activeCurrency);
//             this.onClose();
//         },
//     },
// };
</script>

<style lang="scss" scoped>
.currency-select {
    display: flex;
    position: relative;
    align-items: center;
    // width: 137px;
    height: 40px;
    background: $cf5f;
    border-radius: 20px;
    border: 1px solid $cdee;
    transition: 0.3s;
    cursor: pointer;
    box-sizing: border-box;
    padding: 0 9px;
    .title {
        min-width: 72px;
        text-align: center;
        color: #333;
        font-size: 14px;
    }
    &:hover {
        border: 1px solid #c0c4cc;
    }
}
.makeStyles {
    padding: 0 14px !important;
}
.border-color {
    border: 1px solid #409eff;
}


.prefix-img-wrap {
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
}

.prefix-img {
    display: block;
    width: 24px;
    height: 16px;
    border-radius: 8px;
}

.currency-img {
    display: block;
    width: 24px;
    height: 16px;
    border-radius: 8px;
    margin: 0 5px 0 0;
}

.currency-icon {
    padding: 0 6px;
    position: absolute;
    right: 0;
    transition: 0.3s;
}

.icon-cooper_bottom {
    font-size: 12px;
    transform: scale(0.5) rotateZ(0);
    transition: 0.3s;
}

.icon-rotate {
    transform: scale(0.5) rotateZ(180deg);
}

.country-dialog-main {
    padding: 30px 20px;
    .__currency_select {
        width: 500px;
    }
}

.__country_select {
    width: 500px;
    :deep(.el-input__inner) {
        padding-left: 30px;
    }
}

.__currency_wrap {
    display: flex;
    align-items: center;
    .label {
        text-indent: 10px;
    }
}

:deep(.el-form-item__label) {
    line-height: 40px;
}

.el-select-dropdown__list {
    width: 100px;
}

.dialog-footer {
    border-top: 1px solid $cdee;
    text-align: right;
    padding: 20px;
    &-button {
        width: 120px;
    }
}

// .country-option {
//     width: 100px;
// }
</style>
