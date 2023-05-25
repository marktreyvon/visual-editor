<script setup lang="ts">
import { ref, computed, provide } from 'vue';
import { parseParams } from '@/utils'
import {Render} from './Demo'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { useAuthStore } from '@/store'
 
const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}

const params = parseParams();
console.log('parseParams', params)
let { setTokenInfo, getTokenInfo } = useAuthStore();
setTokenInfo(params);
// 注入参数
provide('params', params);
console.log('token', getTokenInfo())
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
    <!-- <Render/> -->
  </el-config-provider>
</template>

<style lang="scss">
  @import 'style/common';
</style>
