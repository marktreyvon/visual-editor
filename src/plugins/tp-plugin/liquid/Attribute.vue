<template>
    <el-collapse v-model="activeNames" accordion="">
        <el-collapse-item title="基础配置" name="shape">
            <el-form class="ml-4" v-model="formData" label-width="100px" label-position="left">
                <el-form-item label="形状">
                    <el-select v-model="formData.shape">
                        <el-option v-for="(item, index) in shapeOptions" :key="index" :value="item.value" :label="item.label"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="是否循环">
                    <el-switch v-model="formData.isLoop" />
                </el-form-item>
                
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="标题" name="title">
            <el-form class="ml-4" v-model="formData" label-width="100px" label-position="left">

                <el-form-item label="标题文本">
                    <el-input v-model="formData.title"></el-input>
                </el-form-item>

                <el-form-item label="字体大小">
                    <el-input type="number" v-model="formData.titleSize"></el-input>
                </el-form-item>

                <el-form-item label="字体颜色">
                    <el-color-picker v-model="formData.titleColor1" />
                    <el-color-picker v-model="formData.titleColor2" />
                </el-form-item>

                <el-form-item label="百分比颜色">
                    <el-color-picker v-model="formData.color1" />
                    <el-color-picker v-model="formData.color2" />
                </el-form-item>

            </el-form>
        </el-collapse-item>

        <el-collapse-item title="背景与外框" name="background">
            <el-form class="ml-4" v-model="formData" label-width="100px" label-position="left">

                <el-form-item label="水波颜色">
                    <el-color-picker v-model="formData.liquidFill" />
                </el-form-item>

                <el-form-item label="背景颜色">
                    <el-color-picker v-model="formData.backgroundColor" />
                </el-form-item>

                <el-form-item label="外框边距">
                    <el-input type="number" v-model="formData.borderWidth"></el-input>
                </el-form-item>

                <el-form-item label="外框颜色">
                    <el-color-picker v-model="formData.borderColor" />
                </el-form-item>

            </el-form>
        </el-collapse-item>
    </el-collapse>
</template>
  
<script>
import { defaultOption, shapeOptions } from './default'
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        data: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            activeNames: 'style',
            formData: JSON.parse(JSON.stringify(defaultOption)),
            shapeOptions: JSON.parse(JSON.stringify(shapeOptions))
        }
    },
    watch: {
        formData: {
            handler(val) {
                // 当自定义属性改变时，传递给Main.vue的style属性
                console.log('liquid.Attribute.watch.formData', val)
                this.$emit("onChange", {
                    style: { ...val }
                });
            },
            deep: true
        },
        data: {
            handler(val) {
                console.log('liquid.Attribute.watch.data', {...val})
                if (JSON.stringify(val) !== "{}") {
                    this.formData = JSON.parse(JSON.stringify(val));
                } else {
                    this.formData = JSON.parse(JSON.stringify(defaultOption));
                }
            },
            deep: true
        }
    },
    mounted() {
        console.log('liquid.Attribute.mounted.data', JSON.stringify(this.data))
        console.log('liquid.Attribute.mounted.data', this.formData)
        // if (this.data) {
        //     console.log('liquid.Attribute.mounted.data', this.data)
        //     const jsonStr = JSON.stringify(this.data);
        //     if (jsonStr === '{}') return;
        //     const jsonObj = JSON.parse(jsonStr);
        //     this.formData = jsonObj;
        // }
        
    }
})
</script>
  
<style lang="scss" scoped></style>