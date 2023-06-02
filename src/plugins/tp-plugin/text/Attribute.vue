<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="样式" name="style">
            <el-form v-model="formData" label-width="80px" label-position="left">
                <el-form-item label="字体大小">
                    <el-input v-model="formData.fontSize"></el-input>
                </el-form-item>

                <el-form-item label="字体颜色">
                    <el-color-picker v-model="formData.color" />
                </el-form-item>

                <el-form-item label="背景颜色">
                    <el-color-picker v-model="formData.backgroundColor" />
                </el-form-item>

                <el-form-item label="边框宽度">
                    <el-input v-model="formData.borderWidth"></el-input>
                </el-form-item>

                <el-form-item label="边框颜色">
                    <el-color-picker v-model="formData.borderColor" />
                </el-form-item>
            </el-form>
        </el-collapse-item>
    </el-collapse>
</template>
  
<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            activeNames: 'style',
            formData: {
                fontSize: 20,
                color: '#000',
                backgroundColor: '#409EFF',
                borderWidth: 1,
                borderColor: '#000'
            }
        }
    },
    watch: {
        formData: {
            handler(val) {
                // 当自定义属性改变时，传递给Main.vue的style属性
                console.log('text.Attribute.watch.formData', val)
                this.$emit("onChange", {
                    style: { ...val, fontSize: val.fontSize + 'px', borderWidth: val.borderWidth + 'px' }
                });
            },
            deep: true
        }
    },
    mounted() {
        if (this.data) {
            const jsonStr = JSON.stringify(this.data);
            if (jsonStr === '{}') return;
            const jsonObj = JSON.parse(jsonStr);
            jsonObj.fontSize = jsonObj.fontSize.replace("px", "")
            jsonObj.borderWidth = jsonObj.borderWidth.replace("px", "")
            this.formData = jsonObj;
        }
        
    }
}
</script>
  
<style lang="scss" scoped></style>