<p align="center">
<font size=5>ThingsPanel可视化编辑器</font>
</p>
<p align="center">
可自定义组件的物联网可视化编辑器，提供了一系列即插即用的组件库。
</p>
<p align="center">
    <a href="https://github.com/ThingsPanel/visual-editor">
        <img src="https://img.shields.io/static/v1?label=pnpm&message=8.1.1&color=red">
    </a>
    <a href="">
        <img src="https://img.shields.io/static/v1?label=Vue&message=3.2.47&color=green">
    </a>
    <a href="">
        <img src="https://img.shields.io/static/v1?label=Vite&message=4.2.0&color=orange">
    </a>
    <a href="https://github.com/ThingsPanel/visual-editor">
        <img src="https://img.shields.io/static/v1?label=Element Plus&message=2.3.3&color=yellow">
    </a>
    <a href="https://github.com/ThingsPanel/visual-editor">
        <img src="https://img.shields.io/static/v1?label=Type Script&message=4.9.3&color=blue">
    </a>
    <a href="https://github.com/ThingsPanel/visual-editor">
        <img src="https://img.shields.io/static/v1?label=Antv-X6&message=2.9.7&color=white">
    </a>
    <a href="https://github.com/ThingsPanel/visual-editor">
        <img src="https://img.shields.io/static/v1?label=Tailwindcss&message=3.3.1&color=green">
    </a>
</p>

# 功能描述
ThingsPanel可视化编辑器是用Vue3+TypeScript编写的，支持用户自定义插件，每个插件包含多个组件，插件可一键安装使用。

# 技术栈
|  名称                        |   版本  |
|  --------------------------  | ------ |
| Vue                          | 3.2.47 |
| Type Script                  | 4.9.3  |
| pnpm                         | 8.1.1  |
| Vite                         | 4.2.0  |
| Element Plus                 | 2.3.3  |
| Antv-X6                      | 2.9.7  |
| Tailwindcss                  | 3.3.1  |

# 目录结构
        ├── index.html                 -- 首页入口
        ├── package.json               -- 包管理器
        ├── vite.config.js             -- vite配置
        ├── tsconfig.json              -- type script配置
        ├── tailwind.config.js         -- tailwind配置
        ├── src                        -- 源代码
        │   ├── App.vue                -- 主页面
        │   ├── main.ts                -- 入口文件
        │   ├── style.css              -- 样式
        │   ├── vite-env.ts            -- 全局变量配置文件
        │   ├── assets                 -- 静态资源
        │   ├── plugins                -- 插件目录
        │   ├── editor                 -- 编辑器核心代码
        │   │   ├── common             -- 编辑器全局常量
        │   │   ├── components         -- 编辑器组件目录
        │   │       ├── canvas-editor  -- 画布
        │   │       ├── header         -- 顶部工具栏
        │   │       ├── left-aside     -- 左侧组件栏
        │   │       ├── right-attribute-panel     -- 右侧属性栏
        │   │   ├── config                  -- 类管理器目录
        │   │       ├── CanvasConfig.ts     -- 画布管理器
        │   │       ├── ComponentConfig.ts  -- 组件管理器
        │   │       ├── PluginConfig.ts     -- 插件管理器
        │   │       ├── StencilConfig.ts    -- 左侧组件列表管理器
        │   │   ├── events                  -- 事件管理器目录
        │   │       ├── CellEvents.ts       -- 节点事件处理
        │   │   ├── hooks              -- hooks目录
        │   │   ├── index.vue          -- 编辑器入口
        │   ├── dependence             -- 三方依赖安装
        │   ├── router                 -- 路由
        │   ├── types                  -- 全局声明
        │   ├── views                  -- 视图
        │   │   └── home               -- 首页


# 安装
```
git clone https://github.com/ThingsPanel/visual-editor.git

cd visual-editor

pnpm install

```

# 本地运行
```
pnpm run dev
```

# 插件开发：
在src/plugins目录创建自定义的插件目录，例：tp-plugin  
每个插件由两部分组成:  配置文件和组件    
```
├── tp-plugin  
│   ├── index.ts               -- 配置文件  
│   ├── pm25                   -- PM2.5组件  
│   │   ├── Attribute.vue      -- 右侧属性面板  
│   │   ├── Data.vue           -- 右侧数据绑定面板  
│   │   ├── Main.vue           -- 画布上渲染的节点  
│   │   ├── index.ts           -- 导出文件   
```
 


## 示例
### 主组件： pm25/Main.vue
```
<template>
  <gauge id="pm25"></gauge>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import Gauge from "../components/Gauge.vue";

export default defineComponent({
  components: {
    Gauge,
  },
  props: {
    value: {
      type: [Object, String, Number],
      default: () => {
        return {};
      },
    },
    style: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
    }
  },
  watch: {
    value: {
      handler(val) {
        console.log("Main.value", val);
      },
      deep: true
    },
    style: {
      handler(val) {
        console.log("Main.style", val);
      },
      deep: true
    }
  },
  methods: {
  }
})
</script>
```

### 属性面板: pm25/Attribute.vue  
```
<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="样式" name="style">
      <el-form v-model="formData">
        <el-form-item label="字体大小">
          <el-input v-model="formData.fontSize"></el-input>
        </el-form-item>

        <el-form-item label="字体颜色">
          <el-input v-model="formData.fontColor"></el-input>
        </el-form-item>

        <el-form-item label="背景颜色">
          <el-input v-modl="formData.bgColor"></el-input>
        </el-form-item>
      </el-form>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      activeNames: 'style',
      formData: {
        fontSize: 20,
        fontColor: '',
        bgColor: ''
      }
    }
  },
  watch: {
    formData: {
      handler(val) {
        this.$emit("onChange", {
          style: val
        });
      },
      deep: true
    }
  }
})
</script>
```

当用户改变了右侧属性面板的值后，需要在画布上的节点反映出来。  
如：修改了属性面板的文字大小或颜色之后，画布上的节点对应的样式也要做出改变。  
可以使用vue的emit方法，传递onChange事件。
```
this.$emit("onChange", {
    style: {
        fontSize： 20,
        // ...
    }
});
```

当组件编写完成后需要在tp-plugin/index.ts文件中进行配置
```
name: "PM2.5",   // 组件名称
description: "",
group: "官方插件",  // 左侧组件列表的分组名称
icon: "",    // 左侧列表的组件图标，base64或在线图片地址
Main: PM25_Main,   // 将要在画布上渲染的组件
Attribute: PM25_Attribute,   // 点击组件后在右侧属性面板显示的表单
Data: PM25_Data   // 点击组件后在右侧数据面板显示的表单
```

最后，在src/components/index.ts导出该插件
```
export * as tpPlugin from './tp-plugin';
```


# 参与共建
欢迎参与到ThingsPanel可视化编辑器的开发中。
<a href="https://github.com/ThingsPanel/visual-editor/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ThingsPanel/visual-editor" />
</a>

## 联系我们
[首页](https://www.thingspanel.cn/)

论坛：[论坛](http://forum.thingspanel.cn/)

qq群：371794256


