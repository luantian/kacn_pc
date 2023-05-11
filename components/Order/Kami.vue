<template>
    <ul class="kami" v-if="categoryFvs.length">
        <li class="item" v-for="(cards, index) in categoryFvs" :key="index">
            <div class="header">
                <div class="index">{{ index + 1 }}</div>
                <div class="title">查看卡密</div>
                <div class="info">
                    <span class="label">面值：</span>
                    <span class="value">{{ cards[0].fv }}元</span>
                </div>
                <div class="info">
                    <span class="label">数量：</span>
                    <span class="value">{{ cards.length }}</span>
                </div>
                <div class="info">
                    <span class="label">充值有效期：</span>
                    <Time class="value">{{ cards[0].EXPDate * 1000 }}</Time>
                </div>
            </div>
            <OrderKamiToggle :count="cards.length">
                <div class="content">
                    <div
                        class="content-item"
                        v-for="(card, idx) in cards"
                        :key="idx"
                    >
                        <div class="sign">第{{ idx + 1 }}张</div>
                        <div class="wrap">
                            <OrderCopy
                                class="spacing"
                                label="卡号"
                                :value="card.cardId"
                            ></OrderCopy>
                            <OrderCopy
                                label="密码"
                                :value="card.cardPassword"
                            ></OrderCopy>
                        </div>
                    </div>
                </div>
            </OrderKamiToggle>
        </li>
    </ul>
</template>

<script lang="ts" setup name="OrderKami">
import { groupBy } from "lodash";
import { IGood } from "~/service/Good/Interface";

interface IProps {
    dataSource: IGood[];
}

const props = withDefaults(defineProps<IProps>(), {

});

const state = reactive({
    visible: false,
});

const categoryFvs = computed(() => {
    const key: string = "fv";
    console.log('props.dataSource', groupBy(props.dataSource, key))
    return Object.values(groupBy(props.dataSource, key)).sort(
        (a: any, b: any) => b[0][key] - a[0][key]
    );
});

/*
export default {
    name: "Kami",
    props: {
        dataSource: {
            type: Array,
            default: () => {
                return [
                    {
                        cardId: "默认卡号",
                        password: "默认卡号",
                        fv: 100,
                        EXPDate: "默认时间",
                    },
                ];
            },
        },
    },
    data() {
        return {
            visible: false,
        };
    },
    computed: {
        categoryFvs() {
            const key = 'fv';
            return Object.values(groupBy(this.dataSource, key)).sort((a, b) => b[0][key] - a[0][key]);
        },
    },
};

*/
</script>

<style lang="scss" scoped>
.item {
    border: 1px solid $cdee;
    border-radius: 10px;
    padding: 20px 20px 0 20px;
    margin-bottom: 20px;
    .header {
        display: flex;
        align-items: center;
        .index {
            width: 26px;
            height: 26px;
            line-height: 26px;
            text-align: center;
            color: $cfff;
            font-size: 18px;
            background: $c3b8;
            border-radius: 6px;
        }
        .title {
            font-size: 16px;
            color: $c333;
            font-weight: bold;
            margin-left: 10px;
        }

        .info {
            margin-left: 30px;
            .label {
                color: $c999;
            }

            .value {
                color: $c333;
            }
        }
    }
    .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: 10px;
        .content-item {
            position: relative;
            box-sizing: border-box;
            min-width: 470px;
            border: 1px solid $cdee;
            margin-bottom: 20px;
            .sign {
                position: absolute;
                top: 10px;
                width: 80px;
                height: 22px;
                line-height: 22px;
                text-align: center;
                color: $c3b8;
                background-color: #e7f1ff;
                border-radius: 0px 12px 12px 0px;
                font-size: 12px;
            }

            .wrap {
                padding: 52px 20px 20px;
                .spacing {
                    margin-bottom: 10px;
                }
            }
        }
    }
}
</style>
