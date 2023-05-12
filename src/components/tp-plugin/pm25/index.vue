<template>
  <gauge></gauge>
</template>

<script setup lang="ts">
import { inject } from "vue";
import Gauge from "./components/Gauge.vue";
inject("getGraph", "getNode")
</script>

<style lang="scss" scoped>

</style>