<template>
    <div class="test">斯蒂芬妮</div>
</template>

<script lang="ts" setup>
import { myContainer } from "~/utils/test/inversify.config";
import { TYPES } from "~/utils/test/types";
import { Warrior } from "~/utils/test/interfaces";

const ninja = myContainer.get<Warrior>(TYPES.Warrior);
console.log(ninja.fight());
console.log(ninja.sneak());
</script>

<style lang="scss" scoped>

</style>
