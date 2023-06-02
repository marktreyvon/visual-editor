<template>
    <div class="relative w-full">
        <div class="absolute w-64 text-left pl-6">
            <el-icon class="align-middle" :size="20">
                <House />
              </el-icon>
            <span class="align-middle pl-6">大屏标题</span>
        </div>
        <div class="ml-64 mr-96 w-auto">
          <div class="inline-flex">
            <!--        变色测试按钮  *@author; 王炳宏 -->
            <!-- <el-button @click="attrColor">变色</el-button> -->
            <el-button @click="undo" :icon="RefreshLeft">撤销</el-button>
            <el-button @click="redo" :icon="RefreshRight">重做</el-button>
            <el-button @click="zoomOut" :icon="ZoomOut">缩小</el-button>
            <el-button @click="zoomToFit" :icon="Crop">自适应</el-button>
            <el-button @click="zoomIn" :icon="ZoomIn">放大</el-button>
            <!-- <el-button @click="disableSnapline">关闭对齐线</el-button> -->
            <!-- <el-button @click="enableSnapline">开启对齐线</el-button> -->
            <!-- 选择文件 -->
            <el-upload
              ref="uploadRef"
              class="upload-demo"
              v-model:file-list="fileList"
              action=""
              :auto-upload="false"
              :show-file-list="false"
              :on-change="handleChange"
            >
              <template #trigger>
                <el-button style="margin-left: 12px;" :icon="Download">导入</el-button>
              </template>
            </el-upload>

            <el-dropdown class="el-dropdown" split-button
                @click="handleClickExport"
                @command="handleCommandExport"
                >
                导出JSON
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item command="json">导出JSON</el-dropdown-item>
                    <el-dropdown-item command="svg">导出SVG</el-dropdown-item>
                    <el-dropdown-item command="png">导出PNG</el-dropdown-item>
                    <el-dropdown-item command="jpeg">导出JPEG</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            <el-button @click="preview()" :icon="View">预览</el-button>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 w-auto">
            <el-button :icon="Share" >分享</el-button>
            <el-button :icon="CircleCheck" @click="save(params.id)">保存</el-button>
            <el-button :icon="SwitchButton" @click="save(params.id)" >保存并关闭</el-button>
            <el-button :icon="QuestionFilled" @click="help" >帮助</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, inject, onMounted } from "vue";
import { House, RefreshLeft, RefreshRight, ZoomOut, ZoomIn, Crop, View, Download, Share, CircleCheck, SwitchButton, QuestionFilled } from "@element-plus/icons-vue";
import {StencilConfig} from "@/editor/config/StencilConfig"
import { exportFile, readFile } from "@/utils";
const props = defineProps({ 
    tools: {
        type: Object,
        default: () => {}
    }
});
const { tools } = toRefs(props);
const {
  attrColor,
    undo,
    redo,
    zoomToFit, 
    zoomOut, 
    zoomIn,
    disableSnapline,
    enableSnapline,
    importJSON,
    exportPNG,
    exportJPEG,
    exportSVG,
    toJSON,
    preview,
    help,
    save
} = tools.value

const params: any = inject("params", null)
  console.log('onMounted', params)

onMounted(() => {
  
});

const fileList = ref([]);
const handleChange = (uploadFile: any) => {
  const raw = uploadFile.raw;
  readFile(raw)
    .then(result => {
      console.log('handleChange', result)
      importJSON(result)
    });
}

const handleClickExport = () => {
    const json = toJSON();
    exportFile("data.json", JSON.stringify(json, null, 4));
}

const handleCommandExport = (command: string) => {
    switch (command) {
        case 'json':
            const json = toJSON();
            exportFile("data.json", JSON.stringify(json, null, 4));
            break;
        case 'svg':
            exportSVG();
            break;
        case 'png':
            exportPNG();
            break;
        case 'jpeg':
            exportJPEG();
            break;
        default:
            break;
    }
}

</script>

<style lang="scss" scoped>
.example-showcase .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }

  :deep(.el-button--primary) {
    color: #606266!important;
  }
  .example-showcase .el-dropdown-link {
    cursor: pointer;
    color: #606266;
    display: flex;
    align-items: center;
  }
  .el-dropdown {
    margin-left: 12px;
    margin-right: 12px;
  }
</style>