import { CanvasConfig } from '../config';
import * as Common from '@/common';
import * as Plugins from '@/plugins'
import { useEvents, usePlugins, useStencil } from '.';
import { MarketApi } from '@/api/market'
const oss = import.meta.env.VITE_OSS
/**
 * @author cxs
 * @date 2023-04-28
 * @update 2023-05-24
 * @description 初始化画布
 * @param data
 */
const useCanvas = (): any => {
  const { loadPlugins } = usePlugins();
  const { initStencil } = useStencil();
  const initCanvas = (data?: any) => {
    MarketApi.getInstalledPlugins().then(res => {
      const data = res.data.plugins as any[]
      const remotePlugins:Record<string, any> = {}
      Promise.all(data.map(p => {
        return System.import(`${oss}${p.url}`)
      })).then(modules => {
        for (let i = 0; i < modules.length; i++) {
          remotePlugins[data[i].name] = modules[i]
        }
        // 获取画布管理器
        let canvasConfig: ICanvasConfig = CanvasConfig.getInstance(Common.DEFAULT_CONTAINER_ID);
        // 初始化事件
        // useEvents(canvasConfig);
        // 加载插件
        const plugins = {
          ...Plugins,
          ...remotePlugins
        }
        console.log('plugins', remotePlugins)
        loadPlugins(plugins);
        initStencil(plugins);
      })
    })
  }

  return {
    initCanvas
  }
}

export { useCanvas }
