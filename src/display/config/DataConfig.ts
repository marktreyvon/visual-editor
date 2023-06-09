import DataAPI from '@/api/data';
import { isArray, isJSON } from '@/utils';

class DataConfig {

    /**
     * 5秒刷新一次
     */
    private refreshInterval: number = 5;

    private callback: Function = () => {};

    private deviceId: string = "";

    private property: string = "";

    private devicesData: any[] = [];

    private refType: string = "";

    /**
     * 节点数据
     */
    private nodeData: any;


    /**
     * 定时器
     */
    private timer: any = null;

    constructor(nodeData: any, refType: any) {
        this.nodeData = nodeData;
        this.refType = refType;
        console.log('DataConfig.constructor',  refType)
    }

    private getComponentType(refData: any) {
        let element = {
            type: "",
            value: "",
            position: ""
        }
        Object.keys(refData).forEach((key) => {
            if (refData[key].static) {
                const staticData = isJSON(refData[key].static);
                if (staticData) {
                    if (isArray(staticData)) {
                        // 是数组: 饼图或柱状图或地图
                        Object.keys(staticData[0]).forEach((key) => {
                            console.log('key', typeof staticData[0][key])
                            if (typeof staticData[0][key] === 'number') {
                                // 数字
                                element.value = key;
                            } else if (typeof staticData[0][key] === 'string') {
                                // 字符串
                                element.type = key;
                            } else if (typeof staticData[0][key] === 'object') {
                                // 对象
                                element.position = key;
                            }
                        })


                    } else {
                        // 是对象 折线图
                        console.log('是对象')
    
                    }
                } else {
                    // 不是对象   文本或仪表盘
                }
            }
        })
    }

    public setRefreshInterval(refreshInterval: number) {
        this.refreshInterval = refreshInterval;
    }

    public setDevicesData(devicesData: any[]) {
        this.devicesData = devicesData;
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
        this.parseData();
        console.log('DataConfig.start', this.devicesData)
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

    private parseData() {
        let deviceList: any[] = [];
        this.devicesData.forEach((device: any) => {
            deviceList.push({
                deviceId: device.deviceId,
                property: device.property
            })
        });
        deviceList.forEach(async (device: any) => {
            let { data: result } = await DataAPI.getCurrentValue({ entity_id: device.deviceId });
            if (result.code === 200) {
                console.log('parseData.result', result)
            }
        });

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