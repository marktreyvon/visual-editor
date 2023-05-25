import axios from 'axios'

const $market = axios.create({
  baseURL: import.meta.env.VITE_MARKET,
  transformRequest: (data, headers) => {
    headers.set('authorization', localStorage.getItem('m-token'))
  }
})

$market.interceptors.response.use(res => {
  return res
})

export {$market}
