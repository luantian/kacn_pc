<template>
    <div class="count">
        <label>
            <span class="reduce" @click="reduce"></span>
        </label>
        <input type="number" onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))" @keyup.enter="keyEnter"
            v-model="num" @change="change" @blur="blurInput">
        <label>
            <span v-if="max > 1" class="plus" ref="btn" @click="plus"></span>
            <span v-else class="maxNum"></span>
        </label>
    </div>
</template>

<script>
export default {
    name: "InputNumber",
    data() {
        return {
            num: '',
            carX: 0,//购物车坐标
            carY: 0,//购物车坐标
            carW: 0,//购物车宽度
        }
    },
    props: {
        value: {
            type: Number,
            default: 1
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 999
        },
        goodsType: {
            type: Array,
            default: () => []
        },
        radio: {
            type: Number,
            default: 0
        },
        faceIndex: {
            type: Number,
            default: 0
        },
        click: {
            type: Boolean,
            default: true
        },
    },
    created() {
        this.inspect();
    },
    mounted() {

    },
    methods: {
        reduce() {
            if (this.num > this.min) {
                this.num--;
                this.$emit('input', this.num);
            }
            if (this.num == 0) {
                setTimeout(() => {
                    this.goodsType[this.radio].faceVlaue[this.faceIndex].active = false
                }, 0);
            }
        },
        plus() {
            if (this.num < this.max) {
                this.num++;
                this.$emit('input', this.num);
            }
            if (this.value >= this.max) {
                this.$message({
                    message: '超出购买数量',
                    type: 'error',
                    // duration: 0
                });
            }
            this.clickPlus()
        },
        clickPlus() {
            if (this.click && this.max > this.value) {
                // 获取购物车位置信息
                const carRect = document.querySelector('.js_goods_PriceShop').getBoundingClientRect()
                this.carX = carRect.left
                this.carY = carRect.top
                this.carW = carRect.width
                const div = document.createElement('div')
                div.className = 'add'
                div.innerHTML = ` <span class="iconAdd"></span>`
                document.body.appendChild(div)
                // 获取初始位置信息
                const btnRect = this.$refs.btn.getBoundingClientRect()
                const left = btnRect.left, top = btnRect.top - btnRect.height
                const x = this.carX + this.carW / 2 - btnRect.width / 2 - left, y = this.carY - btnRect.height - top + this.carW / 2 + btnRect.height / 2
                div.style.setProperty('--left', `${left}px`);
                div.style.setProperty('--top', `${top}px`);
                div.style.setProperty('--x', `${x}px`);
                div.style.setProperty('--y', `${y}px`);
                // 动画结束清除div
                div.addEventListener('animationend', () => {
                    div.remove()
                })
            }
        },
        change() {
            if (this.num > this.max) {
                this.num = this.max;
                this.$message({
                    message: '超出购买数量',
                    type: 'error',
                    // duration: 0
                });
            }
            if (this.num < this.min) this.num = this.min;
        },
        // 计算数量 失去焦点
        blurInput() {
            this.goodsType[this.radio].faceVlaue[this.faceIndex].num = Number(this.num)
            this.$emit('blurInput')
            if (this.num == 0) {
                this.goodsType[this.radio].faceVlaue[this.faceIndex].active = false
            } else {
                this.clickPlus()
            }
        },
        keyEnter(e) {
            e.srcElement.blur(); // 让输入框主动失焦
        },
        inspect() {
            //判断用户传递的传递的初始值是否合规
            if (this.value > this.max) {
                this.num = this.max
            } else if (this.value < this.min) {
                this.num = this.min
            } else {
                this.num = this.value
            }
        }
    },
    watch: {
        value(newVal) {
            this.num = newVal
        }
    }
}
</script>

<style lang="scss">
.count {
    width: 102px;
    height: 24px;
    line-height: 24px;
    display: flex;
    cursor: pointer;
}

.count label {
    cursor: pointer;
}

.count .reduce {
    width: 24px;
    height: 24px;
    background: url(~assets/imgs/icon/num_reduce_hover.svg) no-repeat center;
    display: block;
}

.count .plus {
    width: 24px;
    height: 24px;
    background: url(~assets/imgs/icon/num_add_hover.svg) no-repeat center;
    display: block;
}

.count .maxNum {
    width: 24px;
    height: 24px;
    background: url(~assets/imgs/icon/num_add_gray.svg) no-repeat center;
    display: block;
    cursor: no-drop;
    // pointer-events: none;
}

.count input {
    display: inline-block;
    width: 54px;
    height: 24px;
    border: none;
    box-sizing: border-box;
    text-align: center;
    font-size: 18px;
    color: #333;
    background: transparent;
    outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
}

/* chrome */

input[type="number"] {
    -moz-appearance: textfield;
}

/* firefox */
.add {
    position: fixed;
    left: var(--left);
    top: var(--top);
}

.iconAdd {
    display: block;
    width: 24px;
    height: 24px;
    background: url(~assets/imgs/icon/num_add_hover.svg) no-repeat center;
}

@keyframes moveY {
    to {
        transform: translateY(var(--y));
    }
}

.add {
    animation: moveY 0.5s cubic-bezier(0.5, -0.5, 1, 1);
}

@keyframes moveX {
    to {
        transform: translateX(var(--x));
    }
}

.iconAdd {
    animation: moveX 0.5s linear;
}
</style>