<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="视频配置" name="option">
            <el-form v-model="formData" label-width="80px" label-position="left">
                <el-form-item label="自动播放">
                    <el-switch   v-model="formData.autoPlay"/>
                </el-form-item>

                <el-form-item label="视频地址">
                    <el-input type="textarea" row="2" v-model="formData.videoSrc" 
                        placeholder="支持mp4、m3u8格式"/>
                </el-form-item>

            </el-form>
        </el-collapse-item>
    </el-collapse>
</template>

<script>
import { defaultOption } from "./default"; 
export default {
  components: {},
  props: {},
  data() {
    return {
        activeNames: "option",
        formData: { ...defaultOption }
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