<template>
    <div class="relative w-full">
        <div class="absolute text-left pl-6">
            <el-icon class="align-middle" :size="20">
                <House />
              </el-icon>
            <span class="align-middle pl-6" style="overflow：hidden;text-overflow：ellipsis">{{ name }}</span>
            <span class="align-middle pl-6 saving-state">{{ savingState }}</span>
        </div>
        <div class="ml-64 mr-96 w-auto">
          <div class="inline-flex">
            <!--        变色测试按钮  *@author; 王炳宏 -->
            <!-- <el-button @click="attrColor">变色</el-button> -->
            <el-button text @click="undo" :icon="RefreshLeft">撤销</el-button>
            <el-button text @click="redo" :icon="RefreshRight">重做</el-button>
            <el-button text @click="zoomToFit" :icon="Crop">自适应</el-button>
            <el-button text @click="zoomOut" :icon="ZoomOut">缩小</el-button>
            <el-button text>{{ scaling + '%' }}</el-button>
            <el-button text @click="zoomIn" :icon="ZoomIn">放大</el-button>
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
                <el-button text style="margin-left: 12px;" :icon="Download">导入</el-button>
              </template>
            </el-upload>

            <el-dropdown class="el-dropdown" 
                @command="handleCommandExport"
                >
                <span class="el-dropdown-link" @click="handleClickExport">
                  <el-button text :icon="Upload">导出</el-button>
                  <el-icon class="el-icon--right">
                    <arrow-down />
                  </el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item command="json">导出JSON</el-dropdown-item>
                    <el-dropdown-item command="svg">导出SVG</el-dropdown-item>
                    <el-dropdown-item command="png">导出PNG</el-dropdown-item>
                    <el-dropdown-item command="jpeg">导出JPEG</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            <el-button text @click="preview()" :icon="View">预览</el-button>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 w-auto">
            <el-button :icon="Share" >分享</el-button>
            <el-button :icon="CircleCheck" @click="save(params.id)">保存</el-button>
            <el-button :icon="QuestionFilled" @click="help" >帮助</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, inject, onMounted } from "vue";
import { House, RefreshLeft, RefreshRight, ZoomOut, ZoomIn, Crop, View, Download, Upload, Share, CircleCheck, SwitchButton, QuestionFilled } from "@element-plus/icons-vue";
import { ArrowDown } from '@element-plus/icons-vue'
import { exportFile, readFile } from "@/utils";
import { CanvasConfig } from "@/editor/config";
import AuthAPI from "@/api/auth"
import { useTools } from "@/editor/hooks"
const props = defineProps({ 
    tools: {
        type: Object,
        default: () => {}
    },
    name: {
      type: String,
      default: ''
    }
});
const {
  savingState,
  undo,
  redo,
  zoomToFit, 
  zoomOut, 
  zoomIn,
  getZoom,
  scaling,
  disableSnapline,
  enableSnapline,
  importJSON,
  exportPNG,
  exportJPEG,
  exportSVG,
  toJSON,
  preview,
  help,
  save,
  autoSave
} = useTools()

const params: any = inject("params", null)
  console.log('onMounted', params)

onMounted(() => {
  let canvasConfig: ICanvasConfig = CanvasConfig.getInstance();
  const events: ICellEvents = canvasConfig.getEvents();

  events.setGraphScaleEventListener((data: any) => {
      console.log('setGraphScaleEventListener', data)
      scaling.value = Number((data.sx * 100).toFixed(0));
  });
  zoomToFit();
  getUserInfo();
  autoSave(params?.id)
});

const fileList = ref([]);
const handleChange = (uploadFile: any) => {
  const raw = uploadFile.raw;
  readFile(raw)
    .then(result => {
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

const getUserInfo = () => {
  setInterval(() => {
    const json = toJSON();
    console.log('getUserInfo', json)
    AuthAPI.getUserInfo({}).then(res => {
      console.log('getUserInfo', res)
    })
  }, 1000 * 30)
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
  :deep(.el-dropdown) {
    height: 32px;
    margin: 0px 0px 0px 12px;
    padding: 8px 15px;
    align-items: center;
    font-size:  var(--el-font-size-base);
  }
  .el-dropdown-link:focus-visible {
    outline: -webkit-focus-ring-color auto 0px;
  }

  .saving-state {
    color: #a3a4a7;
    font-size: 14px;
    margin-left: 12px;
    margin-top: 14px;
  }
</style>