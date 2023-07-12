<script setup lang="ts">
import { ref, computed, provide } from 'vue';
import { parseParams } from '@/utils'
import { Render } from './Demo'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { useAuthStore } from '@/store'
import { useRouter } from "vue-router";
import http from 'axios'

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 成功了')
  }, 1000);
})
 
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise success')
  }, 500);
})
 
let p3 = Promise.reject('Promise 失败')
 
Promise.all([p1, p2, p3]).then((result) => {
  console.log(result)               //['成功了', 'success']
}).catch((error) => {
  console.log(error)
})

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}

const params = parseParams();
let { setTokenInfo, getTokenInfo } = useAuthStore();

// ============================ 临时获取token start==============================================
const getTokenInfoByAPI = async () => {
  const router = useRouter();
  let { data: result } = await http.post('/api/auth/login', {
    email: "admin@thingspanel.cn",
    password: "123456"
  })
  if (result.code === 200) {
    params.token = result.data.access_token;
    params.expiresTime = result.data.expires_in;
    setTokenInfo(params);
    // 注入参数
    provide('params', params);
    router.push({ name: 'editor', query: { id: params.id } });
  }
}

if (import.meta.env.MODE === 'development') {
  const tokenInfo = getTokenInfo();
  if (tokenInfo.token) {
    // 注入参数
    provide('params', params);
  } else {
    getTokenInfoByAPI();
  }
} else if (!params.mode) {
  console.log('App.params', params)
  setTokenInfo(params);
  // 注入参数
  provide('params', params);
}


// ============================ 临时获取token end==============================================

// 修改页面标题
document.title = params.title || '可视化编辑器 - ThingsPanel'
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
