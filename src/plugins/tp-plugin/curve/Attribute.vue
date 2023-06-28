<template>
  <el-collapse v-model="activeNames">

    <el-collapse-item title="背景与边框" name="style1">
      <el-form v-model="formData">
        <el-form-item label="背景颜色">
          <el-color-picker v-model="formData.Color" />
        </el-form-item>

        <el-form-item label="背景透明度">
          <el-slider :min="0" :max="10" v-model="formData.slidingblock"></el-slider>
        </el-form-item>

        <el-form-item label="边框颜色">
          <el-color-picker v-model="formData.borderColor" />
        </el-form-item>

        <el-form-item label="边框宽度">
          <el-input v-model="formData.borderSize"></el-input>
        </el-form-item>

        <el-form-item label="边框圆角">
          <el-input v-model="formData.bordereduse"></el-input>
        </el-form-item>
      </el-form>
    </el-collapse-item>

    <el-collapse-item title="X轴" name="style2">
      <el-form v-model="formData">
        <el-form-item label="字体颜色">
          <el-color-picker v-model="formData.XTextColor" />
        </el-form-item>

        <el-form-item label="字体大小">
          <el-input v-model="formData.XfontSize"></el-input>
        </el-form-item>

        <el-form-item label="轴线颜色">
          <el-color-picker v-model="formData.XColor" />
        </el-form-item>
      </el-form>
    </el-collapse-item>

    <el-collapse-item title="Y轴" name="style3">
      <el-form v-model="formData">
        <el-form-item label="字体颜色">
          <el-color-picker v-model="formData.YTextColor" />
        </el-form-item>

        <el-form-item label="字体大小">
          <el-input v-model="formData.YfontSize"></el-input>
        </el-form-item>

        <el-form-item label="轴线颜色">
          <el-color-picker v-model="formData.YColor" />
        </el-form-item>
      </el-form>
    </el-collapse-item>
  </el-collapse>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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
      formData: {
        fontSize: 20,
        fontColor: '',
        bgColor: '',
        Color: '#FFFFFF',
        slidingblock: 10,
        borderColor: '',
        borderSize: '',
        bordereduse: 0,
        XfontSize: 12,
        XTextColor: '#9a9a9a',
        XColor: '',
        YfontSize: 12,
        YTextColor: '#9a9a9a',
        YColor: ''
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
      deep: true,
    }
  },
  mounted() {
    if (this.data) {
      const jsonStr = JSON.stringify(this.data);
      console.log(jsonStr, '++')
      if (jsonStr === '{}') return;
      const jsonObj = JSON.parse(jsonStr);
      this.formData = jsonObj;
    }

  }
})


</script>

<style lang="scss" scoped></style>