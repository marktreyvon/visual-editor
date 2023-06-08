
/**
 * @author cxs
 * @date 2023-05-20
 * @update 2023-05-20
 * @description 插件管理器接口
 */
declare interface IPluginConfig {
    /**
     * 组件列表
     */
    components: Map<String, any>;

    setComponents(components: Map<String, any>): void;

    getComponents(): Map<String, any>;

    addComponent(name: String, component: any): void;

    getComponent(name: String): any;

    registerComponents(mode: "editor" | "display", data: any): void;

}