import DataAPI from '@/api/data';

class DataConfig {

    /**
     * 5秒刷新一次
     */
    private refreshInterval: number = 5;

    private callback: Function = () => {};

    private deviceId: string = "";

    private property: string = "";

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

    public setProperty(property: string) {
        this.property = property;
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
                        console.log('start', data)
                        let value = "无数据";
                        if (data && data.length !== 0) {
                            value = data[0][this.property];
                        }
                        this.callback(value);
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