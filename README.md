# Vue 3 + TypeScript + Vite + Element-Plius + Antv-X6 + Tailwindcss


`git clone https://github.com/ThingsPanel/visual-editor.git`

`pnpm install`

`pnpm run dev`

### 插件开发：
在src/components目录创建自定义的插件目录，例：tp-plugin  
每个插件由两部分组成:  配置文件和组件  

一个插件包含多个组件，例如本例中包含两个组件: pm25和wenshdiu
每个组件由以下4个文件组成  
index.ts: 导出组件  
index.vue: 主组件(将在画布上渲染)  
Data.vue:  右侧面板的数据绑定表单  
Attribute.vue: 右侧面板的属性表单  

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


