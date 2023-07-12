import axios,{AxiosResponse} from 'axios'
import { ElMessage } from 'element-plus'
import { useMarketStore } from "@/store";
const $market = axios.create({
  baseURL: import.meta.env.VITE_MARKET,
  transformRequest: (data, headers) => {
    headers.set('authorization', useMarketStore().getToken());
    headers.set('Content-Type', 'application/json')
    return JSON.stringify(data)
  }
})

$market.interceptors.response.use(res => {
  return res
}, err => {
  const res = err.response as AxiosResponse
  if (res.status > 300 && res.data.message) {
    ElMessage({
      message: res.data.message,
      type: 'error'
    })
  } else {
    ElMessage({
      message: '服务器响应失败，请稍后再试',
      type: 'error'
    })
  }
})

export {$market}
