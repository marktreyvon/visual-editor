import axios from "./interceptor/http";

export default {

    /**
     * 获取项目列表
     * @param data 
     * @returns 
     */
    getProjectList: (data: any) => {
        return axios.request({
            url: '/business/index',
            method: 'post',
            data
        })
    },

    /**
     * 获取分组列表
     * @param data 
     * @returns 
     */
    getGroupList: (data: any) => {
        return axios.request({
            url: '/asset/list/c',
            method: 'post',
            data
        })
    },
    
    /**
     * 获取设备列表
     * @param data 
     * @returns 
     */
    getDeviceList: (data: any) => {
        return axios.request({
            url: '/device/list/tree',
            method: 'post',
            data
        })
    }
}