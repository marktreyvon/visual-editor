import { Text_Attribute, Text_Data, Text_Main, Text_Icon } from "./text";

export default {
    views: [
        {
            name: "文本",      // 组件名称, 不可和其他组件重名
            description: "",
            group: "我的组件",   // 左侧组件列表的分组名称
            icon: Text_Icon,         // 左侧列表的组件图标，base64或在线图片地址
            size: { width: 120, height: 60 },
            type: "text",     // 组件类型 可选的值有 text | switch | dashboard | pie | histogram | curve | table | map | video | 3d
            Main: Text_Main,    // 将要在画布上渲染的节点
            Attribute: Text_Attribute,   // 点击节点后在右侧属性面板显示的表单
            Data: Text_Data    // 点击节点后在右侧数据面板显示的表单
        }
    ]
}