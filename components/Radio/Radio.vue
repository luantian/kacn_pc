<template>
    <div class="kacn-radio">
        <div class="radio-wrap">
            <div class="radio" @click="onClickRadio">
                <div v-show="!radio" class="radio-icon"></div>
                <div v-show="radio" class="iconfont icon-xuanzhong"></div>
                <div class="radio-label"><slot></slot></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "KacnRadio",
    props: {
        value: {
            type: Boolean,
        },
    },
    model: {
        prop: "value",
        event: "change",
    },
    data() {
        return {
            radio: this.value,
        };
    },
    methods: {
        onClickRadio() {
            this.radio = !this.radio;
            this.$emit("change", this.radio);
        },
    },
    watch: {
        value(newVal) {
            this.radio = newVal
        }
    }
};
</script>

<style lang="scss" scoped>

.radio-wrap {
    display: flex;
    font-size: 14px;
    user-select: none;
    .radio {
        display: flex;
        align-items: center;
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
        color: $c3b8;
    }
    .radio-label {
        cursor: pointer;
        text-indent: 6px;
    }
}

</style>
