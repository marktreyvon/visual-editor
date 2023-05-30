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
import { ref, reactive, watch } from "vue";
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
    property: ''
})

const projectOptions = ref<any>([]);
const groupOptions = ref<any>([]);
const deviceOptions = ref<any>([]);
const tslOptions = ref<any>([]);
/*
    [
        {
            projectId 
            groupId 
            deviceId
        }
    ]
*/
watch(() => state, (value) => {
    console.log('watch state', value)
    emit('change', { index: props.index, ...value})
}, {deep: true})

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

const getDeviceList = (groupId: string) => {
    DeviceAPI.getDeviceList({ current_page: 1, per_page: 9999, asset_id: groupId })
        .then(({ data: result }) => {
            if (result.code === 200) {
                console.log('getDeviceList', result)
                const { data } = result.data;
                deviceOptions.value = data.map((item: any) => ({ value: item.device, label: item.device_name, pluginId: item.type }))
            }
        })
}

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

const handleChangeProject = (value: string) => {
    console.log('handleChangeProject', value)
    state.projectId = value;
    getGroupList(value);
}

const handleChangeGroup = (value: string) => {
    console.log('handleChangeGroup', value)
    state.groupId = value;
    getDeviceList(value);
}

const handleChangeDevice = (value: string) => {
    console.log('handleChangeGroup', value)
    state.deviceId = value;
    getPlugin(value);
}

const handleChangeProperty = (value: string) => {
    console.log('handleChangeProperty', value)
    state.property = value;
}



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