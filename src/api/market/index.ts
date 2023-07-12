import { $market } from '@/api/market/http'
import dayjs from 'dayjs'
import axios from 'axios'

export const StoreStateMap = new Map([
  ['review', '待审核'],
  ['passed', '已通过'],
  ['reject', '已驳回'],
  ['put', '已上传']
])

const getBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = res => {
      resolve(reader.result)
    }
    reader.onerror = reject
  })
}

export const MarketApi = {
  async upload(file: File) {
    const ext = file.name.match(/\.\w+$/)
    return $market.post('/market/saveBase64', {
      fileName: dayjs().format('YYMMDDHHmmss') + ext?.[0],
      base64: await getBase64(file)
    })
  },
  getToken(data: {password: string, username: string}) {
    return $market.post('/open/loginByPassword', data);
  },
  loginByToken(data: {token: string}) {
    return $market.post('/open/loginByToken', data);
  },
  waitingUpdate() {
    return $market.get('/market/waitingUpdate')
  },
  updatePlugin(data: {pluginId: string, deprecate: boolean}) {
    return $market.post('/market/updatePlugin', data)
  },
  upgrade(pluginId: string) {
    return $market.post('/market/upgrade', {pluginId})
  },
  removePlugin(pluginId: string) {
    return $market.post('/market/removePlugin', {pluginId})
  },
  createPlugin(data: {
    description: string,
    icon: string,
    zh_name: string,
    name: string
  }) {
    return $market.post('/market/createPlugin', data)
  },
  getPlugins(query: {
    page: number
    pageSize: number
    keyword: string
    installed: boolean
  }) {
    return $market.get('/market/plugins', {
      params: {
        ...query,
        installed: query.installed ? 'true' : undefined
      }
    })
  },
  submitAudit(data: {
    id: string
    releaseNote: string
  }) {
    return $market.post('/market/submitAudit', data)
  },
  removeStore(id: string) {
    return $market.post('/market/removeStore', {
      id
    })
  },
  getHistory(query: {pluginId: string, page: number, pageSize: number, owner?: string}) {
    return $market.get('/market/pluginRecords', {
      params: query
    })
  },
  checkManager() {
    return $market.get('/market/checkManager').then(res => !!res.data)
  },
  getMinePlugins(data: {page: number, pageSize: number, keyword: string}) {
    return $market.get('/market/minePlugins', {
      params: data
    })
  },
  getSecret() {
    return $market.get('/market/secret')
  },
  install(storeId: string) {
    return $market.post('/market/install', {
      storeId
    })
  },
  uninstall(storeId: string) {
    return $market.post('/market/uninstall', {
      storeId
    })
  },
  getInstalledPlugins() {
    return $market.get('/market/installedPlugins')
  }
}
