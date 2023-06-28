/**
 * @author cxs
 * @date 2023-04-20
 * @update 2023-04-20
 * @description 左侧组件列表
 * @interface IStencilConfig
 */
declare interface IStencilConfig {
    
        /**
        * 画布
        */
        graph: Graph | undefined;
    
        /**
        * 组件列表
        */
        stencil: Stencil | undefined;
    
        /**
        * 组件列表容器ID
        */
        stencilId: string;

        /**
         * 组件列表分组
         */
        groups: Stencil.Group[];
    
        /**
        * 初始化组件列表
        */
        initStencil(): void;

        /**
         * 获取组件列表
         */
        getStencil(): Stencil | undefined;

        addGroup(group: string): void;
}