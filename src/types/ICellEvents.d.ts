
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
    graph: Graph;

    clickListener: EventListener<Object> | undefined;

    dbClickListener: EventListener<Object> | undefined;

    mouseEnterListener: EventListener<Object> | undefined;

    mouseLeaveListener: EventListener<Object> | undefined;

    movedListener: EventListener<Object> | undefined;

    contextMenuListener: EventListener<Object> | undefined;

    resizeListener: EventListener<Object> | undefined;
    
    resizedListener: EventListener<Object> | undefined;

    /**
     * 初始化事件
     */
    initEvents(): void;

    
   
    /**
     * 设置单击事件
     * @param listener 
     */
    setClickEventListener(listener: EventListener): void

    /**
     * 设置双击事件
     * @param listener 
     */
    setDBClickEventListener(listener: EventListener<Object>): void;

    /**
     * 鼠标移入事件
     * @param listener 
     */
    setMouseEnterEventListener(listener: EventListener<Object>): void;

    /**
     * 鼠标移除事件
     * @param listener 
     */
    setMouseLeaveEventListener(listener: EventListener<Object>): void;

    /**
     * 设置右键菜单事件
     * @param listener 
     */
    setContextMenuEventListener(listener: EventListener): void;

    /**
     * 设置节点移动事件
     * @param listener 
     */
    setMovedEventListener(listener: EventListener<Object>): void

    /**
     * 设置节点缩放事件
     * @param listener 
     */
    setResizeEventListener(listener: EventListener<Object>): void;

    /**
     * 设置节点缩放结束事件
     * @param listener 
     */
    setResizedEventListener(listener: EventListener<Object>): void;
}

declare interface EventListener<E> {
    (event: E): void;
}
