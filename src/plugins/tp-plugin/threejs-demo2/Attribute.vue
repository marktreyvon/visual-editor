<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="样式" name="style">
      <!-- 根据你开发的样式编辑能力和接口进行表单设计-->
      <el-form v-model="formData">
        <el-form-item label="字体大小">
          <el-input v-model="formData.fontSize"></el-input>
        </el-form-item>
        <el-form-item label="字体颜色">
          <tp-color-picker v-model="formData.color"/>
        </el-form-item>

        <el-form-item label="背景颜色">
          <tp-color-picker v-model="formData.bgColor"/>
        </el-form-item>
      </el-form>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useSceneDemo} from "@/plugins/tp-plugin/threejs-demo2/store/sceneRenderBackstage";

const sceneStore = useSceneDemo()
export default defineComponent({
  data() {
    return {
      activeNames: 'style',
      formData: {
        fontSize: 30,
        color: '',
        bgColor: '',
      }
    }
  },
  watch: {
    formData: {
      handler(val) {
        this.$emit("onChange", {
          style: val
        });
      },
      deep: true
    }
  }
  ,
  mounted() {
    if (this.formData.color === '') {
      //属性修改接口
      let obj = sceneStore.getColor()
      console.log(obj, "32832139213")
      this.formData.fontSize = obj.fontSize
      this.formData.color = obj.textColor
      this.formData.bgColor = obj.bgColor
    }

  }


})


</script>

<style lang="scss" scoped>

</style>