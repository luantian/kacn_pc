<template>
    <div>123</div>
</template>

<script lang="ts" setup>
// import 'reflect-metadata';
// import { Container, injectable, inject } from "inversify";

import { myContainer } from "~/service/inversify.config";
import { TYPES } from "~/service/types";
import { Warrior } from "~/service/interfaces";

// 通过container的get<T>方法来创建实例
const ninja = myContainer.get<Warrior>(TYPES.Warrior);
console.log(ninja.fight()); // cut!
console.log(ninja.sneak()); // hit!

</script>
