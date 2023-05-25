import { ITokenInfo, useAuthStore } from '@/store';
import axios from 'axios'
import config from '../config'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

/**
 * @author cxs
 * @date 2023-05-24
 * @update 2023-05-24
 * @description http请求拦截器
 */
class HttpRequest {
    baseUrl: string;
    tokenInfo: ITokenInfo = <ITokenInfo>{};
    
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }

    getInsideConfig() {
        this.tokenInfo = useAuthStore().getTokenInfo();
        const config = {
            baseUrl: this.baseUrl,
            headers: {
                "Content-Type": "application/octet-stream",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
                "Authorization": `Bearer ${this.tokenInfo.token}`
            }
        }
        return config
    }

    interceptors(instance: any) {
        // 添加请求拦截器
        instance.interceptors.request.use((config: any) => {
            // 在发送请求之前做些什么
            if (config.url.startsWith('/')) {
                config.url = config.url.replace('/', '')
            }
            const { token, expiresTime } = this.tokenInfo;
            const now = Date.now();
            // 没有 token 或者时间大于 expires_in 重定向到登录
            if(!token || !expiresTime || now > Number(expiresTime)) {
                useAuthStore().destroyToken()
                window.location.href = '/#/login'
                // return false; // 阻止后面的请求
                return config;
            }

            config.url = config.baseUrl + config.url;
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