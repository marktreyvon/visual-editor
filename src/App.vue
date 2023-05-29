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
let { setTokenInfo, getTokenInfo } = useAuthStore();
// ============================ 临时获取token start==============================================
import { useRouter } from "vue-router";
const router = useRouter();
// import axios from '@/api/interceptor/http';
import axios from 'axios'
axios.post('/api/auth/login', {
  email: "admin@thingspanel.cn",
  password: "123456"
}).then(({ data }) => {
    if (data.code === 200) {
      params.token = data.data.access_token;
      params.expiresTime = data.data.expires_in;
      setTokenInfo(params);
      // 注入参数
      provide('params', params);
      router.push({ name: 'editor' });
    }
})
// ============================ 临时获取token end==============================================

// 修改页面标题
document.title = params.title || '大屏编辑器 - ThingsPanel可视化'
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
