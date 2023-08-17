<template>
  <el-dialog v-model="dialogVisible" title="分享" width="800px">
    <el-form  label-width="120" label-position="top" >
      <el-form-item label="分享链接">
        <el-row class="w-full ml-6" >
            <el-col :span="20">
                <el-input v-model="data.shareUrl" readonly></el-input>
            </el-col>
            <el-col :span="4">
                <el-button id="share-btn" @click="handleCopyShareUrl">复制链接</el-button>
            </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="是否需要密码">
        <el-row class="w-full">
            <el-col :span="8">
                <el-radio-group v-model="data.needPass" disabled>
                    <el-radio label="0" size="large">不需要密码</el-radio>
                    <el-radio label="1" size="large">需要密码</el-radio>
                  </el-radio-group>
            </el-col>
            <el-col class="flex items-center" :span="4" >
                <el-input style="width: 120px" v-if="data.needPass === '1'"></el-input>
            </el-col>
        </el-row>
        
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup lang="ts">
import Clipboard from 'clipboard'
import { message } from '@/utils/tool'
import { ref, reactive, computed, inject, onMounted } from "vue";
const params: any = inject("params", null)
const localUrl = import.meta.env.VITE_BASE_URL  || document.location.origin;

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:visible'])
const dialogVisible = computed({
    get() {
        return props.visible
    },
    set(val) {
        emit("update:visible", val)
    }
})

const data = reactive({
  shareUrl: '',
  needPass: "0"
})
onMounted(() => {
    console.log('ShareForm.params', localUrl)

    data.shareUrl = `${localUrl}/share/${params?.id || ""}`
});
const handleCopyShareUrl = () => {
    var clipboard = new Clipboard('#share-btn', {
        text:function(){
            return data.shareUrl
        },
    });
    clipboard.on('success', () =>{
        message.success('分享链接已复制到粘贴板')
    });
}



</script>

<style lang="scss" scoped>

</style>