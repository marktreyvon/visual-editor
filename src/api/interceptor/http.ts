import axios from 'axios'
import config from '../config'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest {
    baseUrl: string;
    
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }

    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            header: {
                "Content-Type": "application/octet-stream",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"

            }
        }
        return config
    }

    interceptors(instance: any) {
        // 添加请求拦截器
        instance.interceptors.request.use(function (config: any) {
            // 在发送请求之前做些什么
            if (config.url.startsWith('/')) {
                config.url = config.url.replace('/', '')
            }
            config.url = config.baseUrl + config.url;

            console.log(config)
            return config;
        }, function (error: any) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use(function (response: Response) {
            // 对响应数据做点什么
            return response;
        }, function (error: any) {
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }
    request(options: any) {
        const instance = axios.create()
        options = { ...this.getInsideConfig(), ...options }
        this.interceptors(instance)
        return instance(options)
    }
}

export default new HttpRequest(baseUrl)