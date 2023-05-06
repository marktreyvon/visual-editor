
/**
 * @author cxs
 * @date 2023-04-24
 * @update 2023-04-24
 * @description 节点事件处理接口
 * @interface ICellEvents
 */
declare interface ICellEvents {
    /**
     * 画布
     */
    private graph: Graph;

    private clickListener: EventListener<Object> | undefined;

    private dbClickListener: EventListener<Object> | undefined;

    private movedListener: EventListener<Object> | undefined;

    private contextMenuListener: EventListener<Object> | undefined;

    private resizeListener: EventListener<Object> | undefined;
    
    private resizedListener: EventListener<Object> | undefined;

    /**
     * 初始化事件
     */
    private initEvents(): void;

    
   
    /**
     * 设置单击事件
     * @param listener 
     */
    public setClickEventListener(listener: EventListener): void

    /**
     * 设置双击事件
     * @param listener 
     */
    public setDBClickEventListener(listener: EventListener<Object>): void;

    /**
     * 设置右键菜单事件
     * @param listener 
     */
    public setContextMenuEventListener(listener: EventListener): void;

    /**
     * 设置节点移动事件
     * @param listener 
     */
    public setMovedEventListener(listener: EventListener<Object>): void

    /**
     * 设置节点缩放事件
     * @param listener 
     */
    public setResizeEventListener(listener: EventListener<Object>): void;

    /**
     * 设置节点缩放结束事件
     * @param listener 
     */
    public setResizedEventListener(listener: EventListener<Object>): void;
}

declare interface EventListener<E> {
    (event: E): void;
}
