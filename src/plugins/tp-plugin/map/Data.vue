<template>
    <el-tabs v-model="activeName">
        <el-tab-pane label="静态数据" name="static">
            <el-form v-model="formData">
                <el-input v-model="formData.staticValue" :autosize="{ minRows: 10, maxRows: 100 }"
                    type="textarea"></el-input>

            </el-form>
        </el-tab-pane>
        <el-tab-pane label="动态数据" name="dynamic">

        </el-tab-pane>
    </el-tabs>
</template>

<script>
import area from './area'
export default {
    props: {},
    data() {
        return {
            activeName: 'static',
            formData: {
                staticValue: JSON.stringify(area.markers, null, 4)
            }
        }
    },
    watch: {
        formData: {
            handler(val) {
                this.$emit("onChange", {
                    value: { ...val }
                });
            },
            deep: true
        }
    },
    methods: {}
}
</script>
<style lang="scss" scoped></style>