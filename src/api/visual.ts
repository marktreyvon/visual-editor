import axios from "./interceptor/http"

export default {

    /**
     * 通过id获取大屏数据
     * @param data 
     * @returns 
     */
    getJsonDataById: (data: any) => {
        return axios.request({
            url: '/tp_dashboard/list',
            method: 'post',
            data
        })
    },

    /**
     * 更新大屏数据
     * @param data 
     * @returns 
     */
    updateJsonDate: (data: any) => {
        return axios.request({
            url: '/tp_dashboard/edit',
            method: 'post',
            data
        })

    }

} 