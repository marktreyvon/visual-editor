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
                    <el-select v-model="state.projectId" placeholder="选择项目" @change="handleChangeProject">
                        <el-option v-for="item in projectOptions" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>

                <el-form-item v-if="state.projectId" label="选择分组">
                    <el-select v-model="state.groupId" placeholder="选择分组" @change="handleChangeGroup">
                        <el-option v-for="item in groupOptions" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>

                <el-form-item v-if="state.groupId" label="选择设备">
                    <el-select v-model="state.deviceId" placeholder="选择设备" @change="handleChangeDevice">
                        <el-option v-for="item in deviceOptions" :key="item.value" 
                        :label="item.label + (item.pluginId ? ' [已绑定]' : '')" 
                        :value="item.value" />
                    </el-select>
                </el-form-item>

                <el-form-item v-if="state.deviceId" label="选择属性">
                    <el-select v-model="state.property" placeholder="选择属性" @change="handleChangeProperty">
                        <el-option v-for="item in tslOptions" :key="item.name" :label="item.title" :value="item.name" />
                    </el-select>
                </el-form-item>

            </el-form>
        </el-collapse-item>
    </el-collapse>
    
</template>

<script setup lang="ts">
import { ref, reactive, watch, toRaw } from "vue";
import { Delete } from '@element-plus/icons-vue'
import DeviceAPI from "@/api/device";
const props = defineProps({
    index: Number
});
const emit = defineEmits(["delete", 'change']);

const activeNames = ref<string[]>(['style']);
const state = reactive({
    projectId: '',
    groupId: '',
    deviceId: '',
    pluginId: '',
    property: '',
    devices: [],
    properties: []
})

const projectOptions = ref<any>([]);
const groupOptions = ref<any>([]);
const deviceOptions = ref<any>([]);
const tslOptions = ref<any>([]);
/*
    [
        {
            projectId 
            groupId  选择分组后传devices
            deviceId 选择设备后传properties和pluginId
            pluginId
            property  选择属性
            devices: [
                {
                    deviceName: '',
                    deviceId
                    pluginId,
                    properties: [
                        {
                            name
                            value
                        }
                    ]
                },
                {
                    ...
                }
            ]
            properties: [
                {
                    name
                    value
                },
                {
                    ...
                }
            ]
            
        }
    ]
*/
watch(() => state, (value) => {
    console.log('watch state', value)
    // emit('change', { index: props.index, ...value})
    emit('change', { index: props.index, ...toRaw(value)})
}, {deep: true})

/**
 * 获取项目列表
 * @returns 
 */
const getProjectList = () => {
    DeviceAPI.getProjectList(null)
        .then(({ data: result }) => {
            if (result.code === 200) {
                const { data } = result.data;
                console.log(data)
                projectOptions.value = data.map((item: any) => ({ value: item.id, label: item.name }))
            }

        })
}
/**
 * 通过项目id获取分组列表
 * @param projectId
 * @returns 
 */
const getGroupList = (groupId: string) => {
    DeviceAPI.getGroupList({ current_page: 1, per_page: 9999, business_id: groupId })
        .then(({ data: result }) => {
            if (result.code === 200) {
                console.log('getGroupList', result)
                const { data } = result;
                groupOptions.value = data.map((item: any) => ({ value: item.id, label: item.name }))
            }
        })
}
/**
 * 通过分组id获取设备列表
 * @param groupId
 * @returns 
 */
const getDeviceList = (groupId: string) => {
    DeviceAPI.getDeviceList({ current_page: 1, per_page: 9999, asset_id: groupId })
        .then(({ data: result }) => {
            if (result.code === 200) {
                console.log('getDeviceList', result)
                const { data } = result.data;
                if (!data) {
                    deviceOptions.value = [];
                    state.devices = [];
                    return;
                }
                deviceOptions.value = data.map((item: any) => ({ value: item.device, label: item.device_name, pluginId: item.type }));
                state.devices = deviceOptions.value.map((item: any) => 
                    ({ deviceName: item.label, deviceId: item.value, pluginId: item.pluginId, properties: [] }));
                setData();
            }
        })
}

const setData = () => {
    console.log('setData', toRaw(state))

    // emit('change', { index: props.index, ...toRaw(state)})
}

/**
 * 通过设备Id获取插件
 * @param deviceId
 * @returns 
 */
const getPlugin = (deviceId: string) => {
    const device = deviceOptions.value.find((item: any) => item.value === deviceId);
    state.pluginId = device.pluginId;
    console.log('getPlugin.device', device)
    DeviceAPI.getPluginByDeviceId({ current_page: 1, per_page: 9999, id: device.pluginId })
        .then(({ data: result }) => {
            if (result.code === 200) {
                const { data } = result.data;
                const tsl = JSON.parse(data[0].chart_data).tsl;

                tslOptions.value = JSON.parse(JSON.stringify(tsl.properties));
                console.log('getPlugin.tslOptions', tslOptions.value);

            }
        })
}

getProjectList();

/**
 * 选择了项目
 * @param value 
 */
const handleChangeProject = (value: string) => {
    console.log('handleChangeProject', value)
    state.projectId = value;
    getGroupList(value);
}

/**
 * 选择了分组
 * @param value 
 */
const handleChangeGroup = (value: string) => {
    console.log('handleChangeGroup', value)
    state.groupId = value;
    getDeviceList(value);
}

/**
 * 选择了设备
 * @param value 
 */
const handleChangeDevice = (value: string) => {
    console.log('handleChangeGroup', value)
    state.deviceId = value;
    getPlugin(value);
    setData();
}

/**
 * 选择了属性
 * @param value 
 */
const handleChangeProperty = (value: string) => {
    console.log('handleChangeProperty', value)
    state.property = value;
    setData();
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