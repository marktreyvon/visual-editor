import { Xzy_Attribute, Xzy_Data, Xzy_Icon, Xzy_Main } from "./xinzhiyue";

export default {
    views: [
        {
            name: "xinzhiyue",
            description: "",
            group: "心智悦插件",
            type: "xzy",
            icon: Xzy_Icon,
            size: { width: 1920, height: 930 },
            Main: Xzy_Main,
            Attribute: Xzy_Attribute,
            Data: Xzy_Data
        }
    ]
}