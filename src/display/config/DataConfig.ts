import DataAPI from '@/api/data';
import { isArray, isJSON } from '@/utils';

class DataConfig {

    /**
     * 5秒刷新一次
     */
    private refreshInterval: number = 5;

    private callback: Function = () => {};

    private deviceId: string = "";

    private property: any = {};

    private devicesData: any[] = [];

    private value: any = undefined;

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

    public setProperty(property: any) {
        this.property = property;
    }

    public setCallback(callback: Function) {
        this.callback = callback;
    }

    public setValue(value: any) {
        this.value = value;
    }

    public start() {
        console.log('DataConfig.start', this.refType, this.devicesData, this.value)
        if (this.refType.trim() === 'switch') {
            // 开关不需要定时器
            if (this.value === undefined) return;
            const values: any = {};
            values[this.property] = this.value;
            DataAPI.setDeviceValue({ device_id: this.deviceId, values })
                .then(({ data: result}) => {
                    if (result.code !== 200) return;
                    console.log('DataConfig.start.switch.result', result)
                    this.callback && this.callback(true);
                })
            return;
        }
        let isRunning: boolean = false;
        const intervalFunc: Function = () => {
            if (isRunning) return;
            isRunning = true;
            console.log('DataConfig.start', this.devicesData);
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
        console.log('DataConfig.parseData', this.devicesData)
        return new Promise(async (resolve, reject) => {
            let deviceList: any[] = [];
            this.devicesData.forEach((device: any) => {
                deviceList.push({
                    deviceId: device.deviceId,
                    property: device.property,
                    propertyTitle: device.propertyTitle
                })
            });
            if (!this.refType || this.refType === 'text' || this.refType === 'dashboard') {
                let { data: result } = await DataAPI.getCurrentValue({ entity_id: deviceList[0].deviceId });
                if (result.code === 200) {
                    const { data } = result;
                    console.log('start', data)
                    let value = "无数据";
                    if (data && data.length !== 0) {
                        value = data[0][deviceList[0].property];
                    }
                    this.callback(value);
                }
                resolve(true);
            } else if (this.refType === 'pie') {
                // ===================================饼图=========================================
                let values = [];
                for(let i = 0; i < deviceList.length; i++) {
                    const device = deviceList[i];
                    let { data: result } = await DataAPI.getCurrentValue({ entity_id: device.deviceId });
                    console.log('parseData.result', result)
                    if (result.code === 200) {
                        const { data } = result;
                        if (data && data.length !== 0) {
                            let value: any = data[0][device.property] || 0;
                            values.push({ type: device.propertyTitle, value: Number(value)});
                        }
                    }
                }
                this.callback(JSON.stringify(values));
                resolve(true);
            } else if (this.refType === 'histogram') {
                // ===================================柱状图=========================================
                let values = [];
                for(let i = 0; i < deviceList.length; i++) {
                    const device = deviceList[i];
                    let { data: result } = await DataAPI.getCurrentValue({ entity_id: device.deviceId });
                    console.log('parseData.result', result)
                    if (result.code === 200) {
                        const { data } = result;
                        if (data && data.length !== 0) {
                            let value: any = data[0][device.property] || 0;
                            values.push({ type: device.propertyTitle, sales: Number(value)});
                        }
                    }
                }
                this.callback(JSON.stringify(values));
                resolve(true);
            } else if (this.refType === 'curve') {
                // ===================================曲线图=========================================
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
            } else if (this.refType === 'xzy') {
                console.log('DataConfig.parseData.xzy', this.deviceId, this.property)
                if (!this.deviceId) {
                    resolve(true);
                    return;
                }
                let { data: result } = await DataAPI.getCurrentValue({ entity_id: this.deviceId });
                if (result.code === 200) {
                    const { data } = result;
                    console.log('start', data)
                    let value = {};
                    if (data && data.length !== 0) {
                        value = data[0];
                        this.callback({ current: value});
                    }
                }
                let endTime = (new Date()).getTime();
                let startTime = endTime - (Number(24*60*60*10) * 1000);
                let rate = 5 * 1000 * 1000;
                const params = {
                    device_id: this.deviceId,
                    attribute: ["systime", this.property.field, this.property.outField],
                    start_ts: startTime,
                    end_ts: endTime,
                    rate: rate + ""
                }
                let { data: historyResult } = await DataAPI.getHistory(params);
                if (historyResult.code === 200) {
                    console.log('DataConfig.parseData.xzy.historyResult', historyResult)
                    const history = historyResult.data || {};
                    this.callback({ history })
                }
                resolve(true);
            } else if (this.refType === 'table') {
                // ===================================表格=========================================
                let values = [];
                for(let i = 0; i < deviceList.length; i++) {
                    const device = deviceList[i];
                    let { data: result } = await DataAPI.getCurrentValue({ entity_id: device.deviceId });
                    console.log('parseData.result', result)
                    if (result.code === 200) {
                        const { data } = result;
                        if (data && data.length !== 0) {
                            let value: any = data[0][device.property] || 0;
                            let obj: any = {};
                            obj[device.property] = value;
                            values.push(obj);
                        }
                    }
                }
                this.callback(JSON.stringify(values));
                resolve(true);
            } else if (this.refType === 'switch') {
                // ===================================开关=========================================
                console.log('DataConfig.parseData.switch', this.deviceId, this.property)
                this.stop();
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