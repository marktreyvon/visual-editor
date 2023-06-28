import DeviceAPI from "@/api/device";
import { reactive, ref } from "vue";


export const useBaseData = () => {
    const state = reactive({
        bindType: 'static',
        static: '',
        dynamic: '',
        device: '',
        projectId: '',
        groupId: ''
    })

    const projectOptions = ref<any>([]);
    const groupOptions = ref<any>([]);

    const bindOptions:any[] = [
        { value: 'static', label: '静态数据' }, 
        { value: 'dynamic', label: '动态数据'}, 
        { value: 'device', label: '设备数据'}
    ]

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

    const handleChangeProject = (value: string) => {
        console.log('handleChangeProject', value)
        state.projectId = value;
        getGroupList(value);
    }

    const handleChangeGroup = (value: string) => {

    }


    return {
        state,
        bindOptions,
        projectOptions,
        groupOptions,
        getProjectList,
        getGroupList,
        handleChangeProject,
        handleChangeGroup
    }
}