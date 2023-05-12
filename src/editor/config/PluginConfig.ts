
class PluginConfig implements IPluginConfig  {
    private static instance: PluginConfig;
    components: Map<String, any>;

    constructor() {
        this.components = new Map();
    }

    public static getInstance(): PluginConfig {
        if (!PluginConfig.instance) {
            PluginConfig.instance = new PluginConfig();
        }
        return PluginConfig.instance;
    }

    public setComponents(components: Map<String, any>): void {
        this.components = components;
    }

    public getComponents(): Map<String, any> {
        return this.components;
    }

    public addComponent(name: string, component: any): void {
        console.log('addComponent', name, component)
        this.components.set(name, component);
    }

    public getComponent(name: string): any {
        return this.components.get(name);
    }

}

export { PluginConfig }