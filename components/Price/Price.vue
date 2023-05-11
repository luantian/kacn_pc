<template>
    <span :class="[type]">
        {{ currency }} {{ sign }}<span>{{ state.value }}</span>{{ after }}
    </span>
</template>

<script lang="ts" setup name="Price">
import { countries } from "~/utils/consts";

interface IProps {
    type?: string;
    after?: string;
    value: number;
}

const props = withDefaults(defineProps<IProps>(), {
    type: "",
    after: "",
    value: 0,
});

const state = reactive({
    value: props.value.toFixed(2)
})

const currency = useCurrency();

const sign = computed(() => {
    return Object.values(countries).find(
        (item) => item.currencyValue === currency.value
    ).sign;
});

</script>

<style lang="scss" scoped>
.warning {
    color: $cf23;
    font-weight: bold;
    font-size: 18px;
}
</style>
