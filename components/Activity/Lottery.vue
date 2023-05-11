<template>
    <div>
        <CustomDialog :visible.sync="visible" width="500px" header_hidden :before-close="beforeClose">
            <div class="lottery">
                <div class="lottery-header">
                    <img class="img" src="~/assets/imgs/lottery-header.png" alt="lottery-header">
                </div>
                <div class="content">
                    <div class="title">恭喜您，获得<span>1</span>次抽奖机会</div>
                    <div class="prizes">
                        <div class="item" :class="{ active: actives.includes(index) }" @click="onActive(item, index)"
                             v-for="(item, index) in prizes" :key="index">
                            <div class="box">
                                <div class="font">{{ item.name }}</div>
                                <div class="back">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="note">
                        <div class="note-title">抽奖规则</div>
                        <div class="note-content">
                            <h3>一、活动玩法：</h3>
                            <p>（1）活动期间，成功支付且订单满5美金，即可获得一次抽奖机会，最高可免单</p>
                            <p>（2）每笔符合条件的订单，均可参与抽奖，订单越多抽奖次数越多</p>
                            <h3>二、活动奖品：（具体奖品以当日抽中的奖项为主）</h3>
                            <p>（1）元宝：元宝是您参与KA-CN活动获得的虚拟奖励，当前元宝暂可用于下单时直接抵扣一定面值的现金。之后会陆续推出其他兑换方式，请以具体活动规则和内容为主</p>
                            <p>（2）免单：抽中免单奖品的用户，请联系KA-CN在线客服，为您退还支付的相应金额</p>
                            <h3>三、中奖资格的排除：</h3>
                            <p>
                                （1）活动过程中如发现您有碍其他用户公平参加本活动或违反本活动目的之行为的（包括但不限于作弊领取、机器恶刷、恶意套现、恶意退单等），KA-CN有权取消您参加本次活动的资格或您因参加活动所获商品或因此享有的所有权益；</p>
                            <p>
                                （2）任何人通过不正当手段获得本次活动利益的，KA-CN有权撤销用户所获利益并要求赔偿相关损失。</p>
                            <p>
                                （3）KA-CN可以根据本次活动的实际举办情况对活动规则变更或调整，相关变动或调整将公布再活动页面上，并于公布时即时生效</p>
                            <h3>特别说明：</h3>
                            <p>1、所有中奖奖品不可兑换现金，不可退换，不可转让他人使用</p>
                            <p>2、活动中有任何疑问，可联系在线客服帮您解答</p>
                        </div>
                    </div>
                </div>
                <div class="close" @click="close"></div>
            </div>
        </CustomDialog>
        <CustomDialogConfirm :visible.sync="visible2" cancelText="取消" confirmText="确认" @confirm="onConfirm"
                             @cancel="onCancel" :before-close="beforeClose2">
            <template #title>是否要放弃抽奖机会？</template>
        </CustomDialogConfirm>
        <CustomDialog header_hidden :visible.sync="visible3" width="500px">
            <div class="lottery">
                <div class="lottery-header">
                    <img class="img" src="~/assets/imgs/lottery-success.png" alt="lottery-header">
                </div>
                <div class="content">
                    <div class="title">恭喜您抽中<span>10个元宝</span></div>
                    <p class="sub-title">已存入您账户中，可在"用户中心"中查看</p>
                    <div class="btns">
                        <CustomButton class="btn" @click="close3">我知道了</CustomButton>
                    </div>
                </div>
                <div class="close" @click="close3"></div>
            </div>
        </CustomDialog>
    </div>

</template>

<script>
export default {
    name: 'Lottery',
    data() {
        return {
            actives: [],
            visible: false,
            visible2: false,
            visible3: false,
            prizes: [
                {
                    name: '未中奖',
                    type: 1,
                },
                {
                    name: '金币',
                    type: 2,
                },
                {
                    name: '优惠卷',
                    type: 3,
                },
                // {
                //     name: '元宝',
                //     type: 4,
                // },
                // {
                //     name: '元宝翻倍',
                //     type: 5,
                //     val: 3
                // }
                // {
                //     name: '免单',
                //     type: 6,
                // }
            ]
        }
    },
    methods: {
        onActive(item, index) {
            if (this.actives.length === 0) {
                this.actives.push(index)
                setTimeout(() => {
                    this.prizes.map((item, index) => {
                        this.actives.push(index);
                    })
                }, 1000);
                setTimeout(() => {
                    this.visible3 = true;
                    this.visible = false;
                    this.visible2 = false;
                }, 3000)
            }
        },
        open() {
            this.visible = true
        },
        close() {
            // this.visible = false
            this.visible2 = true
        },
        onConfirm() {
            this.visible = false
            this.visible2 = false
        },
        onCancel() {
            this.visible2 = false
        },
        beforeClose() {
            this.visible2 = false
        },
        beforeClose2(done) {
            done();
        },
        close3() {
            this.onConfirm();
            this.visible3 = false
        }
    }
}
</script>

<style lang="scss" scoped>
.lottery {
    width: 500px;
}

.lottery-header {
    width: 100%;
    height: 100%;
    position: relative;
    top: -30px;

    > img {
        width: 100%;
        height: 100%;
    }
}

.content {
    perspective: 750px;
    padding: 0 20px 20px;
}

.title {
    font-weight: bold;
    font-size: 24px;
    color: $c333;
    text-align: center;
    padding-bottom: 30px;

    > span {
        color: $cf23;
    }
}

.sub-title {
    color: $c333;
    font-size: 14px;
    text-align: center;
}

.prizes {
    display: flex;
    justify-content: space-between;
}

.item {
    width: 140px;
    height: 170px;
    perspective: 500px;
}

.item.active .box {
    transform: rotateY(180deg);
}

.box {
    position: relative;
    width: 100%;
    height: 100%;
    transition: all .8s;
    transform-style: preserve-3d;
    background-size: 100% 100%;
}


.font, .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.font {
    background: url("~/assets/imgs/lotttery_0.png") no-repeat;
    background-size: 100% 100%;
}

.back {
    transform: rotateY(180deg);
}

.note {
    position: relative;
    border: 1px solid #FFEAB1;
    background: #FFF7D5;
    color: #FF6000;
    padding: 20px 15px;
    font-size: 12px;
    border-radius: 6px;
    line-height: 20px;
    margin-top: 45px;

    &-title {
        position: absolute;
        top: -16px;
        left: -1px;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: $cfff;
        background: linear-gradient(90deg, #FFB208 0%, #FF873E 100%);
        border-radius: 0 15px 15px 0;
    }

    &-content {
        height: 176px;
        overflow: auto;
    }
}

.btns {
    text-align: center;
    padding-top: 30px;
    .btn {
        width: 150px;
        height: 34px;
        line-height: 34px;
        padding: 0;
        background: linear-gradient(90deg, #FE6152 0%, #FD3B40 100%);
        border-radius: 17px;
        color: $cfff;
    }
}

.close {
    position: absolute;
    top: -40px;
    right: -40px;
    width: 40px;
    height: 40px;
    background: url("~/assets/imgs/lottery_close.png") no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}

</style>
