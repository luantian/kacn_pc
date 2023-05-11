<template>
    <span class="custom-time">
        {{ moment(time).format(format) }}
    </span>
</template>

<script lang="ts" setup>
import moment from "moment";

const slots = useSlots();

interface IProps {
    format?: string;
}

const props = withDefaults(defineProps<IProps>(), {
    format: "YYYY/MM/DD hh:mm:ss"
})

const time = ref(Number(slots.default()[0].children))

</script>
