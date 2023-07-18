<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="样式" name="style">
            <el-form v-model="formData" label-width="80px" label-position="left">
                <el-form-item label="尺寸">
                    <el-select v-model="formData.size">
                        <el-option value="small" label="小"></el-option>
                        <el-option value="default" label="中"></el-option>
                        <el-option value="large" label="大"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="开启颜色">
                    <tp-color-picker v-model="formData.onColor" />
                </el-form-item>

                <el-form-item label="关闭颜色">
                    <tp-color-picker v-model="formData.offColor" />
                </el-form-item>
            </el-form>
        </el-collapse-item>
    </el-collapse>
</template>

<script>
import { defaultStyle } from "./default";
export default {
  components: {},
  props: {},
  data() {
    return {
        activeNames: "style",
        formData: { ...defaultStyle }
    }
  },
  watch: {
    formData: {
            handler(val) {
                console.log("switch.Attribute.formData", val)
                // 当自定义属性改变时，传递给Main.vue的style属性
                this.$emit("onChange", {
                    style: { ...val }
                });
            },
            deep: true
        }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
</style>