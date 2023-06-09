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
        console.log('DataConfig.start', this.devicesData)
        let isRunning: boolean = false;
        const intervalFunc: Function = () => {
            if (isRunning) return;
            isRunning = true;
            this.parseData()
                .then((result) => {
                    if (result) {
                        isRunning = false;
                    }
                })
        }
        // 启动定时器后先执行一次获取数据
        intervalFunc();
        this.timer = setInterval(intervalFunc, this.refreshInterval * 1000);
    }

    private parseData() {
        return new Promise(async (resolve, reject) => {
            let deviceList: any[] = [];
            this.devicesData.forEach((device: any) => {
                deviceList.push({
                    deviceId: device.deviceId,
                    property: device.property,
                    propertyTitle: device.propertyTitle
                })
            });
            if (this.refType === 'text' || this.refType === 'dashboard') {
                let { data: result } = await DataAPI.getCurrentValue({ entity_id: deviceList[0].deviceId });
                if (result.code === 200) {
                    const { data } = result;
                    console.log('start', data)
                    let value = "无数据";
                    if (data && data.length !== 0) {
                        value = data[0][deviceList[0].property];
                    }
                    this.callback(value);
                    resolve(true);
                }
            } else if (this.refType === 'pie') {
                let values = [];
                for(let i = 0; i < deviceList.length; i++) {
                    const device = deviceList[i];
                    let { data: result } = await DataAPI.getCurrentValue({ entity_id: device.deviceId });
                    console.log('parseData.result', result)
                    if (result.code === 200) {
                        const { data } = result;
                        if (data && data.length !== 0) {
                            let value = data[0][deviceList[0].property];
                            values.push({ type: device.propertyTitle, value});
                        }
                    }
                }
                this.callback(JSON.stringify(values));
                resolve(true);
            } else if (this.refType === 'histogram') {
                let values = [];
                for(let i = 0; i < deviceList.length; i++) {
                    const device = deviceList[i];
                    let { data: result } = await DataAPI.getCurrentValue({ entity_id: device.deviceId });
                    console.log('parseData.result', result)
                    if (result.code === 200) {
                        const { data } = result;
                        if (data && data.length !== 0) {
                            let value = data[0][deviceList[0].property];
                            values.push({ type: device.propertyTitle, sales: value});
                        }
                    }
                }
                this.callback(JSON.stringify(values));
                resolve(true);
            } else if (this.refType === 'curve') {
                let endTime = (new Date()).getTime();
                let startTime = endTime - (Number(24*60*60*10) * 1000);
                let rate = 5 * 60 * 1000 * 1000;
                const params = {
                    device_id: deviceList[0].deviceId,
                    "attribute": ["systime", deviceList[0].property],
                    "start_ts": startTime,
                    "end_ts": endTime,
                    "rate": rate + ""
                }
                let { data: result } = await DataAPI.getHistory(params);
                if (result.code === 200) {
                    const { data } = result;
                    console.log('start', data)
                    let values = {};
                    const length = data.systime.length;
                    if (length > 5) {
                        let xAxis = data.systime.slice(length - 5);
                        let series = [
                            {
                                type: "line",
                                data: data[deviceList[0].property].slice(length - 5),
                                symbol: "circle"
                            }
                        ]
                        values = { xAxis, series}
                    } else {
                        let xAxis = data.systime;
                        let series = [
                            {
                                type: "line",
                                data: data[deviceList[0].property],
                                symbol: "circle"
                            }
                        ]
                        values = { xAxis, series}
                    }
                    this.callback(JSON.stringify(values));
                }
                resolve(true);
            }
        })

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