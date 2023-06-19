<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="样式" name="style" >
            <el-form  v-model="formData" label-width="80px" label-position="left">
                <el-form-item label="填充颜色" v-if='!isImg'>
                    <el-color-picker v-model="formData.body.fill" show-alpha/>
                </el-form-item>

                <el-form-item label="边框宽度" v-if='!isImg'>
                    <el-input type="number" v-model="formData.body.strokeWidth"></el-input>
                </el-form-item>

                <el-form-item label="边框颜色" v-if='!isImg'>
                    <el-color-picker v-model="formData.body.stroke" />
                </el-form-item>

                <el-form-item label="边框圆角" v-if='!isImg'>
                    <el-input type="number" v-model="formData.body.rx"></el-input>
                </el-form-item>
              <el-form-item label="图片地址" v-if='isImg'>
                <el-input v-model="formData.image.xlink"></el-input>
              </el-form-item>
              <el-form-item label="上传图片" prop="files">
                <el-upload  action='' :auto-upload='false'  :on-success='handleSuccess'  ref="uploadRef" class="upload-demo" :file-list="formData.files" :multiple="false"
                           :on-change="handleChange">
                  <template #trigger>
                    <el-button type="primary">选择图片</el-button>
                  </template>
                </el-upload>
              </el-form-item>
            </el-form>
        </el-collapse-item>
    </el-collapse>



</template>

<script setup lang="ts">
import PluginAPI from '@/api/plugin'
import { FormInstance, UploadInstance } from "element-plus";
import {ref, reactive, watch, watchSyncEffect, watchEffect} from "vue";
const activeNames = ref("style");
const getPicPlugins = async () => {
  let { data: result } = await PluginAPI.getPicPlugins({"current_page": 1,"per_page": 9999})
  if (result.code === 200) {
    return result.data.data;
  }
}
const formData = reactive({
    body: {
        fill: "",
        strokeWidth: 2,
        stroke: "#000000",
        rx: 6,
        ry: 6
    },
image:{
  fill: "",
  strokeWidth: 2,
  stroke: "#000000",
  rx: 6,
  ry: 6,
  xlink:'',
},
  files:[]
})
const props = defineProps({
    data: {
        type: Object,
        default: () => ({})
    }
})

let isImg=ref(false)
const handleChange =async (file: any, uploadFiles: any) => {
  formData.files = uploadFiles;
  const fd = new FormData()

  fd.append('files', file)
 await PluginAPI.uploadPlugins(fd)
 const res= await getPicPlugins
  console.log(res)
}




watch(() => props.data, (val) => {
    if (!val || JSON.stringify(val) === "{}") return;
  if(val.shape==='rect_img'){
    isImg.value=true
    formData.body = { ...val.attrs.image };
    formData.image.xlink = val.attrs.image['xlink:href'] ;
  }else{
    isImg.value=false
    formData.body = { ...val.attrs.body };
  }
}, { deep: true, immediate: true })

const upImg=()=>{

}
const emit = defineEmits(["onChange",'update:visible', 'submit']);
watch(formData, (val) => {
    // 当自定义属性改变时，传递给Main.vue的style属性
    console.log('BaseNode.Attribute.watch.formData', val)
    if(!val.body.fill){
        val.body.fill="#00000000"
    }
    val.body.ry = val.body.rx;
    emit("onChange", {
        style: { ...val }
    });
}, { deep: true })

</script>

<style lang="scss" scoped>

</style>