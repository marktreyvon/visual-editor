<template>
    <div class="relative w-full">
        <div class="absolute w-64 text-left pl-6">
            <el-icon class="align-middle" :size="20">
                <House />
              </el-icon>
            <span class="align-middle pl-6">大屏标题</span>
        </div>
        <div class="ml-64 mr-96 w-auto">
          <!--        变色测试按钮  *@author; 王炳宏 -->
          <el-button @click="attrColor">变色</el-button>
            <el-button @click="undo">撤销</el-button>
            <el-button @click="redo">重做</el-button>
            <el-button @click="zoomOut">缩小</el-button>
            <el-button @click="zoomToFit">自适应</el-button>
            <el-button @click="zoomIn">放大</el-button>
            <!-- <el-button @click="disableSnapline">关闭对齐线</el-button> -->
            <!-- <el-button @click="enableSnapline">开启对齐线</el-button> -->
            <el-dropdown class="el-dropdown" split-button type="primary" 
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
            <el-button @click="preview(params.id)">预览</el-button>
        </div>
        <div class="absolute inset-y-0 right-0 w-96">
            <el-button >分享</el-button>
          <el-button @click="save(params.id)">保存</el-button>
          <el-button type="primary" :icon="HomeFilled" @click="data.marketVisible = true">插件市场</el-button>
            <el-button @click="save(params.id)">保存</el-button>
            <el-button @click="save(params.id)">保存并退出</el-button>
            <el-button @click="help">帮助</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, inject, onMounted } from "vue";
import { HomeFilled, House } from '@element-plus/icons-vue'
import {StencilConfig} from "@/editor/config/StencilConfig"
import Market from '@/market/Market.vue'
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

const handleClickExport = () => {
    const json = toJSON();
    console.log(json);
}

const handleCommandExport = (command: string) => {
    switch (command) {
        case 'json':
            const json = toJSON();
            console.log('handleCommandExport', json)
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

const data = reactive({
  marketVisible: false
})
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
