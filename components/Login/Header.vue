<template>
    <Container>
        <div class="login-header">
            <div class="logo">
                <img :src="LogoImg" alt="logo" />
            </div>
            <div class="opera" v-if="buttonText[mode]">
                <CustomButton round @click="jumpover">
                    {{ buttonText[mode] }}
                </CustomButton>
            </div>
        </div>
    </Container>
</template>
<script lang="ts" setup name="LoginHeader">
import LogoImg from "~/assets/imgs/KACN-logo.png";
import { Mode } from "~/utils/enums/LoginEnum";
const router = useRouter();

interface IProps {
    mode: Mode.login | Mode.register | Mode.bind;
}

const props = withDefaults(defineProps<IProps>(), {
    mode: Mode.login,
});

const buttonText = {
    [Mode.login]: null,
    [Mode.register]: "返回上一页",
    [Mode.bind]: "跳过",
};

const jumpover = () => {
    switch (props.mode) {
        case Mode.login:
            router.go(-1);
            break;
        case Mode.register:
            router.push({
                path: "/",
            });
            break;
        case Mode.bind:
            break;
    }
};
</script>

<style lang="scss" scoped>
.login-header {
    display: flex;
    align-items: center;
    height: 100px;
    box-sizing: border-box;
    padding-top: 40px;
    justify-content: space-between;
}

.logo {
    img {
        display: block;
        width: 195px;
        height: 60px;
    }
}
</style>
