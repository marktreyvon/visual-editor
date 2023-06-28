<template>
    <!-- 设备数据 -->
    <el-collapse v-model="activeNames">
        <el-collapse-item name="device">
            <template #title >
                <div class="flex justify-between w-full items-center">
                    <span>设备 {{ index }}</span>
                          <el-icon class="header-icon mr-3" @click.stop="handleDelete">
                            <Delete />
                        </el-icon>
                </div>
                
              </template>
            <el-form>
                <el-form-item label="选择项目">
                    <el-select filterable v-model="state.projectId" placeholder="选择项目">
                        <el-option v-for="item in projectOptions" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>

                <el-form-item v-if="state.projectId" label="选择分组">
                    <el-select filterable v-model="state.groupId" placeholder="选择分组">
                        <el-option v-for="item in groupOptions" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>

                <!-- <el-form-item v-if="state.groupId" label="选择设备">
                    <el-select filterable v-model="state.deviceId" placeholder="选择设备">
                        <el-option v-for="item in deviceOptions" :key="item.value" 
                        :label="item.label + (item.pluginId ? ' [已绑定]' : '')" 
                        :value="item.value" />
                    </el-select>
                </el-form-item> -->

                <el-form-item v-if="state.groupId" label="选择设备">
                    <el-cascader ref="deviceRef" style="width: 100%;margin-right:10px" v-model="state.deviceId" placeholder="选择设备"
                            :options="deviceOptions" clearable :props="{ checkStrictly: true, emitPath: false }">
                    </el-cascader>
                </el-form-item>

                <el-form-item v-if="state.deviceId" label="选择属性">
                    <el-select v-model="state.property" placeholder="选择属性">
                        <el-option v-for="item in tslOptions" :key="item.name" :label="item.title" :value="item.name" />
                    </el-select>
                </el-form-item>

            </el-form>
        </el-collapse-item>
    </el-collapse>
    
</template>

<script setup lang="ts">
import { ref, reactive, watch, toRaw, onMounted, watchEffect } from "vue";
import { Delete } from '@element-plus/icons-vue'
import DeviceAPI from "@/api/device";
import { async } from "@antv/x6/lib/registry/marker/async";
const props = defineProps({
    index: Number,
    data: Object
});
const emit = defineEmits(["delete", 'change']);

const activeNames = ref<string[]>(['style']);
const state = reactive({
    projectId: '',
    groupId: '',
    deviceId: '',
    pluginId: '',
    property: '',
    propertyTitle: '',
    devices: [],
    properties: []
})

const projectOptions = ref<any>([]);
const groupOptions = ref<any>([]);
const deviceOptions = ref<any>([]);
const tslOptions = ref<any>([]);

watch(() => state, (value) => {
    console.log('watch state', value)
    // emit('change', { index: props.index, ...value})
    emit('change', { index: props.index, ...toRaw(value)})
}, {deep: true})

watch(() => props.data, async (val: any) => {
    console.log('watch props.data', val)
    if (JSON.stringify(val) === "{}") return;
    // 项目
    state.projectId = val.projectId || "";
    // 分组
    state.groupId = val.groupId || "";
    // 设备
    state.deviceId = val.deviceId || "";

    state.pluginId = val.pluginId || "";

    state.property = val.property || "";

    state.propertyTitle = val.propertyTitle || "";

  
}, {deep: true, immediate: true});

onMounted(async () => {
    projectOptions.value = await getProjectList();
});

/**
 * 项目改变
 */
 watch(() => state.projectId, async (value) => {
    if (!value) return;
    groupOptions.value = await getGroupList(value);
    console.log('watch groupOptions', groupOptions.value)
}, { immediate: true });

/**
 * 分组改变
 */
watch(() => state.groupId, async (value) => {
    if (!value) return;
    deviceOptions.value = await getDeviceList(value);
    console.log('watch deviceOptions', deviceOptions.value)
}, { immediate: true });

/**
 * 设备改变
 */
watch(() => state.deviceId, async (value) => {
    if (!value) return;
    try {
        deviceOptions.value.forEach((item: any) => {
            if (item.children && item.children.length > 0) {
                item.children.forEach((child: any) => {
                    if (child.value === value) {
                        state.pluginId = child.pluginId;
                        throw new Error('break');
                    }
                })
            }
        })    
    }
    catch(e) {
        console.log('watch deviceId', e)
    }
 }, { immediate: true });

watchEffect(() => {
    if (state.deviceId && JSON.stringify(deviceOptions.value) !== "{}") {
        const index: number = deviceOptions.value.findIndex((item: any) => item.value === state.deviceId);
        console.log('watchEffect', index, deviceOptions.value[index])
        if (index === -1) return;
        state.pluginId = deviceOptions.value[index].pluginId;
    }
})

watch(() => state.pluginId, async (value) => {
    if (!value) return;
    console.log('watch pluginId', value)
    tslOptions.value = await getPlugin(value);
}, { immediate: true })

/**
 * 属性改变
 */
watch(() => state.property, async (value) => {
    if (!value) return;
    const index = tslOptions.value.findIndex((item: any) => item.name === value);
    state.propertyTitle = tslOptions.value[index].title;
})

/**
 * 获取项目列表
 * @returns 
 */
async function getProjectList() {
    return new Promise((resolve, reject) => {
        DeviceAPI.getProjectList(null)
            .then(({ data: result }) => {
                if (result.code === 200) {
                    const { data } = result.data;
                    const options = data.map((item: any) => ({ value: item.id, label: item.name }))
                    resolve(options)
                }
            })
    
    })
}
/**
 * 通过项目id获取分组列表
 * @param projectId
 * @returns 
 */
async function getGroupList(groupId: string)  {
    return new Promise((resolve, reject) => {
        DeviceAPI.getGroupList({ current_page: 1, per_page: 9999, business_id: groupId })
        .then(({ data: result }) => {
            if (result.code === 200) {
                const { data } = result;
                const options = data.map((item: any) => ({ value: item.id, label: item.name }))
                resolve(options)
            }
        })
    })
}
/**
 * 通过分组id获取设备列表
 * @param groupId
 * @returns 
 */
function getDeviceList1(groupId: string) {
    return new Promise((resolve, reject) => {
        DeviceAPI.getDeviceList({ current_page: 1, per_page: 9999, asset_id: groupId })
        .then(({ data: result }) => {
            if (result.code === 200) {
                const { data } = result.data;
                if (!data) {
                    state.devices = [];
                    resolve([]);
                }
                const options = data.map((item: any) => ({ value: item.device, label: item.device_name, pluginId: item.type }));
                state.devices = deviceOptions.value.map((item: any) => 
                    ({ deviceName: item.label, deviceId: item.value, pluginId: item.pluginId, properties: [] }));
                resolve(options);
            }
        })
    })
}


function getDeviceList(id: string) {
      const params = {current_page: 1, per_page: 9999, asset_id: id}
      DeviceAPI.getDeviceList(params)
          .then(({data}) => {
            if (data.code == 200) {
              let arr = data.data?.data || [];

              deviceOptions.value = arr.map((item: any) => {
                if (item.children && item.children.length > 0) {
                  item.children = item.children.map((child: any) => {
                    return {
                      label: child.device_name, value: child.device, pluginId: child.type
                    }
                  })
                }
                return {
                  label: item.device_name, 
                  value: item.device, 
                  pluginId: item.type, 
                  children: item.children || undefined
                }
              });
              console.log("this.deviceOptions", deviceOptions.value)
              
            //   if (state.deviceId) {
            //     state.device = [];
            //     let pluginId = null;
            //     const deviceObj = this.deviceOptions.find(item => {
            //       if (item.children && item.children.length > 0) {
            //         return item.children.find(child => {
            //           if (child.value == this.formData.deviceId) {
            //             pluginId = child.pluginId;
            //             this.formData.device.push(item.value);
            //             this.formData.device.push(child.value);
            //             return true;
            //           }
            //         })
            //       }
            //       if (item.value == this.formData.deviceId) {
            //         pluginId = item.pluginId;
            //         this.formData.device.push(item.value);
            //         return true;
            //       }
            //     });

                // console.log("getDeviceList.formData", this.formData.device);
            }
          })
    }

/**
 * 通过设备Id获取插件
 * @param deviceId
 * @returns 
 */
function getPlugin(pluginId: string) {
    console.log('watch getPlugin', pluginId)
    return new Promise((resolve, reject) => {
        DeviceAPI.getPluginByDeviceId({ current_page: 1, per_page: 9999, id: pluginId })
            .then(({ data: result }) => {
                if (result.code === 200) {
                    const { data } = result.data;
                    const tsl = JSON.parse(data[0].chart_data).tsl;
                    const options = JSON.parse(JSON.stringify(tsl.properties));
                    resolve(options);
                }
            })
    })
    
}

/**
 * 删除设备
 * @param id 
 */
const handleDelete = (e: any) => {
    e.preventDefault();
    console.log('handleDelete', props.index)
    emit('delete', props.index)
}
</script>

<style lang="scss" scoped>
.header-icon {
    font-size: 16px;
    margin-left: 10px;
    cursor: pointer;
}
</style>