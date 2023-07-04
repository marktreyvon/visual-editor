<template>
  <el-drawer :model-value="visible" @close="$emit('update:visible', false)" direction="rtl" class="market-drawer"
    size="1200px" append-to-body :with-header="false">

    <div class="flex h-12 items-center justify-between px-3 border-b border-gray-200">
      <div class="w-36 text-left">
        <el-button :icon="ArrowLeftBold" link @click="$emit('update:visible', false)">返回</el-button>
      </div>
      <span>插件市场</span>
      <div class="w-36 text-right">
      </div>
    </div>

    <Login v-if="!state.isLogined" :submit="onSubmit" />

    <Market v-if="state.isLogined" />
  </el-drawer>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted } from "vue";
import { ArrowLeftBold, HelpFilled } from '@element-plus/icons-vue'
import Login from "./Login.vue"
import Market from "./Market.vue"
import { MarketApi } from "@/api/market";
const props = defineProps<{
  visible: boolean
}>();

const emit = defineEmits<{
  (e: 'update:visible', visible: boolean): void
}>();

const state = reactive({
  isLogined: false
})

onMounted(() => {
  console.log('mounted')
  // 检查登录状态
  MarketApi.checkManager().then(res => {
    state.isLogined = res;
  })
})

// watch(() => props.visible, (v) => {
//   if (v) {
//     getPlugins()
//     getUpdateTotal()
//   }
// })

const onSubmit = () => {
  state.isLogined = true
  console.log('login success')
}

</script>

<style lang="scss" scoped></style>