import axios from "./interceptor/http"

export default {

    /**
     * 批量上传自定义插件
     * @param data 
     * @returns 
     */
    uploadPlugins: (data: any) => {
        return axios.request({
            url: 'tp_vis_files/up',
            method: 'post',
            data
        })
    },

    /**
     * 获取自定义插件
     * @param data 
     */
    getPicPlugins: (data: any) => {
        return axios.request({
            url: 'tp_vis_plugin/list',
            method: 'post',
            data
        })
    }
}