<template>
    <!-- 设备数据 -->
    <el-collapse v-model="activeNames">
        <el-collapse-item name="device">
            <template #title >
                <div class="flex justify-between w-full items-center">
                    <span>设备 {{ id }}</span>
                          <el-icon class="header-icon mr-3" @click.stop="handleDelete">
                            <Delete />
                        </el-icon>
                </div>
                
              </template>
            <el-form>
                <el-form-item label="选择项目">
                    <el-select v-model="state.projectId" placeholder="项目" @change="handleChangeProject">
                        <el-option v-for="item in projectOptions" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="选择分组">
                    <el-select v-model="state.groupId" placeholder="分组" @change="handleChangeGroup">
                        <el-option v-for="item in groupOptions" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="选择设备">
                    <el-select v-model="state.deviceId" placeholder="设备">
                        <el-option v-for="item in deviceOptions" :key="item.value" :label="item.label" :value="item.value" />
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
    id: Number
});
const emit = defineEmits(["delete", 'change']);

const activeNames = ref<string[]>(['style']);
const state = reactive({
    projectId: '',
    groupId: '',
    deviceId: ''
})

const projectOptions = ref<any>([]);
const groupOptions = ref<any>([]);
const deviceOptions = ref<any>([]);
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
    emit('change', { id: props.id, ...value})
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
                deviceOptions.value = data.map((item: any) => ({ value: item.device, label: item.device_name }))
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
}



const handleDelete = (e: any) => {
    e.preventDefault();
    console.log('handleDelete', props.id)
    emit('delete', props.id)
}
</script>

<style lang="scss" scoped>
.header-icon {
    font-size: 16px;
    margin-left: 10px;
    cursor: pointer;
}
</style>