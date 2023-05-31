<template>
  <!-- 标题 -->
  <el-collapse v-model="activeNames">

    <el-collapse-item title="标题" name="style">

      <el-form v-model="formData" label-width="140px" label-position="left">

        <el-form-item label="标题">
          <el-input v-model="formData.header"></el-input>
        </el-form-item>

        <el-form-item label="字体大小">
          <el-input v-model="formData.sizeborder"></el-input>
        </el-form-item>


        <el-form-item label="字体颜色选择器">
          <el-color-picker v-model="formData.color1" />
        </el-form-item>


      </el-form>

    </el-collapse-item>

  </el-collapse>

  <!-- 背景与边框 -->
  <el-collapse v-model="activeNames">

    <el-collapse-item title="背景与边框" name="style1">

      <el-form v-model="formData" label-width="140px" label-position="left">

        <el-form-item label="背景颜色">
          <el-color-picker v-model="formData.color" />
        </el-form-item>

        <el-form-item label="背景透明度">
          <el-slider :min="0" :max="10" v-model="formData.slidingblock"></el-slider>
        </el-form-item>

        <el-form-item label="边框颜色">
          <el-color-picker v-model="formData.bgColor" />
        </el-form-item>

        <el-form-item label="边框宽度">
          <el-input v-model="formData.borderSize"></el-input>
        </el-form-item>

        <el-form-item label="边框透明度">
          <el-slider :min="0" :max="10" v-model="formData.beij"></el-slider>
        </el-form-item>

        <el-form-item label="边框圆角">
          <el-input v-model="formData.bordereduse"></el-input>
        </el-form-item>

      </el-form>

    </el-collapse-item>

  </el-collapse>


  <!-- 图例 -->
  <el-collapse v-model="activeNames">

    <el-collapse-item title="图例" name="style2">

      <el-form v-model="formData" label-width="140px" label-position="left">


        <el-form-item label="文字位置">
          <el-select v-model="formData.textPosition" placeholder="请选择">
            <el-option :label="item" :value="item" v-for="(item, index) in formData.dropList" />
          </el-select>
        </el-form-item>

        <el-form-item label="显示图例">
          <el-switch v-model="formData.pointerShow" />
        </el-form-item>
      </el-form>

    </el-collapse-item>

  </el-collapse>
</template>
 
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      activeNames: 'style',
      activeNames1: 'style1',
      formData: {
        pointerShow: true,
        sizeborder: '',
        header: '',
        color1: '',
        bordereduse: 0,
        slidingblock: 10,
        headline: '',
        borderSize: '',
        borderAlpha: '',
        reduce: '',
        color: '',
        bgColor: '',
        borderreudce: "",
        beij: '10',
        dropList: ['top', 'top-left', 'top-right', 'left', 'left-top', 'left-bottom', 'right', 'right-top', 'right-bottom', 'bottom', 'bottom-left', 'bottom-right'],
        textPosition: '',
      },
    }
  },
  methods: {

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
})


</script>
  
<style scoped >
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.el-icon-arrow-down {
  font-size: 12px;
}
</style>