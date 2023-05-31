import { Component, defineComponent } from "vue";
import { DataConfig } from "../config/DataConfig";

export const getDisplayComponent = (cpt: Component, data: any): Component => {
    const dataConfig: DataConfig = new DataConfig(data);

    return defineComponent({
        data() {
            return {
                value: undefined,
                style: undefined,
                option: undefined
            }
        },
        mounted() {
            const cb = (value: any) => {
                console.log('callback', value)
                this.value = value;
            }
            // 设置回调
            dataConfig.setCallback(cb);
            // 启动定时器开始刷新数据
            dataConfig.start();
            console.log('getDisplayComponent', data)
            if (!data) return;
            if (data.style) {
                this.style = { ...data.style }
            }
            if (data.value) {
                this.value = { ...data.value } ;
            }
            if (data.option) {
                this.option = { ...data.option }
            }
        },
        methods: {
            onChange(value: any) {
                const { device } = value; 
                console.log('display.change', device.deviceId)
                dataConfig.stop();
                // 改变了数据入口
                dataConfig.setDeviceId(device.deviceId);
                // 重启定时器
                dataConfig.start();
            }
        },
        render() {
            return (
                <cpt value={this.value} style={this.style} option={this.option} onChange={this.onChange}/>
            )
        }
    })
}