<template>
  <el-drawer
    :model-value="visible" @close="$emit('update:visible', false)"
    direction="rtl"
    class="market-drawer"
    size="1200px"
    :with-header="false"
  >
    <div class="flex h-12 items-center justify-between px-3 border-b border-gray-200">
      <div class="w-36 text-left">
        <el-button :icon="ArrowLeftBold" link @click="$emit('update:visible', false)">返回</el-button>
      </div>
      <span>我的插件</span>
      <div class="w-36 text-right">
      </div>
    </div>
    <div class="px-4 h-[calc(100%_-_48px)] overflow-y-auto">
      <div class="flex justify-between mt-4 mb-2">
        <div></div>
        <div>
          <el-button>文档教程</el-button>
          <el-popover
            placement="top-start"
            title="Secret"
            :width="370"
            trigger="click"
            @show="getSecret"
          >
            <div>
              <el-input disabled :model-value="data.secret">
                <template #append>
                  <el-button type="primary" @click="copySecret">复制</el-button>
                </template>
              </el-input>
            </div>
            <template #reference>
              <el-button>查看secret</el-button>
            </template>
          </el-popover>
          <el-button
            type="primary"
            @click="data.editVisible = true;data.selectId = ''"
          >
            创建插件
          </el-button>
        </div>
      </div>
      <el-table :data="data.list" @expand-change="getRecords">
        <el-table-column type="expand" width="60">
          <template #default="{row}">
            <div class="p-4">
              <el-table size="small" max-height="250" :data="data.historyMap.get(row.id)?.list || []">
                <el-table-column label="版本号" prop="version">
                  <template #default="scope">
                    <el-tag>{{ scope.row.version }}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column label="发布说明">
                  <template #default="scope">
                    <el-popover
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
                <el-table-column label="状态">
                  <template #default="{row}">
                    {{ StoreStateMap.get(row.state) }}
                  </template>
                </el-table-column>
                <el-table-column label="创建时间">
                  <template #default="scope">
                    {{ dayjs(scope.row.created).format('YYYY-MM-DD HH:mm') }}
                  </template>
                </el-table-column>
                <el-table-column label="操作">
                  <template #default="{row: r2}">
                    <StoreHandle
                      :plugin="row"
                      :row="r2"
                      @update-record="onRemoteStore"
                    />
                  </template>
                </el-table-column>
              </el-table>
              <div class="mt-2 justify-end flex" v-if="data.historyMap.get(row.id)?.total > 10">
                <el-pagination
                  layout="prev, pager, next"
                  small
                  @current-change="e => pageChange(row.id, e)"
                  :total="data.historyMap.get(row.id)?.total || 0"
                  :model-value="data.historyMap.get(row.id)?.page || 0"
                  :page-size="data.historyMap.get(row.id)?.pageSize || 10"
                />
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="版本数" prop="_count.stores" />
        <el-table-column width="70" label="icon">
          <template #default="scope">
            <img class="w-10 h-10" :src="`${oss}/${scope.row.icon}`" />
          </template>
        </el-table-column>
        <el-table-column label="插件名" prop="name"></el-table-column>
        <el-table-column label="插件中文名" prop="zh_name"></el-table-column>
        <el-table-column label="创建时间">
          <template #default="scope">
            {{ dayjs(scope.row.created).format('YYYY-MM-DD HH:mm') }}
          </template>
        </el-table-column>
        <el-table-column label="当前版本">
          <template #default="scope">
            {{ scope.row.stores[0]?.version }}
          </template>
        </el-table-column>
        <el-table-column label="状态">
          <template #default="scope">
            {{ scope.row.deprecate ? '已废弃' : '正常'}}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="{row}">
            <el-button
              type="danger" v-if="!row._count.stores" size="small"
              @click="removePlugin(row.id)"
            >
              删除
            </el-button>
            <template v-if="row._count.stores">
              <el-button type="danger" v-if="!row.deprecate" size="small" @click="updatePlugin(row.id, true)">废弃</el-button>
              <el-button type="success" v-if="row.deprecate" size="small" @click="updatePlugin(row.id, false)">恢复</el-button>
            </template>
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
    <edit-plugin
      v-model:visible="data.editVisible"
      :id="data.selectId"
      @success="getPlugins"
    />
  </el-drawer>
</template>

<script lang="ts" setup>
import { ArrowLeftBold } from '@element-plus/icons-vue'
import { MarketApi, StoreStateMap } from '@/api/market'
import { reactive, watch } from 'vue'
import dayjs from 'dayjs'
import { copyToClipboard } from '@/utils'
import { ElMessage, ElMessageBox } from 'element-plus'
import StoreHandle from '@/market/StoreHandle.vue'
import EditPlugin from '@/market/EditPlugin.vue'

const oss = import.meta.env.VITE_OSS

const props = defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  (e: 'update:visible', visible: boolean): void
}>()

const updatePlugin = (id: string, deprecate: boolean) => {
  ElMessageBox.confirm(deprecate ? '废弃后，该插件将对插件市场隐藏，已安装用户不受影响，点击确认废弃' : '点击确认恢复', '提示').then(() => {
    MarketApi.updatePlugin({
      pluginId: id,
      deprecate
    }).then(() => {
      ElMessage({
        type: 'success',
        message: '操作成功'
      })
      getPlugins()
    })
  })
}
const data = reactive({
  page: 1,
  pageSize: 10,
  keyword: '',
  list: [] as any[],
  total: 0,
  secret: '',
  historyMap: new Map<string, { list: any[], total: number, page: number, pageSize: number }>(),
  editVisible: false,
  selectId: ''
})

const getPlugins = () => {
  MarketApi.getMinePlugins({
    page: data.page,
    pageSize: data.pageSize,
    keyword: data.keyword
  }).then(res => {
    data.list = res.data.list
    data.total = res.data.total
  })
}
const copySecret = () => {
  copyToClipboard(data.secret)
  ElMessage({
    message: '复制成功',
    type: 'success'
  })
}
const getRecords = (row: any) => {
  const record = data.historyMap.get(row.id)
  if (!record) {
    data.historyMap.set(row.id, {
      list: [],
      total: 0,
      page: 1,
      pageSize: 10
    })
  }
  MarketApi.getHistory({
    pluginId: row.id,
    pageSize: 10,
    page: 1
  }).then(res => {
    data.historyMap.get(row.id)!.list = res.data.list
    data.historyMap.get(row.id)!.page = 1
    data.historyMap.get(row.id)!.total = res.data.total
  })
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
const onRemoteStore = (pluginId: string) => {
  const record = data.historyMap.get(pluginId)!
  pageChange(pluginId, record.page)
}
const getSecret = () => {
  MarketApi.getSecret().then(res => {
    data.secret = res.data.secret
  })
}

const removePlugin = (id: string) => {
  ElMessageBox.confirm('点击确认删除该插件', '提示').then(() => {
    return MarketApi.removePlugin(id).then(() => {
      ElMessage.success('删除成功')
      getPlugins()
    })
  })
}
watch(() => props.visible, (v) => {
  if (v) {
    data.page = 1
    getPlugins()
  }
})
</script>
