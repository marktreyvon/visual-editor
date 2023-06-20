import { parseJSONData, randomString } from "@/utils";
import { Component, defineComponent } from "vue";
import { DataConfig } from "../config/DataConfig";
import { Node } from "@antv/x6";

export const getDisplayComponent = (cpt: Component, nodeData: any, refType: any): Component => {
    return defineComponent({
        inject: ['getNode'],
        data() {
            return {
                value: "",
                style: {},
                data: {},
                id: randomString(8),
                dataConfig: new DataConfig(nodeData, refType)
            }
        },
        mounted() {
            const node: Node.Properties = (this as any).getNode() as Node.Properties;
            const data = node.store.data.data || {};
            console.log('display.mounted.data', data)
            const jsonData = parseJSONData(data.jsonData);
            if (jsonData.style) {
                this.style = { ...jsonData.style }
            }
            // console.log('display.mounted.this.style', jsonData, this.style)
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
                    if (!jsonData.data.deviceData[0].projectId) return;
                    // 设备数据
                    const cb = (value: any) => {
                        this.value = value;
                    }
                    // 设置回调
                    this.dataConfig.setCallback(cb);
                    // 设置设备ID
                    this.dataConfig.setDevicesData(jsonData.data.deviceData)
                    this.dataConfig.setDeviceId(jsonData.data.deviceData[0].deviceId);
                    this.dataConfig.setProperty(jsonData.data.deviceData[0].property);
                    // 启动定时器开始刷新数据
                    this.dataConfig.start();
                }
            }
            console.log('display.mounted.this.style', jsonData.data)


        },
        methods: {
            onChange(value: any) {
                const { device, property } = value; 
                console.log('display.change', device, property)
                if (!device || !property) return;
                this.dataConfig.stop();
                // 改变了数据入口
                device && this.dataConfig.setDeviceId(device.deviceId);
                property && this.dataConfig.setProperty(property);
                // 重启定时器
                this.dataConfig.start();
            }
        },
        render() {
            return (
                <cpt id={this.id} key={this.id} value={this.value} style={this.style} data={this.data} onChange={this.onChange}/>
            )
        }
    })
}