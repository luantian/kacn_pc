<template>
    <div class="copy">
        <div class="label">{{ label }}</div>
        <div class="value">{{ value }}</div>
        <div class="btn">
            <CustomButton
                class="copy-button"
                type="primary"
                round
                @click="onCopy"
                >复制</CustomButton
            >
        </div>
    </div>
</template>

<script lang="ts" setup name="OrderCopy">
import { ElMessage } from 'element-plus'

interface IProps {
    label: string;
    value: string;
}

const props = withDefaults(defineProps<IProps>(), {
    label: "",
    value: "",
});

const onCopy = async () => {
    const { value } = props;
    try {
        await navigator.clipboard.writeText(value);
        ElMessage.success({
            message: "复制成功",
        });
        console.log("Content copied to clipboard");
    } catch (err) {
        console.error("Failed to copy: ", err);
    }
};

/*
export default {
    name: "Copy",
    props: {
        label: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
    },
    methods: {
        async onCopy() {
            const { value } = this;
            try {
                await navigator.clipboard.writeText(value);
                Message.success({
                    message: '复制成功',
                })
                console.log("Content copied to clipboard");
            } catch (err) {
                console.error("Failed to copy: ", err);
            }
        },
    },
};
*/
</script>

<style lang="scss" scoped>
.copy {
    display: flex;
    height: 28px;
    .label {
        display: flex;
        align-items: center;
        color: $c999;
    }
    .value {
        display: flex;
        flex: 1;
        align-items: center;
        background-color: $cf5f;
        margin: 0 10px;
        text-indent: 5px;
    }

    .btn {
        min-width: 50px;
        .copy-button {
            padding-top: 6px;
            padding-bottom: 6px;
        }
    }
}
</style>
