import { $market } from '@/api/market/http'

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
  getHistory(query: {pluginId: string}) {
    return $market.get('/market/pluginRecords', {
      params: query
    })
  },
  checkManager() {
    return $market.get('/market/checkManager').then(res => !!res.data)
  }
}
