<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item title="样式" name="style">
            <el-form v-model="formData" label-width="80px" label-position="left">

                
                <el-form-item label="填充颜色">
                    <el-color-picker v-model="formData.body.fill" show-alpha/>
                </el-form-item>

                <el-form-item label="边框宽度">
                    <el-input v-model="formData.body.strokeWidth"></el-input>
                </el-form-item>

                <el-form-item label="边框颜色">
                    <el-color-picker v-model="formData.body.stroke" />
                </el-form-item>
            </el-form>
        </el-collapse-item>
    </el-collapse>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from "vue";
const activeNames = ref("style");
const formData = reactive({
    body: {
        fill: "#ffffff",
        strokeWidth: 1,
        stroke: "#000000",
    }
})

const emit = defineEmits(["onChange"]);
watch(formData, (val) => {
    // 当自定义属性改变时，传递给Main.vue的style属性
    console.log('BaseNode.Attribute.watch.formData', val)
  if(!val.body.fill){
    val.body.fill="#00000000"
  }
    emit("onChange", {
        style: { ...val }
    });
}, { deep: true })


</script>

<style lang="scss" scoped>

</style>