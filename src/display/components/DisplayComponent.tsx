import { parseJSONData, randomString } from "@/utils";
import { Component, defineComponent } from "vue";
import { DataConfig } from "../config/DataConfig";
import { Node } from "@antv/x6";

export const getDisplayComponent = (cpt: Component, nodeData: any, refType: any): Component => {
    const dataConfig: DataConfig = new DataConfig(nodeData, refType);
    return defineComponent({
        inject: ['getNode'],
        data() {
            return {
                value: "",
                style: {},
                data: {},
            }
        },
        mounted() {
            const node: Node.Properties = (this as any).getNode() as Node.Properties;
            const data = node.store.data.data || {};
            const jsonData = parseJSONData(data.jsonData);
            if (jsonData.style) {
                this.style = { ...jsonData.style }
            }
            if (jsonData.data) {
                this.data = { ...jsonData.data } ;
                if (jsonData.data.bindType === "static") {
                    // 静态数据
                    this.value = jsonData.data.static;
                } else if (jsonData.data.bindType === "dynamic") {
                    // 动态数据
                    // this.value = jsonData.data.dynamic;
                } else if (jsonData.data.bindType === "device") {
                    console.log('display.mounted.device', jsonData.data.deviceData)
                    // 设备数据
                    const cb = (value: any) => {
                        console.log('callback', value, typeof value, JSON.parse(value))
                        this.value = value;
                    }
                    // 设置回调
                    dataConfig.setCallback(cb);
                    // 设置设备ID
                    dataConfig.setDevicesData(jsonData.data.deviceData)
                    dataConfig.setDeviceId(jsonData.data.deviceData[0].deviceId);
                    dataConfig.setProperty(jsonData.data.deviceData[0].property);
                    // 启动定时器开始刷新数据
                    dataConfig.start();
                }
            }
        },
        methods: {
            onChange(value: any) {
                const { device, property } = value; 
                console.log('display.change', device, property)
                if (!device || !property) return;
                dataConfig.stop();
                // 改变了数据入口
                device && dataConfig.setDeviceId(device.deviceId);
                property && dataConfig.setProperty(property);
                // 重启定时器
                dataConfig.start();
            }
        },
        render() {
            return (
                <cpt value={this.value} style={this.style} data={this.data} onChange={this.onChange}/>
            )
        }
    })
}