<template>
    <div class="relative w-full">
        <div class="absolute w-64">
            大屏标题
        </div>
        <div class="mx-64 w-auto">

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
        </div>
        <div class="absolute inset-y-0 right-0 w-64">
            <el-button>登录</el-button>
            <el-button>保存</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs } from "vue";
const props = defineProps({ 
    tools: {
        type: Object,
        default: () => {}
    }
});
const { tools } = toRefs(props);
const { 
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
} = tools.value


const handleClickExport = () => {
    const json = toJSON();
    console.log('handleClickExport', json)
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
  }
</style>