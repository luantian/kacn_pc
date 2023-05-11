<template>
    <LoginPeriphery :mode="mode"></LoginPeriphery>
</template>

<script lang="ts" setup name="PageBindKacn">
import { Mode } from "~/utils/enums/LoginEnum";

const mode = ref(Mode.bind);
</script>
