import { $market } from '@/api/market/http'

export const StoreStateMap = new Map([
  ['review', '待审核'],
  ['passed', '已通过'],
  ['reject', '已驳回'],
  ['put', '已上传']
])


export const MarketApi = {
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
  getHistory(query: {pluginId: string, page: number, pageSize: number, state?: string}) {
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
