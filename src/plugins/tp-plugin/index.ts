import { Curve_Attribute, Curve_Data, Curve_Icon, Curve_Main } from "./curve";
import { Text_Attribute, Text_Data, Text_Main, Text_Icon } from "./text";
import { Yibiaopan_Attribute, Yibiaopan_Data, Yibiaopan_Icon, Yibiaopan_Main } from "./yibiaopan";
import { Amap_Attribute, Amap_Data, Amap_Icon, Amap_Main } from "./map";
import { Three_Attribute, Three_Data, Three_Icon, Three_Main } from "./threejs-demo";
import { Three_Attribute2, Three_Data2,Three_Icon2, Three_Main2 } from "./threejs-demo2";
import { picechart_Attribute, picechart_Data, picechart_Icon, picechart_Main } from "./pie";
import { TB_Attribute, TB_Data, TB_Icon, TB_Main } from "./table";
import { histogram_Attribute, histogram_Data, histogram_Icon, histogram_Main } from "./histogram";
import { Timer_Attribute, Timer_Data, Timer_Icon, Timer_Main } from "./timer";
import { Liquid_Icon, Liquid_Main, Liquid_Attribute, Liquid_Data } from "./liquid";
export default {
    views: [
        {
            name: "文本",
            description: "",
            group: "常用组件",
            type: "text",
            icon: Text_Icon,
            size: { width: 100, height: 40 },
            Main: Text_Main,
            Attribute: Text_Attribute,
            Data: Text_Data,
        },
        {
            name: "时间",
            description: "",
            group: "常用组件",
            icon: Timer_Icon,
            size: { width: 200, height: 40 },
            Main: Timer_Main,
            Attribute: Timer_Attribute,
            Data: Timer_Data,
        },
        {
            name: "仪表盘",
            description: "",
            group: "常用组件",
            type: "dashboard",
            icon: Yibiaopan_Icon,
            size: { width: 200, height: 200 },
            Main: Yibiaopan_Main,
            Attribute: Yibiaopan_Attribute,
            Data: Yibiaopan_Data
        },
        {
            name: "水波图",
            description: "",
            group: "常用组件",
            icon: Liquid_Icon,
            size: { width: 200, height: 200 },
            Main: Liquid_Main,
            Attribute: Liquid_Attribute,
            Data: Liquid_Data
        },
        {
            name: "饼状图",
            description: "",
            group: "常用组件",
            type: "pie",
            icon: picechart_Icon,
            size: { width: 200, height: 200 },
            Main: picechart_Main,
            Attribute: picechart_Attribute,
            Data: picechart_Data
        },
        {
            name: "柱状图",
            description: "",
            group: "常用组件",
            type: "histogram",
            icon: histogram_Icon,
            size: { width: 200, height: 200 },
            Main: histogram_Main,
            Attribute: histogram_Attribute,
            Data: histogram_Data
        },
        {
            name: "曲线图",
            description: "",
            group: "常用组件",
            type: "curve",
            icon: Curve_Icon,
            size: { width: 200, height: 200 },
            Main: Curve_Main,
            Attribute: Curve_Attribute,
            Data: Curve_Data
        },
        {
            name: "滚动列表",
            description: "",
            group: "常用组件",
            type: "table",
            icon: TB_Icon,
            size: { width: 500, height: 300 },
            Main: TB_Main,
            Attribute: TB_Attribute,
            Data: TB_Data
        },
        {
            name: "地图",
            description: "",
            group: "常用组件",
            type: "map",
            icon: Amap_Icon,
            size: { width: 200, height: 200 },
            Main: Amap_Main,
            Attribute: Amap_Attribute,
            Data: Amap_Data
        },
        {
            name: "ThreejsDemo",
            description: "",
            type: "3d",
            group: "3D",
            icon: Three_Icon,
            size: { width: 800, height: 600 },
            Main: Three_Main,
            Attribute: Three_Attribute,
            Data: Three_Data
        },
        {
            name: "ThreejsDemo2",
            description: "",
            type: "3d",
            group: "3D",
            icon: Three_Icon2,
            size: { width: 800, height: 600 },
            Main: Three_Main2,
            Attribute: Three_Attribute2,
            Data: Three_Data2
        }
    ]
}