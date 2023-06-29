<template>
  <el-drawer
    :model-value="visible" @close="$emit('update:visible', false)"
    direction="rtl"
    class="market-drawer"
    size="1200px"
    append-to-body
    :with-header="false"
  >
    <div class="flex h-12 items-center justify-between px-3 border-b border-gray-200">
      <div class="w-36 text-left">
        <el-button :icon="ArrowLeftBold" link @click="$emit('update:visible', false)">返回</el-button>
      </div>
      <span>插件市场</span>
      <div class="w-36 text-right">
      </div>
    </div>
    <div class="p-4 h-[calc(100%_-_48px)] overflow-y-auto">
      <div class="flex justify-between">
        <el-form inline>
          <el-form-item label="插件名">
            <el-input placeholder="回车搜索" v-model="data.keyword" @keydown.enter="keydown" />
          </el-form-item>
          <el-form-item label="已安装">
            <span class="mr-4">
              <el-badge :value="data.waitingUpdateTotal" type="warning" v-if="data.waitingUpdateTotal > 0">
              <span class="text-sm text-gray-500">
                待更新
              </span>
            </el-badge>
            </span>
            <el-checkbox v-model="data.installed" @change="data.page = 1;getPlugins()"/>
          </el-form-item>
        </el-form>
        <div>
          <el-button
            :icon="HelpFilled"
            @click="data.openMine = true"
            type="primary"
          >
            发布插件
          </el-button>
        </div>
      </div>
      <el-table :data="data.list" @expand-change="expand">
        <el-table-column type="expand">
          <template #default="props">
            <div class="pl-10 pr-4 mt-4">
              <div class="flex text-sm mb-4">
                <span>插件描述：</span>
                <div class="flex-1 ml-2" v-html="props.row.description"></div>
              </div>
              <el-table size="small" max-height="250" :data="data.historyMap.get(props.row.id)?.list || []">
                <el-table-column label="版本号" prop="version">
                  <template #default="scope">
                    <el-tag>{{ scope.row.version }}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column label="发布说明">
                  <template #default="scope">
                    <el-popover
                      title="发布说明"
                      :width="400"
                      trigger="click"
                    >
                      <template #reference>
                        <el-button type="primary" size="small" link>查看</el-button>
                      </template>
                      <div class="whitespace-pre">
                        {{ scope.row.releaseNote }}
                      </div>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column label="发布时间">
                  <template #default="scope">
                    {{ dayjs(scope.row.created).format('YYYY-MM-DD HH:mm') }}
                  </template>
                </el-table-column>
                <el-table-column label="安装">
                  <template #default="{row}">
                    <el-button
                      size="small" type="primary" v-if="!row.installed"
                      @click="install(row.id)"
                    >
                      安装
                    </el-button>
                    <div v-else>已安装</div>
                  </template>
                </el-table-column>
              </el-table>
              <div class="mt-2 justify-end flex" v-if="data.historyMap.get(props.row.id)?.total > 10">
                <el-pagination
                  layout="prev, pager, next"
                  small
                  @current-change="e => pageChange(props.row.id, e)"
                  :total="data.historyMap.get(props.row.id)?.total || 0"
                  :model-value="data.historyMap.get(props.row.id)?.page || 0"
                  :page-size="data.historyMap.get(props.row.id)?.pageSize || 10"
                />
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column width="70">
          <template #default="scope">
            <img :src="`${oss}/${scope.row.icon}`" class="w-10 h-10" />
          </template>
        </el-table-column>
        <el-table-column label="插件名" prop="zh_name" />
        <el-table-column label="版本" prop="store.version" />
        <el-table-column label="发布时间">
          <template #default="scope">
            <span>{{ dayjs(scope.row.store.created).format('YYYY-MM-DD HH:mm') }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button
              type="success" v-if="scope.row.upgrade"
              size="small"
              @click="upgrade(scope.row.id)"
            >
              升级
            </el-button>
            <el-button
              size="small" type="primary"
              v-if="!scope.row.installed"
              @click="install(scope.row.store.id)"
            >
              安装
            </el-button>
            <el-button
              size="small" type="warning"
              @click="uninstall(scope.row.store.id)"
              v-if="scope.row.installed"
            >
              卸载
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="mt-4 justify-end flex">
        <el-pagination
          background layout="prev, pager, next"
          :total="data.total"
          v-model:current-page="data.page"
          :page-size="data.pageSize"
        />
      </div>
    </div>
    <Mine v-model:visible="data.openMine"/>
  </el-drawer>
</template>
<script setup lang="ts">
import { reactive, watch } from 'vue'
import { ArrowLeftBold, HelpFilled } from '@element-plus/icons-vue'
import { MarketApi } from '@/api/market'
import dayjs from 'dayjs'
import { ElMessage, ElMessageBox } from 'element-plus'
import Mine from '@/market/Mine.vue'
import histogram from '@/plugins/tp-plugin/histogram/components/histogram.vue'

const oss = import.meta.env.VITE_OSS

const props = defineProps<{
  visible: boolean
}>()
const emit = defineEmits<{
  (e: 'update:visible', visible: boolean): void
}>()
const data = reactive({
  installed: false,
  keyword: '',
  page: 1,
  pageSize: 10,
  list: [] as any[],
  total: 0,
  historyMap: new Map<string, {page: number, pageSize: number, list: any[], total: number}>(),
  openMine: false,
  waitingUpdateTotal: 0
})
const getPlugins = () => {
  MarketApi.getPlugins({
    page: data.page,
    pageSize: data.pageSize,
    installed: data.installed,
    keyword: data.keyword
  }).then(res => {
    data.list = res.data.list
    data.total = res.data.total
  })
}
const expand = (row: any) => {
  let history = data.historyMap.get(row.id) || {page: 1, pageSize: 10, total: 0, list: []}
  history.page = 1
  MarketApi.getHistory({ pluginId: row.id, page: history.page, pageSize: history.pageSize, state: 'passed'}).then(res => {
    history.list = res.data.list
    history.total = res.data.total
    data.historyMap.set(row.id, history)
  })
}
const keydown = (e: KeyboardEvent) => {
  e.stopPropagation()
  e.preventDefault()
  data.page = 1
  getPlugins()
}

const pageChange = (pluginId: string, page: number) => {
  const record = data.historyMap.get(pluginId)
  if (record) {
    record.page = page
    MarketApi.getHistory({
      pluginId: pluginId,
      pageSize: record.pageSize,
      page: page
    }).then(res => {
      data.historyMap.get(pluginId)!.list = res.data.list
      data.historyMap.get(pluginId)!.total = res.data.total
    })
  }
}

watch(() => props.visible, (v) => {
  if (v) {
    getPlugins()
    getUpdateTotal()
  }
})

const upgrade = (pluginId: string) => {
  ElMessageBox.confirm('升级插件可能会造成与现有功能不兼容的情况，点击确认升级', '提示').then(() => {
    MarketApi.upgrade(pluginId).then(() => {
      ElMessage.success('升级成功，刷新页面后生效')
      getPlugins()
      getUpdateTotal()
    })
  })
}
const install = (id: string) => {
  ElMessageBox.confirm(
    '点击确认安装该插件',
    '提示'
  ).then(() => {
    MarketApi.install(id).then(res => {
      ElMessage({
        message: '安装成功，刷新页面后生效',
        type: 'success'
      })
      getPlugins()
    })
  })
}

const uninstall = (id: string) => {
  ElMessageBox.confirm(
    '点击确认卸载该插件',
    '提示'
  ).then(() => {
    MarketApi.uninstall(id).then(res => {
      ElMessage({
        message: '卸载成功，刷新页面后生效',
        type: 'success'
      })
      getPlugins()
      getUpdateTotal()
    })
  })
}

const getUpdateTotal = () => {
  MarketApi.waitingUpdate().then(res => {
    data.waitingUpdateTotal = res.data.total
  })
}
</script>
<style lang="scss">
.market-drawer {
  .el-drawer__body {
    padding: 0;
  }
}
</style>
