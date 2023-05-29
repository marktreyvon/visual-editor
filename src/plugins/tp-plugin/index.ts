import { PM25_Attribute, PM25_Data, PM25_Icon, PM25_Main } from "./pm25";
import { Wenshidu_Main, Wenshidu_Attribute, Wenshidu_Data, Wenshidu_Icon } from "./wenshidu";
import { Curve_Attribute, Curve_Data, Curve_Icon, Curve_Main } from "./curve";
import { Text_Attribute, Text_Data, Text_Main, Text_Icon } from "./text";
import { Yibiaopan_Attribute, Yibiaopan_Data, Yibiaopan_Icon, Yibiaopan_Main } from "./yibiaopan";
export default {
    views: [
        {
            name: "PM2.5",
            description: "",
            group: "官方插件",
            icon: PM25_Icon,
            Main: PM25_Main,
            Attribute: PM25_Attribute,
            Data: PM25_Data
        },
        {
            name: "Wenshidu",
            description: "",
            group: "官方插件",
            icon: Wenshidu_Icon,
            Main: Wenshidu_Main,
            Attribute: Wenshidu_Attribute,
            Data: Wenshidu_Data
        },
        {
            name: "曲线图",
            description: "",
            group: "官方插件",
            icon: Curve_Icon,
            Main: Curve_Main,
            Attribute: Curve_Attribute,
            Data: Curve_Data
        },
        {
            name: "文本",
            description: "",
            group: "官方插件",
            icon: Text_Icon,
            Main: Text_Main,
            Attribute: Text_Attribute,
            Data: Text_Data
        },
       
        {
            name: "仪表盘",
            description: "",
            group: "官方插件",
            icon: Yibiaopan_Icon,
            Main: Yibiaopan_Main,
            Attribute: Yibiaopan_Attribute,
            Data: Yibiaopan_Data
        }
    ]
}