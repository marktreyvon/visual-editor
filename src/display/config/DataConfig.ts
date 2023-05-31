import DataAPI from '@/api/data';

class DataConfig {

    /**
     * 5秒刷新一次
     */
    private refreshInterval: number = 5;

    private callback: Function = () => {};

    private deviceId: string = "";

    /**
     * 节点数据
     */
    private nodeData: any;

    /**
     * 定时器
     */
    private timer: any = null;

    constructor(nodeData: any) {
        this.nodeData = nodeData;
    }

    public setRefreshInterval(refreshInterval: number) {
        this.refreshInterval = refreshInterval;
    }

    public setDeviceId(deviceId: string) {
        this.deviceId = deviceId;
    }

    public setCallback(callback: Function) {
        this.callback = callback;
    }

    public start() {
        let isRunning: boolean = false;
        const intervalFunc: Function = () => {
            if (isRunning) return;
            isRunning = true;
            DataAPI.getCurrentValue({ entity_id: this.deviceId })
                .then(({ data: res }) => {
                    isRunning = false;
                    if (res.code === 200) {
                        const { data } = res;
                        if (!data || data.length === 0) return;
                        this.callback(data[0]);
                    }
                })
        }
        // 启动定时器后先执行一次获取数据
        intervalFunc();
        this.timer = setInterval(intervalFunc, this.refreshInterval * 1000);
    }

    public restart() {
        this.stop();
        this.start();
    }

    public stop() {
        if (!this.timer) return;
        clearInterval(this.timer);
    }

}

export { DataConfig }