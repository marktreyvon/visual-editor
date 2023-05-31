<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="样式" name="style">
            <el-form v-model="formData">
                <el-form-item label="背景颜色">
                    <el-color-picker v-model="formData.backgroundColor" />
                </el-form-item>

                <el-form-item label="透明度">
                    <el-input v-modl="formData.transparency"></el-input>
                </el-form-item>

                <el-form-item label="区&nbsp;&nbsp;&nbsp;域">
                    <el-cascader ref="areaRef" v-model="value" :options="data" :props="{ expandTrigger: 'hover' }"
                        @change="handleNodeClick"></el-cascader>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="锚点信息" name="anchor">
            <el-form v-model="formData">
                <el-form-item label="字体大小">
                    <el-input v-model="formData.fontSize"></el-input>
                </el-form-item>
            </el-form>
        </el-collapse-item>
    </el-collapse>
</template>
  
<script>
import area from './area'

export default {
    data() {
        return {
            data: area.data,
            activeNames: 'style',
            value: [],
            formData: {
                // area: 0,
                fontSize: 20,
                transparency: 50,
                backgroundColor: '#409EFF'
            }
        }
    },

    watch: {
        formData: {
            handler(val) {
                console.log('---val---', val);
                // 当自定义属性改变时，传递给Main.vue的style属性
                // this.$emit("onChange", {
                //     style: { ...val, fontSize: val.fontSize + 'px' }
                // });
            },
            deep: true
        }
    },
    methods: {
        handleNodeClick() {

            let nodesInfo = this.$refs['areaRef'].getCheckedNodes()
            let data = nodesInfo[0].data;
            // console.log('---handleNodeClick---', nodesInfo[0].data);
            this.$emit("onChange", {
                value: data
            });

        }
    },
}
</script>
  
<style lang="scss" scoped></style>