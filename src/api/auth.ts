import axios from './interceptor/http'

export default {

    getUserInfo: (data: any) => {
        return axios.request({
            url: '/auth/me',
            method: 'post',
            data
        })
    }
}