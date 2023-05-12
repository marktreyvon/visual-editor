

export function useEvents(canvasConfig: ICanvasConfig) {
    const events: ICellEvents = canvasConfig.getEvents();

    // 右键菜单
    events.setContextMenuEventListener((data: any) => {
        console.log("setContextMenuEventListener", data);
    });

    // 移动事件
    events.setMovedEventListener((data: any) => {
        console.log("setMovedEventListener", data);
    });

    // 缩放事件
    events.setResizedEventListener((data: any) => {
        if (data.node) {
            console.log("setResizedEventListener.size", data.node.size())
            const { width, height } = data.node.size();
            data.node.setData({
                width,
                height,
            });
        }
    });
}