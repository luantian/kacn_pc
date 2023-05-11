<template>
    <LoginPeriphery :mode="mode"></LoginPeriphery>
</template>

<script lang="ts" setup name="PageLogin">
import { Mode } from "~/utils/enums/LoginEnum";

const mode = ref(Mode.login);

// definePageMeta({
//     layout: "login-wrap",
// });

</script>
