<template>
  <el-collapse v-model="activeNames" accordion>
    <!-- <el-collapse-item title="样式" name="style">
      <el-form v-model="formData">
        <el-form-item label="字体大小">
          <el-input v-model="formData.fontSize"></el-input>
        </el-form-item>

        <el-form-item label="字体颜色">
          <el-input v-model="formData.fontColor"></el-input>
        </el-form-item>

        <el-form-item label="背景颜色">
          <el-input v-modl="formData.bgColor"></el-input>
        </el-form-item>
      </el-form>
    </el-collapse-item> -->

    <el-collapse-item title="属性" name="attribute">
      <el-form v-model="table">
        <el-form-item label="轮播">
          <el-switch v-model="table.carousel"></el-switch>
        </el-form-item>
        <el-form-item label="每页行数">
          <el-input-number v-model="table.plimit" :min="1" :max="10"></el-input-number>
        </el-form-item>
      </el-form>
    </el-collapse-item>

    <el-collapse-item title="背景和边框" name="bgandbd">
      <el-form v-model="table">
        <el-form-item label="背景颜色">
          <el-color-picker v-model="table.table.bgColor"></el-color-picker>
        </el-form-item>
        <el-form-item label="显示边框">
          <el-switch v-model="table.table.showBorder"></el-switch>
        </el-form-item>
        <el-form-item v-if="table.table.showBorder" label="边框宽度">
          <el-input-number v-model="table.table.borderWidth" :min="1" :max="10"></el-input-number>
        </el-form-item>
        <el-form-item v-if="table.table.showBorder" label="边框颜色">
          <el-color-picker v-model="table.table.borderColor"></el-color-picker>
        </el-form-item>
      </el-form>
    </el-collapse-item>

    <el-collapse-item title="表格边框" name="bgbk">
      <el-form v-model="table">
        <el-form-item label="显示边框">
          <el-switch v-model="table.border.showBorder"></el-switch>
        </el-form-item>
        <el-form-item v-if="table.border.showBorder" label="边框颜色">
          <el-color-picker v-model="table.border.borderColor"></el-color-picker>
        </el-form-item>

        <el-form-item label="显示斑马纹">
          <el-switch v-model="table.border.showZebrastripe"></el-switch>
        </el-form-item>
        <el-form-item v-if="table.border.showZebrastripe" label="斑马纹颜色">
          <el-color-picker v-model="table.border.zebrastripeColor"></el-color-picker>
        </el-form-item>
      </el-form>
    </el-collapse-item>

    <el-collapse-item title="表头" name="btou">
      <el-form v-model="table">

        <el-form-item label="背景颜色">
          <el-color-picker v-model="table.header.bgColor"></el-color-picker>
        </el-form-item>

        <el-form-item label="字体大小">
          <el-input v-model="table.header.fontSize"></el-input>
        </el-form-item>

        <el-form-item label="字体颜色">
          <el-color-picker v-model="table.header.fontColor"></el-color-picker>
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
      activeNames: 'attribute',
      // formData: {
      //   fontSize: 20,
      //   fontColor: '',
      //   bgColor: ''
      // },
      table: {
        carousel: false, //轮播
        plimit: 3, //每页行数
        table: {
          bgColor: '#FFFFFF',
          showBorder: false,
          borderWidth: 1,
          borderColor: '#333'
        },
        border: {
          showBorder: false,
          borderColor: '#333',
          showZebrastripe: false,
          zebrastripeColor: '#666666'
        },
        header: {
          bgColor: '#11223344',
          fontSize: 10,
          fontColor: '#fff'
        }
      }
    }
  },
  watch: {
    'table.border.showBorder': {
      handler(val) {
        this.table.border.showZebrastripe = false
      },
      immediate: true
    },
    table: {
      handler(val) {
        this.$emit("onChange", {
          value: val
        });
      },
      deep: true
    }
  }
})
</script>

<style lang="scss" scoped></style>