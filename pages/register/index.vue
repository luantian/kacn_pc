<template>
    <LoginPeriphery :mode="mode"></LoginPeriphery>
</template>

<script lang="ts" setup name="PageLoginPeriphery">

import { Mode } from "~/utils/enums/LoginEnum";

const mode = ref(Mode.register)

</script>