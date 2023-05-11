<template>
    <nuxt-link
        v-bind="attrs"
        class="custom-nuxt-link"
        :class="[
            `nuxt-link--${type}`,
            `nuxt-link--${size}`,
            {
                'nuxt-link': type && type !== 'link',
                round,
                plain,
                // icon: !!icon,
                solid,
            },
        ]"
    >
        <span class="iconfont prefix-icon" :class="'icon-' + icon" v-if="icon"></span>
        <template v-for="(index, name) in $slots" :slot="name">
            <slot :name="name" />
        </template>
        <span
            class="iconfont"
            :class="'icon-' + suffixIcon"
            v-if="suffixIcon"
        ></span>
    </nuxt-link>
</template>

<script lang="ts" setup>
const attrs = useAttrs();

interface IProps {
    type?: string;
    size?: string;
    icon?: string;
    suffixIcon?: string;
    plain?: boolean;
    round?: boolean;
    solid?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {

})

</script>

<style lang="scss" scoped>


/**
    基础类 开始
*/

.custom-nuxt-link {
    font-size: 14px;
    position: relative;
    .iconfont {
        font-size: inherit;
    }
    .iconfont.icon-HOT {
        color: $cf23;
        // background: $cfff;
        border-radius: 100px;
    }
    .iconfont.icon-NEW {
        color: #00b100;
        // background: $cfff;
        border-radius: 100px;
    }
    .iconfont.icon-SALE {
        color: #007aff;
        // background: $cfff;
        border-radius: 100px;
    }
}

.nuxt-link {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    // background: $cfff;
    border: 1px solid $cdee;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: 0.1s;
    font-weight: 400;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus {
        color: $c3b8;
        border-color: #c4ddff;
        background-color: #ebf4ff;
    }
    &--undefined {
        transition: 0.1s;
        cursor: pointer;
        &:hover,
        &:focus {
            color: $c3b8;
        }
    }
    &--primary {
        color: $cfff;
        background-color: $c3b8;
        border-color: $c3b8;
        &:hover,
        &:focus {
            background-color: #62a3fe;
            border-color: #62a3fe;
            color: $cfff;
        }
        &.plain {
            color: $c3b8;
            background: #ebf4ff;
            border-color: #b1d1ff;
            &:hover,
            &:focus {
                background: $c3b8;
                border-color: $c3b8;
                color: $cfff;
            }
        }
    }

    &--bare-primary {
        border-color: $c3b8;
        color: $c3b8;
        background: 0 0;
        &:hover,
        &:focus {
            color: #62a3fe;
            border-color: #62a3fe;
            background-color: #ecf5ff;
        }
    }

    &--text,
    &--link {
        border-color: transparent;
        color: $c3b8;
        background: 0 0;
        padding-left: 0;
        padding-right: 0;
        &:hover,
        &:focus {
            color: #62a3fe;
            border-color: transparent;
            background-color: transparent;
        }
    }

    &--tag {
        color: $c333;
        background-color: $cf5f;
        border-color: transparent;
        &:hover,
        &:focus {
            background-color: #eaeaea;
            border-color: #eaeaea;
            color: $c333;
        }
    }

    &--big {
        width: 300px;
        border-radius: 100px;
        font-size: 18px;
        font-weight: normal;
        &.round {
            padding: 15px;
        }
    }

    &--small {
        padding: 8px 15px;
        &.round {
            border-radius: 20px;
            padding: 8px 15px;
        }
    }

    &--mini {
        padding: 6px 15px;
        &.round {
            border-radius: 20px;
            padding: 6px 15px;
        }
    }
    &--vip {
        border-color: transparent;
        color: $cf4e;
        background: 0 0;
        padding-left: 0;
        padding-right: 0;
        &:hover,
        &:focus {
            color: $cf4e;
            border-color: transparent;
            background-color: transparent;
            text-decoration: underline;
        }
    }
}
.icon {
    border-radius: 20px;
    padding: 12px 23px;
    background-color: transparent;
    &:hover,
    &:focus {
        background-color: transparent;
        border-color: $c3b8;
        color: $c3b8;
    }
}
.plain {
    // border-radius: 20px;
    padding: 12px 23px;
    &:hover,
    &:focus {
        background: transparent;
        border-color: $c3b8;
        color: $c3b8;
    }
}
.round {
    border-radius: 100px;
    padding: 12px 23px;
}
.solid {
    background: $cf5f;
    box-sizing: border-box;
    text-align: center;
    // .ellipsis();
    transition: 0.1s;
    &:hover,
    &:active,
    &:focus {
        color: $cfff;
        background: $c3b8;
    }
}

.suffix-img {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    img {
        width: 18px;
        height: 18px;
    }
}

.prefix-icon {
    margin-right: 4px;
}


</style>
