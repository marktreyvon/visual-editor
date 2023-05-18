<template>
    <div class="container" style="width=100%; height=100%">
        <div :id="Common.DEFAULT_VIEW_CONTAINER_ID"></div>
        <TeleportContainer />
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import * as Common from "@/common";
</script>

<style lang="scss" scoped></style>