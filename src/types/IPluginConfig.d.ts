
declare interface IPluginConfig {
    private components: Map<String, any>;

    public setComponents(components: Map<String, any>): void;

    public getComponents(): Map<String, any>;

    public addComponent(name: string, component: any): void;

    public getComponent(name: string): any;
}