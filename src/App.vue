<script setup lang="ts">
import { ref, computed } from 'vue';
import {Render} from './Demo'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}
</script>

<template>
  <el-config-provider :locale="locale">
    <!-- <router-view></router-view> -->
    <Render/>
  </el-config-provider>
</template>

<style lang="scss">
  @import 'style/common';
</style>
