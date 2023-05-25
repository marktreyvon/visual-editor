
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

    public setComponents(components: Map<String, any>): void;

    public getComponents(): Map<String, any>;

    public addComponent(name: String, component: any): void;

    public getComponent(name: String): any;

}