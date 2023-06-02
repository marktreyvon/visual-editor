<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="样式" name="style">
            <el-form v-model="formData">
                <el-form-item label="背景颜色">
                    <el-color-picker v-model="formData.backgroundColor" />
                </el-form-item>

                <el-form-item label="透明度">
                    <el-input-number v-model="formData.transparency" :min="1" :max="100" />
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
                    <el-input-number v-model="formData.fontSize" :min="1" :max="100"></el-input-number>
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
            formData: {
                fontSize: 10,
                transparency: 50,
                backgroundColor: '#409EFF',
                map: null
            }
        }
    },
    watch: {
        formData: {
            handler(val) {
                this.$emit("onChange", {
                    style: { ...val }
                });
            },
            deep: true
        }
    },
    methods: {
        handleNodeClick() {
            let nodesInfo = this.$refs['areaRef'].getCheckedNodes()
            let data = nodesInfo[0].data;
            this.formData.map = data;
        }
    },
}
</script>
  
<style lang="scss" scoped></style>