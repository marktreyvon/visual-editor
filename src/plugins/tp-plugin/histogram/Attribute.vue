<template>

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

  <!-- X轴 -->
  <el-collapse v-model="activeNames">
    <el-collapse-item title="X轴" name="style6">

      <el-form v-model="formData" label-width="140px" label-position="left">

        <el-form-item label="显示">
          <el-switch v-model="formData.XshowHied" />
        </el-form-item>

        <el-form-item label="字体大小">
          <el-input v-model="formData.sizeMix"></el-input>
        </el-form-item>

        <el-form-item label="文本颜色">
          <el-color-picker v-model="formData.Xcolor" />
        </el-form-item>


        <el-form-item label="轴线颜色">
          <el-color-picker v-model="formData.Xcolor1" />
        </el-form-item>

        <el-form-item label="轴线宽度">
          <el-input v-model="formData.Axiswidth"></el-input>
        </el-form-item>

      </el-form>

    </el-collapse-item>
  </el-collapse>

  <!-- Y轴 -->
  <el-collapse v-model="activeNames">

    <el-collapse-item title="Y轴" name="style3">

      <el-form-item label="显示">
          <el-switch style="margin-left: 30px;" v-model="formData.YshowHied" />
        </el-form-item>

        <el-form-item label="字体大小">
          <el-input v-model="formData.Ysize"></el-input>
        </el-form-item>

        <el-form-item label="文本颜色">
          <el-color-picker v-model="formData.Ycolor" />
        </el-form-item>


        <el-form-item label="轴线颜色">
          <el-color-picker v-model="formData.Ycolor1" />
        </el-form-item>

        <el-form-item label="轴线宽度">
          <el-input v-model="formData.Ysizeborder"></el-input>
        </el-form-item>

    </el-collapse-item>

  </el-collapse>

  <!-- 柱形 -->
  <el-collapse v-model="activeNames">

    <el-collapse-item title="柱形" name="style4">

      <el-form-item label="柱形颜色">
          <el-color-picker style="width: 175px;position: absolute;right: 0;" v-model="formData.Zcolor" />
        </el-form-item>

        <el-form-item label="宽度">
          <el-input style="width: 175px;position: absolute;right: 0;" v-model="formData.Zwidth"></el-input>
        </el-form-item>

        <el-form-item label="字体大小">
          <el-input v-model="formData.Zsize"></el-input>
        </el-form-item>

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
      activeNames1: 'style1',
      formData: { 
        Zsize:15, // 柱状图里面的字体大小
        Zwidth:10, // 柱形宽度
        Zcolor:'',// 柱形颜色
        Ysizeborder:1,// Y轴宽度
        Ycolor1:'#000000', // Y轴颜色
        Ycolor:'#000000',//Y轴文本颜色
        Ysize:15,
        YshowHied:true, // Y轴展现与隐藏
        Axiswidth:1,// 轴线宽度
        Xcolor1:'', // X轴的轴体颜色
        Xcolor:'#000000', // X轴的字体颜色
        sizeMix:15, // X轴的字体大小
        pointerShow: true,   // 标题隐藏或展示
        sizeborder: '',   // 字体大小
        fontSize:'',
        header: '',   // 标题名字
        color1: '',  // 字体颜色
        XshowHied:true, // X轴影藏和展示
        bordereduse: 0,
        slidingblock: 10,
        headline: '',
        borderSize: '',
        borderAlpha: '',
        reduce: '',
        color: '#FFFFFF',
        bgColor: '',
        borderreudce: "",
        beij: '10',
        textPosition: '',
      },
    }
  },
  methods: {

  },

  watch: {
    formData: {
      handler(val) {
        this.formData = val;
        this.$emit("onChange", {
          style: val
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
            this.formData = jsonObj;
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