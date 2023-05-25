<template>
  <el-drawer
    :model-value="visible" @close="$emit('update:visible', false)"
    direction="rtl"
    class="market-drawer"
    size="70%"
    :with-header="false"
  >
    <template #default>
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
              <el-input placeholder="回车搜索" v-model="data.keyword" @keydown.enter="keydown"/>
            </el-form-item>
            <el-form-item label="已安装">
              <el-checkbox v-model="data.installed" @change="data.page = 1;getPlugins()"/>
            </el-form-item>
          </el-form>
          <div>
            <el-button
              :icon="HelpFilled"
              type="primary"
            >
              发布插件
            </el-button>
          </div>
        </div>
        <el-table :data="data.list" @expand-change="expand">
          <el-table-column type="expand">
            <template #default="props">
              <div class="pl-10 pr-4">
                <div class="flex text-sm mb-4">
                  <span>插件描述：</span>
                  <div class="flex-1 ml-2" v-html="props.row.description"></div>
                </div>
                <el-table size="small" max-height="250" :data="data.historyMap.get(props.row.id) || []">
                  <el-table-column label="版本号" prop="version">
                    <template #default="scope">
                      <el-tag>{{scope.row.version}}</el-tag>
                    </template>
                  </el-table-column>
                  <el-table-column label="发布说明">
                    <template #default="scope">
                      <el-popover
                        title="发布说明"
                        :width="600"
                        trigger="click"
                      >
                        <template #reference>
                          <el-button type="primary" size="small" link>查看</el-button>
                        </template>
                        <div class="whitespace-pre">
                          {{scope.row.releaseNote}}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="发布时间">
                    <template #default="scope">
                      {{dayjs(scope.row.created).format('YYYY-MM-DD HH:mm')}}
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </template>
          </el-table-column>
          <el-table-column width="70">
            <template #default="scope">
              <img :src="`${oss}/${scope.row.icon}`" class="w-10 h-10"/>
            </template>
          </el-table-column>
          <el-table-column label="插件名" prop="zh_name"/>
          <el-table-column label="版本" prop="store.version"/>
          <el-table-column label="发布时间">
            <template #default="scope">
              <span>{{dayjs(scope.row.store.created).format('YYYY-MM-DD HH:mm')}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="scope">
              <el-button
                size="small" type="primary"
                v-if="!scope.row.installed"
              >
                安装
              </el-button>
              <el-button
                size="small" type="warning"
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
    </template>
  </el-drawer>
</template>
<script setup lang="ts">
import { reactive, watch } from 'vue'
import { ArrowLeftBold, HelpFilled } from '@element-plus/icons-vue'
import { MarketApi } from '@/api/market'
import dayjs from 'dayjs'
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
  historyMap: new Map<string, any[]>()
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
  if (!data.historyMap.get(row.id)) {
    MarketApi.getHistory({pluginId: row.id}).then(res => {
      data.historyMap.set(row.id, res.data)
    })
  }
}
const keydown = (e: KeyboardEvent) => {
  e.stopPropagation()
  e.preventDefault()
  data.page = 1
  getPlugins()
}
watch(() => props.visible, (v) => {
  if (v) {
    getPlugins()
  }
})
</script>
<style lang="scss">
.market-drawer {
  .el-drawer__body {
    padding: 0;
  }
}
</style>
