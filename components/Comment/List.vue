<script>
import {
    CommentStatus,
    CommentButtonTypes,
} from "@/utils/CommentConst";

export default {
    name: "CommentList",
    props: {
        dataSource: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {};
    },
    render() {
        const { dataSource, $routerPath } = this;
        if (dataSource.length === 0) {
            return <WakeComment></WakeComment>;
        }
        const listItems = dataSource.map((item) => {
            const goods = item.goods.map((good) => {
                return (
                    <div class="order-goods">
                        <div class="goods-img">
                            <img src={good.imgUrl} />
                        </div>
                        <div class="goods-info">
                            <div class="goods-name">{good.name}</div>
                            <div class="goods-price">面值：{good.price}</div>
                        </div>
                        <div class="goods-count">x {good.count}</div>
                    </div>
                );
            });

            const status = CommentStatus[item.commentStatus];
            const buttonText = CommentButtonTypes[status].label;
            const buttonType = CommentButtonTypes[status].type;
            const orderGoodCount = item.goods.length;
            const infoOtherClsName = orderGoodCount === 1 && "len1";

            const to = $routerPath.order.detail(item.orderId)

            return (
                <li class="order-item">
                    <div class="order-header">
                        <div class="time">{item.time}</div>
                        <div class="order-id">
                            订单编号: <CustomNuxtLink class="order-id-text" to={to}>{item.orderId}</CustomNuxtLink>
                        </div>
                    </div>
                    <div class="order-content">
                        <div class="goods-wrap">{goods}</div>
                        <div class={"info " + infoOtherClsName}>
                            <div class={"info-price " + infoPriceOtherClsName}>
                                <div>
                                    <Price value={item.totalPirce}></Price>
                                </div>
                                <div class="commission">
                                    （含手续费：<Price value={item.commission}></Price>
                                    ）
                                </div>
                            </div>
                        </div>
                        <div class="opera">
                            <div class="opera-button-wrap">
                                <CustomNuxtLink
                                    class="opera-button"
                                    type={buttonType}
                                    round
                                    size="mini"
                                    to={to}
                                >
                                    {buttonText}
                                </CustomNuxtLink>
                            </div>
                        </div>
                    </div>
                </li>
            );
        });

        return (
            <div>
                <ul class="order-list">{listItems}</ul>
            </div>
        );
    },
};
</script>

<style lang="scss" scoped>
.order-list {
    .order-item {
        margin-top: 10px;
        border: 1px solid $cdee;
        border-radius: 10px;
        overflow: hidden;
    }
    .order-header {
        display: flex;
        height: 40px;
        line-height: 40px;
        background-color: $cf5f;
        border-bottom: 1px solid $cdee;
        .time,
        .order-id {
            font-size: 12px;
            color: $c333;
            padding-left: 20px;
            &-text {
                font-size: 12px;
            }
        }
    }

    .order-goods {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        .goods-img {
            width: 70px;
            height: 70px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 10px;
            }
        }

        .goods-info {
            .goods-name {
                padding: 10px;
                width: 230px;
                box-sizing: border-box;
                color: $c333;
                // .ellipsis();
                &:hover {
                    color: $c3b8;
                }
            }
            .goods-price {
                padding: 8px 10px;
                color: $c666;
            }
        }

        .goods-count {
            width: 50px;
            justify-content: center;
            margin-left: 60px;
        }
    }

    .order-content {
        display: flex;
        .goods-wrap {
            flex: 9;
            min-width: 450px;
            padding: 10px 0;
            border-right: 1px solid $cdee;
        }

        .info {
            display: flex;
            flex: 7;
            min-width: 330px;
            border-right: 1px solid $cdee;
            &.len1 {
                justify-content: center;
                align-items: center;
            }
            .info-status {
                flex: 13;
                text-align: center;
                &.len1 {
                    justify-content: center;
                    align-items: center;
                }
                &.lenNo1 {
                    padding-top: 46px;
                }
            }
            .info-price {
                flex: 22;
                text-align: center;
                &.len1 {
                    justify-content: center;
                    align-items: center;
                }
                &.lenNo1 {
                    padding-top: 34px;
                }
                .commission {
                    font-size: 12px;
                    color: $c666;
                    margin-top: 4px;
                }
            }
        }
        .opera {
            flex: 4;
            min-width: 200px;
            text-align: center;
            .opera-button-wrap {
                .opera-button {
                    width: 100px;
                }
                margin-top: 32px;
                // margin-bottom: 16px;
            }
        }
    }
}
</style>
