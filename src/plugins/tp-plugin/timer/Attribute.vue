<template>
    <el-collapse v-model="activeNames" accordion>
        <el-collapse-item title="样式" name="style">
            <el-form v-model="formData" label-width="80px" label-position="left" class="px-2">
                <el-form-item label="字体大小">
                    <el-input v-model="formData.fontSize"></el-input>
                </el-form-item>

                <el-form-item label="字体颜色">
                    <el-color-picker v-model="formData.color" />
                </el-form-item>

                <el-form-item label="字体样式">
                    <div class="w-full flex-1 p-0">
                        <el-checkbox v-model="formData.fontWeight" true-label="bold" false-label="" label="加粗" border size="small"/>
                        <el-checkbox v-model="formData.fontStyle" true-label="italic" false-label="" label="斜体" border size="small"/>
                    </div>
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

        <el-collapse-item title="时间设置" name="set">
            <el-form v-model="formData" label-width="80px" label-position="left" class="px-2">
                <el-form-item label="时间格式">
                    <el-select v-model="formData.format">
                        <el-option v-for="item in timeFormatOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </el-collapse-item>
    </el-collapse>
</template>
  
<script>
import { styleData, timeFormatOptions } from './default'
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
            backgroundActiveNames: 'background',
            formData: styleData,
            timeFormatOptions: timeFormatOptions
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
            jsonObj.fontSize = jsonObj.fontSize?.toString().replace("px", "") || 0;
            jsonObj.borderWidth = jsonObj.borderWidth?.toString().replace("px", "") || 0;
            this.formData = jsonObj;
        }
        
    }
}
</script>
  
<style lang="scss" scoped>
label.el-checkbox.el-checkbox--small.is-bordered {
    margin: 0 4px 0 0;
}
</style>