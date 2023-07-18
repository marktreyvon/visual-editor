import axios from './interceptor/http'

export default {

    /**
     * 通过设备id获取设备当前值
     * @param data 
     * @returns 
     */
    getCurrentValue: (data: any) => {
        return axios.request({
            url: 'kv/current',
            method: 'post',
            data
        })
    },

    /**
     * 通过设备id获取设备历史值
     * @param data 
     * @returns 
     */
    getHistory: (data: any) => {
        return axios.request({
            url: 'kv/history',
            method: 'post',
            data
        })
    },

    /**
     * 手动控制设备
     * @param data 
     * @returns 
     */
    setDeviceValue: (data: any) => {
        return axios.request({
            url: 'device/operating_device',
            method: 'post',
            data
        })
    }
}