import axios from './interceptor/http'

export default {

    getUserInfo: (data: any) => {
        return axios.request({
            url: '/auth/me',
            method: 'post',
            data
        })
    },

    refreshToken: (data: any) => {
        return axios.request({
            url: '/auth/refresh',
            method: 'post',
            data
        })
    }
}